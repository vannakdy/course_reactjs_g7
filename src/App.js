import HomePage from "./page/HomePage";
import AboutUsPage from "./page/AboutUsPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import StudentPage from "./page/StudentPage";
import Header  from "../src/components/header/Header"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App(){
  return (
   <BrowserRouter>
      <Header />
      <div style={{height:50}} />
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/about" element={<AboutUsPage/>} />
        <Route path="/login" element={<LoginPage/>} />
        <Route path="/register" element={<RegisterPage/>} />
        <Route path="/student" element={<StudentPage/>} />
        <Route path="*" element={<h1>Route Not Found!</h1>} />
      </Routes>
      
   </BrowserRouter>
  )
}


export default App;