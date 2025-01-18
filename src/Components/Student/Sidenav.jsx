import React from "react";
import "./Sidenav.css"; 
import { Link } from "react-router-dom";

const li = [
  { link: "/viewpass", text: "View Pass" },
  { link: "/Busdetails", text: "Apply for Bus Pass" },
 
  { link: "/student", text: "Logout" },
];

// Sidebar Component
const SideDraw = (props) => {
  let drawClasses = "sidebar";
  if (props.show) {
    drawClasses = "sidebar active";
  }
  return (
    <nav className={drawClasses}>
      <button className="close-btn" onClick={props.click}>
        X
      </button>
      <ul className="sidebar-ul">
        {li.map((objLink, i) => (
          <li key={i}>
            <Link to={objLink.link}>{objLink.text}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

// Backdrop Component
const BackDrop = (props) => <div className="backDrop" onClick={props.click} />;

// Sidebar Button Component
const SideDrawBtn = (props) => (
  <button className="toggle-Btn" onClick={props.click}>
    <div className="btn-line"></div>
    <div className="btn-line"></div>
    <div className="btn-line"></div>
  </button>
);

// Toolbar Component
const Toolbar = (props) => (
  <header className="toolbar">
    <nav className="toolbar-nav">
      <div>
        <SideDrawBtn click={props.drawClickHandler} />
      </div>
      <div className="logo">
        <Link to="/">NEC COLLEGE BUS MANAGEMENT</Link>
      </div>
      <div className="spacer"></div>
      <div>
        <ul>
        
          <li>
            <Link to="#"> <i className="fas fa-user profile-icon"></i></Link>
          </li>
         
        </ul>
      </div>
    </nav>
  </header>
);

// Main Sidenav Component
class Sidenav extends React.Component {
  state = {
    sideDrawOpen: false,
  };

  drawToggleHandler = () => {
    this.setState((prevState) => ({
      sideDrawOpen: !prevState.sideDrawOpen,
    }));
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.sideDrawOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }

    return (
      <div style={{ height: "100%" }} className="main1">
        <Toolbar drawClickHandler={this.drawToggleHandler} />
        <SideDraw
          click={this.backDropClickHandler}
          show={this.state.sideDrawOpen}
        />
        {backDrop}
      </div>
    );
  }
}

export default Sidenav;
