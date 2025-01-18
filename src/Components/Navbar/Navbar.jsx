import { Link } from "react-router-dom";
export const Navbar=()=>{return(
<>
  <style
    dangerouslySetInnerHTML={{
      __html:
        '\n* {\n  padding: 0;\n  margin: 0;\n  box-sizing: border-box;\n}\n\nbody {\n  font-family: "Lato", sans-serif;\n}\n\n.overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100vw;\n  height: 100vh;\n  background-color: rgba(0, 0, 0, 0.9);\n  z-index: -1;\n  opacity: 0;\n  transition: 1s all;\n}\n\n.navbar {\n  display: flex;\n  align-items: center;\n  width: 100vw;\n  background-color: #fff;\n  box-shadow: 0px 10px 10px 3px rgba(0, 0, 0, 0.3);\n  position: relative;\n  padding: 0px 70px;\n  background-color: #fff;\n}\n.navbar-logo {\n  color: #ff3f34;\n  text-decoration: none;\n  font-size: 25px;\n  padding: 0px 20px;\n}\n\n.navbar-links {\n  list-style-type: none;\n  display: flex;\n}\n.navbar-links li a {\n  display: block;\n  text-decoration: none;\n  color: #444;\n  padding: 20px 20px;\n  font-weight: 700;\n  transition: 0.4s all;\n}\n\n.navbar-links li.navbar-dropdown {\n  position: relative;\n}\n\n.navbar-links li.navbar-dropdown:hover .dropdown {\n  visibility: visible;\n  opacity: 1;\n  transform: translateY(0px);\n}\n\n.navbar-links li.navbar-dropdown .dropdown {\n  visibility: hidden;\n  opacity: 0;\n  position: absolute;\n  padding: 20px 0;\n  top: 100%;\n  transform: translateY(50px);\n  left: 0;\n  width: 250px;\n  background-color: #fff;\n  box-shadow: 0px 10px 10px 3px rgba(0, 0, 0, 0.3);\n  border-bottom-left-radius: 3px;\n  border-bottom-right-radius: 3px;\n  z-index: 111;\n  transition: 0.4s all;\n}\n.navbar-links li.navbar-dropdown .dropdown a {\n  padding-top: 10px;\n  padding-bottom: 10px;\n  font-weight: 400;\n}\n.navbar-dropdown .dropdown a:hover {\n  padding-left: 30px;\n}\n.navbar-links li a:hover {\n  color: #ff3f34;\n}\n\n.header {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  width: 100vw;\n  height: 90vh;\n  /* background-color: #f00; */\n  background-image: url("http://lorempixel.com/1366/698/food/");\n  background-size: cover;\n}\n\n.header-inner {\n  text-align: center;\n  color: #ff3f34;\n  text-shadow: 0px 10px 10px rgba(0, 0, 0, .8);\n}\n\n.header-inner h1 {\n  font-family: "Great Vibes", cursive;\n  font-size: 130px;\n}\n\n.header-inner form input[type="search"] {\n  position: relative;\n  width: 500px;\n  border: none;\n  padding: 15px;\n  border-radius: 27px;\n  box-shadow: 0px 0px 15px 3px rgba(0, 0, 0, 0.3);\n  z-index: 11;\n}\n.header-inner form input[type="search"]:focus {\n  outline: none;\n}\n\n.header-inner form input[type="search"]:focus + div {\n  z-index: 1;\n  opacity: 1;\n}\n\n::placeholder {\n  color: #666;\n  font-weight: 400;\n}\n'
    }}
  />
  <nav className="navbar">
    <Link to="/" className="navbar-logo">
      <i className="material-icons">NEC College</i> BusManagement</Link> 
   
    <ul className="navbar-links">
      
      
      <li className="navbar-dropdown">
        <a href="#">Home</a>
      
      </li>
      <li className="navbar-dropdown">
        <a href="#about">About</a>
       
      </li>
      <li className="navbar-dropdown">
        <a href="#services">Services</a>
       
      </li>
      <li className="navbar-dropdown">
        <a href="#contact">Contact Us</a>
       
      </li>
      <li className="navbar-dropdown">
        <a href="#">Login As</a>
        <div className="dropdown">
        <li><Link to="/student">Student</Link></li>
                <li><Link to="/dept">Dept Co-ordinator</Link></li>
                <li><Link to="/admin">Admin</Link></li>
          
        </div>
      </li>
    </ul>
  </nav>
  
</>
)}
