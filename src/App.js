import './App.css';
import { Home } from './Components/Home/Home';
import { Navbar } from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import { Admin } from './Components/Admin/Admin';
import { DeptCordinator } from './Components/DeptCordinator/DeptCordinator';
import { Student } from './Components/Student/Student';
import Sidenav from './Components/Student/Sidenav';
import ApplicationForm from './Components/Student/Application';
import Main from './Components/DeptCordinator/Main';
import Busdetails from './Components/Student/Busdetails';
import Buslayout from './Components/Student/Buslayout';
import Addbusdetails from './Components/Admin/Addbusdetails';
import Mainpage from './Components/Admin/Mainpage';
import Verifiedapplications from './Components/DeptCordinator/Verifiedapplications';
import { Sidenav1 } from './Components/Student/Sidenav1';
import { Main1 } from './Components/DeptCordinator/Main1';
import { Mainadmin1 } from './Components/Admin/Main1';
import Adminprofile  from './Components/Admin/Adminprofile';
import { Deptprofile } from './Components/DeptCordinator/Deptprofile';
import ManagePass from './Components/Admin/ManagePass';
import { Viewpass } from './Components/Student/Viewpass';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>

      <Navbar/>
      

    <Routes>
    <Route path='/' element={<Home/>}></Route>
      <Route path='/admin' element={<Admin/>}></Route>
      <Route path='/dept' element={<DeptCordinator/>}></Route>
      <Route path='/student' element={<Student/>}></Route>
      <Route path='/sidenav' element={<Sidenav/>}></Route>
      <Route path='/sidenav1' element={<Sidenav1/>}></Route>
      <Route path='/application' element={<ApplicationForm/>}></Route>
      <Route path="/maindept" element={<Main/>}></Route>
      <Route path="/maindept1" element={<Main1/>}></Route>
      <Route path='/mainadmin' element={<Mainpage/>}></Route>
      <Route path='/mainadmin1' element={<Mainadmin1/>}></Route>
      <Route path='/busdetails' element={<Busdetails/>}></Route>
      <Route path='/buslayout' element={<Buslayout/>}></Route>
      <Route path='/addbusdetails' element={<Addbusdetails/>}></Route>
      <Route path='/verifiedapplications' element={<Verifiedapplications/>}></Route>
  <Route path='/cardprofile' element={<Adminprofile/>}></Route>
  <Route path='/deptprofile' element={<Deptprofile/>}></Route>
  <Route path='/managepass' element={<ManagePass/>}></Route>
  <Route path='/viewpass' element={<Viewpass/>}></Route>
    </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;
