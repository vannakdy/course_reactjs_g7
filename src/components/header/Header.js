import {Link} from "react-router-dom"
import "./Header.css";
import {HiHome} from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {AiOutlineLogin,AiOutlineLogout} from "react-icons/ai"

function Header() {
  return (
    <div className="row-menu">
      <nav className="menu">
        <Link to="/"><HiHome/>Home</Link>  
        <Link to="student">Student</Link> 
        <Link to="student">Teacher</Link> 
        <Link to="student">Classroom</Link> 
        <Link to="student">Manage User</Link> 
        <Link to="about">About</Link> 
      </nav>
      <nav className="menu"> 
        <Link to="login"><AiOutlineLogin/>Login</Link>
        <Link to="register"><AiOutlineLogout/>Register</Link> 
        <Link to="register"><IoMdNotifications/></Link> 
        <Link to="register"><BsFillPersonFill/></Link> 
        
      </nav>
    </div>
  );
}

export default Header;
