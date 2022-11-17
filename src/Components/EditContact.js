import React,{useState,useEffect} from 'react';
import {Link,useParams} from "react-router-dom";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
const EditContact  = () => {
        const navigate = useNavigate()
         let { contactId} = useParams()
   
        const [user,setUsers]=useState(null)
        const [dis,setDis]=useState(false)
        const getData = async()=>{
            const {data}=await axios.get(`http://localhost:8080/view/${contactId}`)
            console.log(data)
            setUsers(data)
        }
        useEffect(()=>{
            getData()
        },[])
        useEffect(()=>{
                if(user!=null){
                    setSname(user.Sname)
                    setAname(user.Aname)
                    setCpy(user.cpy)
                    setIsbn(user.isbn)
                    
                    
                    setDis(true)
                }
        },[user])
    console.log(user)
    const [Sname,setSname]=useState('')
    const [Aname,setAname]=useState('')
    const [cpy,setCpy]=useState('')
    const [isbn,setIsbn]=useState('')


    const handleSubmit =async (e) =>{
        e.preventDefault();
        const {data}=await axios.post(`http://localhost:8080/edit/${user._id}`,{Sname,Aname,cpy,isbn})
        navigate('/bookCart')
}
   
    return (
        
        <>
        <section className='add-contact p-3'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h4 text-primary fw-bold">
                            Edit Details
                        </p>
                        <p className='fst-italic'>oooo</p>
                    </div>
                </div>
                {dis && 
                <div className="row align-items-center">
                    <div className="col-md-4">
                            <form>
                               <div className="mb-2">
                               <label className="form-label">Subject Name</label> 
                                   <input type="text" className='form-control' value={Sname} onChange={e => setSname(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Author Name</label> 
                                   <input type="text" className='form-control' value={Aname} onChange={e => setAname(e.target.value)} />
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">Copies available</label> 
                                   <input type="number" className='form-control' value={cpy} onChange={e => setCpy(e.target.value)}/>
                                </div>  
                                <div className="mb-2">
                                <label className="form-label">ISBN</label>
                                   <input type="number" className='form-control' value={isbn} onChange={e => setIsbn(e.target.value)} />
                                </div>  
                              
                              
                                  
                                <div className="mb-2">
                                   <input type="submit" className='btn btn-primary' value='Update' onClick={handleSubmit}/>
                                   <Link to={'/bookCart'} className="btn btn-dark ms-2" >Cancel</Link>
                               
                                </div>   
                            </form>
                    </div>
                 
                </div>
}
            </div>
        </section>
        </>
    )
};
export default EditContact ;