import React from "react";
import {useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import axios from "axios";

import style from "../Css/AddStock.module.css";
import {useNavigate} from 'react-router-dom'
const AddContact = () => {
    const [Sname, setSname] = useState('')
    const [Aname, setAname] = useState('')
    const [cpy, setCpy] = useState('')
    const [isbn, setIsbn] = useState('')
    const [cost, setCost] = useState('')
    const [pub, setPub] = useState('')

    const navigate = useNavigate()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {data} = await axios.post('http://localhost:8080/signup', {Sname, Aname, cpy, isbn,cost,pub})
        navigate('/bookCart')
    }
    return (
        <>
        <div className={style.s2}>

            <section className='add-contact p-3 center-block' >
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="display-6 fw-bold" style={{color:"lightsteelblue"}}>
                                STOCK MANAGEMENT DETAILS
                            </p>
                            <hr></hr>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-4">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-2">
                                    <label className="form-label">SUBJECT NAME</label>
                                    <input type="text" className='form-control'
                                        value={Sname}
                                        onChange={
                                            e => setSname(e.target.value)
                                        }/>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">AUTHOR NAME</label>
                                    <input type="text" className='form-control'
                                        value={Aname}
                                        onChange={
                                            e => setAname(e.target.value)
                                        }/>
                                </div>

                                <div className="mb-2">
                                    <label className="form-label">COPIES AVAILABLE</label>
                                    <input type="number" className='form-control'
                                        value={cpy}
                                        onChange={
                                            e => setCpy(e.target.value)
                                        }/>
                                </div>
                                <div className="mb-2">
                                    <label className="form-label">RACK NUMBER</label>
                                    <input type="number" className='form-control'
                                        value={isbn}
                                        onChange={
                                            e => setIsbn(e.target.value)
                                        }/>

                                </div>
                                <div className="mb-2">
                                    <label className="form-label">PUBLISHER NAME</label>
                                    <input type="text" className='form-control'
                                        value={pub}
                                        onChange={
                                            e => setPub(e.target.value)
                                        }/>
                                        
                                </div>
                                
                                <div className="mb-2">
                                    <label className="form-label">Cost</label>
                                    <input type="number" className='form-control'
                                        value={cost}
                                        onChange={
                                            e => setCost(e.target.value)
                                        }/>
                                        
                                </div>


                                <div className="mb-2">
                                    <input type="submit" className='btn btn-secondary' value='PUSH TO CART'/>
                                    <Link to={'/bookCart'}
                                        className="btn btn-danger ms-2">CANCEL</Link>

                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
            </div>
        </>
    )
};
export default AddContact;


