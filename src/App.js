
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Admin from "./Admin/admin";
import Blog from "./Blog/blog";

function App() {
  return (
<BrowserRouter>
      <Routes>
        <Route>
          <Route path='/' element={<Admin />} /> 
        </Route>
        <Route>
          <Route path='/list' element={<Blog />} /> 
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
