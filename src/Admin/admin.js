import "../Admin/admin.css"
import React from "react"
import { useState, } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function Admin() {
    const [data, setData] = useState({ firstname: '', lastname: '', phonenumber: '', education: '', information: "",yourimg:"" })
    const [reset, setReset] = useState('')
    const [file, setFile] = useState('');
    const [checked, setChecked] = useState(false);

const navigate =useNavigate();
 
    //   firstname, lastname,phonenumber,education,information add information
    const handlechange = (e) => {
        const { name, value } = e.target;
        setData((prev) => {
            return { ...prev, [name]: value }
        })
        setReset({ firstname: '', lastname: '', phonenumber: '', education: '', information: "",yourimg:"" })
    }
    // checkbox
    const handlecheck = (e) => {
        const { checked, value } = e.target;
        setChecked(!checked);
        console.log(checked, value)
    }
    // image upload
    const handleimgchange = (e) => {
        console.log(e.target.files);
        setFile(e.target.files[0]);
    }
    // navigate
    const urlpathchange =()=>{
        navigate('/list')
    }
    // form submit
    const handleSubmit = (e) => {
        e.preventDefault(); // Once the form has been submitted, this function will post to the backend
        let formData = new FormData();
        formData.append('firstname', data.firstname);
        formData.append('lastname', data.lastname);
        formData.append('phonenumber', data.phonenumber);
        formData.append('education', data.education);
        formData.append('information', data.information);
        formData.append('file', file);
        const config = {
            headers: { 'content-type': 'multipart/form-data' }
        }
        axios.post("http://localhost:6868/api/blog/addstudent", formData, config)
            .then(res => {
                console.log(res.data);
                console.log(formData);
            })
    }
    console.log(data)
    return (<>
    <div>
        <section className="sign" id="sign">
            <div className="personal-form-header">
                <h1> Student Portal</h1>
                <h3>Blog Posts Student Details</h3>
            </div>
            <form onSubmit={handleSubmit} method="get" className="personal-form" >
                <div className="form-row">
                    <label >FirstName</label>
                    <input name="firstname" type="text" value={data.firstname} onChange={handlechange} placeholder="Please enter your firstname" />
                </div>
                <div className="form-row">
                    <label >LastName</label>
                    <input name="lastname" type="text" value={data.lastname} onChange={handlechange} placeholder="Please enter your lastname" />
                </div>
                <div className="form-row">
                    <label >Your Image</label>
                    <div className="Image">Drop here image
                        <input className="ChoosdImage" type="file" name="file"value={data.yourimg} onChange={handleimgchange} /></div>
                </div>

                <div className="form-row">
                    <label >PhoneNumber </label>
                    <input name="phonenumber" type="number" value={data.phonenumber} placeholder="Please enter your phonenumber " onChange={handlechange} />
                </div>
                <div className="form-row">
                    <label >Education </label>
                    <input name="education" type="text" value={data.education} placeholder="Please enter your education" onChange={handlechange} />
                </div>

                <div className="form-row">
                    <label >More information</label>
                    <textarea name="information" value={data.information} onChange={handlechange} placeholder="Please your information..."></textarea>
                </div>
                <div className="form-rows">
                    <label className="checkbox-label" >
                        <input id="available" name="available" type="checkbox" value="true" onChange={handlecheck} />
                    </label>
                </div>
                <span>I’m here by</span>
                <div className="form-rows">
                    <button type="submit" >Add Student</button>
                </div>
                <p>React component and the Node.js server to send the blog post data and store it in the database.
                    Node server is find mongodb to data retrived to use this button below </p>
                <div className="form-rows">
                    <button type="submit" onClick={urlpathchange}  >Studentlist</button>
                </div>

            </form>
        </section>
        </div>
    </>)
}
export default Admin

