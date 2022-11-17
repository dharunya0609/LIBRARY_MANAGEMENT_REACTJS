import {Link} from "react-router-dom";
import React,{useState,useEffect} from "react";
import axios from "axios";
import Table from 'react-bootstrap/Table';
import {TfiPencilAlt } from "react-icons/tfi";
import { VscTrash } from "react-icons/vsc";
const ContactList= ()=>{
    const [users,setUsers]=useState(null)
    const [dis,setDis]=useState(false)
    const getData = async()=>{
        const {data}=await axios.get('http://localhost:8080/all')
        console.log(data)
        setUsers(data)
    }
    useEffect(()=>{
        getData()
    },[])
    useEffect(()=>{
            if(users!=null){
                setDis(true)
            }
    },[users])

    const deleteCategory =async(e,id)=>{
        e.preventDefault()
        await axios.delete(`http://localhost:8080/${id}`)
        setDis(false)
        const {data}=await axios.get('http://localhost:8080/all')
        
        setUsers(data)

    }
    return(
      
       
        

        <>
        <center>
        {dis && <div>
                        <h5> LIBRARY STOCK DETAILS MANAGEMENT</h5><br></br>
               
                    <Table striped bordered hover  responsive="sm">
                    <thead>
                      <tr>
                        <th>SUBJECT</th>
                        <th>AUTHOR</th>
                        <th>COPIES AVAILABLE</th>
                        <th>RACK NUMBER</th>
                        <th>EDIT</th>
                        <th>TRASH</th>
                      </tr>
                    </thead>
                    <tbody>
                    {users.map(m=>( 
                      <tr>
                        <td>{m.Sname}</td>
                        <td>{m.Aname}</td>
                        <td>{m.cpy}</td>
                        <td>{m.isbn}</td>
                        <td> <Link  to={`/EditContact/${m._id}`}>
                        <TfiPencilAlt color="black" size={25}/></Link> </td>
                        <td>
                            <button className='btn btn-secondary my-1' onClick={ (e)=> deleteCategory(e,m._id)}>
                            <VscTrash/></button>  
                        </td>
                      </tr>
                       ))}
                    </tbody>
                  </Table>
                   
               
                </div>
                }</center>        
        </>        
    )
}
export default ContactList;