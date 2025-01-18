import React,{useState} from "react";
import './Crud.css';
export const Crud=()=>{
    const [data,setData]=useState([]);
    const [isModalOpen,setIsModalOpen]=useState(false);
   
        const [modalMode,setModelMode]=useState("Insert");
        const [formData,setFormData]=useState({id:"",name:"",email:""})
    const open=()=>{
        setIsModalOpen(true);
    }
    const close=()=>{
        setIsModalOpen(false);
    }
    const handleInputChange=(e)=>{
        const{name,value}=e.target;
        setFormData({...formData,[name]:value});
    }
    const handleSubmit=()=>{
        setData([...data,{...formData,id:Date.now().toString()}])
        close();
    }
    return(
 <div className="container">
    <button onClick={open}className="insert-button">Insert</button>
    
    {isModalOpen&&(<div className="modal">
        <div className="modal-content">
            <form><h1>Insert data</h1>
                <div>
                <label>Name:</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange}></input></div>
                <div>
                    
                <label>Email:</label>
                <input type="text" name="email" value={formData.email}onChange={handleInputChange}></input></div>
                
                <div>
                    <button onClick={close}>Close</button>
                    <button onClick={handleSubmit}>Submit</button>
                </div>
               
            </form>
        </div>
    </div>)}
    <thead className="modal-content">
        <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
        
        <td>Actions</td></tr>
    </thead>
    <tbody>
        {data.map((item)=>(
        <tr>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.email}</td>
        <td className="actions">
            <button className="read-btn">Read</button>
            <button className="update-btn">Update</button>
            <button className="delete-btn">Delete</button>
        </td>
        </tr>))}
    </tbody>
 </div>

)} 