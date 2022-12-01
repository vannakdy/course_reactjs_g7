import "./App.css"
import HomePage from "./page/HomePage";
import AboutUsPage from "./page/AboutUsPage";
import LoginPage from "./page/LoginPage";
import RegisterPage from "./page/RegisterPage";
import StudentPage from "./page/StudentPage";
import TeacherPage from "./page/TeacherPage";
import StudentCreatePage from "./page/StudentCreatePage";
import Header  from "../src/components/header/Header"
import {BrowserRouter,Routes,Route,Link} from "react-router-dom"

function App(){
  return (
   <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/about" element={<AboutUsPage/>} />
          <Route path="/login" element={<LoginPage/>} />
          <Route path="/register" element={<RegisterPage/>} />
          <Route path="/student" element={<StudentPage/>} />
          <Route path="/student/create" element={<StudentCreatePage/>} />
          <Route path="/student/create/:id" element={<StudentCreatePage/>} />

          <Route path="/teacher" element={<TeacherPage/>} />
          <Route path="*" element={<h1>Route Not Found!</h1>} />
        </Routes>
      </Header>
      
   </BrowserRouter>
  )
}


export default App;