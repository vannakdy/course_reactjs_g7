import {Link} from "react-router-dom"
import "./Header.css";
import {HiHome} from "react-icons/hi"
import {BsFillPersonFill} from "react-icons/bs"
import {IoMdNotifications} from "react-icons/io"
import {AiOutlineLogin,AiOutlineLogout} from "react-icons/ai"

function Header(props) {
  return (
    <div>

      <div className="row-menu sticky-header">
        
        <div className="menu">
          <Link className="item" to="/">
            <HiHome/> <span>Home</span>
          </Link>  
          <Link to="student">Student</Link> 
          <Link to="teacher">Teacher</Link> 
          <Link to="classroom">Classroom</Link> 
          <Link to="manageuser">Manage User</Link> 
          <Link to="about">About</Link> 
        </div>

        <div className="menu"> 
          <Link to="login"><AiOutlineLogin/>Login</Link>
          <Link to="register"><AiOutlineLogout/>Register</Link> 
          <Link to="register"><IoMdNotifications/></Link> 
          <Link to="register"><BsFillPersonFill/></Link> 
        </div>

      </div>

      <div style={{marginTop:60,padding:"10px 20px"}}>
          {props.children}
      </div>
    </div>
  );
}

export default Header;
