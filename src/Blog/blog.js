import './blog.css'
import { useEffect, useState } from 'react'
import React from 'react'
import axios from 'axios'
import styled from 'styled-components';

const DIV=styled.div`

`
function Blog() {
    const [data, setData] = useState([{ firstname: '', lastname: '', phonenumber: '', education: '', information: "",yourimg:"" }])

    useEffect(() => {
        axios.get("http://localhost:6868/api/blog/allstudent")
            .then(res => {
                setData(res.data);
            })
    }, [])
   
console.log(data)
    return (
        <>
            <h1>Blog Post of Student Information</h1>
            <DIV >
                {data.length > 0 &&  data.map((item,index)=>{
                    return(<div className='footer' key={index}><h2>{item.firstname} {item.lastname}</h2>

                    <h4> {item.phonenumber}</h4>  <h4> {item.education}</h4>  
                      <img  style={{width:"300px"}} src={item.yourimg} alt="name"/>
                      <p>{item.information}</p>
                      </div>)
                  
                })}
            </DIV>

        </>
    )
}

export default Blog
