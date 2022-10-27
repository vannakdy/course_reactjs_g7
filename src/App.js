import HomePage from "./page/HomePage";
import AboutUsPage from "./page/AboutUsPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import StudentPage from "./page/StudentPage";
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App(){
  return (
   <BrowserRouter>

      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="about">About</Link> | {" "}
        <Link to="login">Login</Link> | {" "}
        <Link to="register">Register</Link> | {" "}
        <Link to="student">Student</Link> | {" "}
        <a href="login">Test a href to Login</a>
      </nav>

      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/student" element={<StudentPage/>} />
      </Routes>
      
   </BrowserRouter>
  )
}


export default App;