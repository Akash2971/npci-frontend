import React, { useState } from 'react';
import {Navigate} from 'react-router-dom'
const Register = () => {

    const [entityName,setEntityName] = useState('');
    const [memberAddress,setMemberAddress] = useState('');
    const [privacyAddress,setPrivacyAddress] = useState('');
    const [memberStatus, setMemberStatus] = useState('');
    const [memberType, setMemberType] = useState('');
    const [redirect,setRedirect] = useState(false);
    
    const submit = async (e)=>{
        // e.preventDefault();

        // const response = await fetch('/api/register',{
        //     method: 'POST',
        //     headers: {'Content-type':'application/json'},
        //     body: JSON.stringify({
        //         name,email,password
        //     })

            
        // });

        // if(response.ok){
        //     const content = await response.json();
        //     console.log(content)
    
        //     setRedirect(true)
        // }
        // else{
        //     response.text().then(function (text) {
        //         // do something with the text response
        //         alert(text);
        //       });
        // }
       

    }

    if(redirect){
        return <Navigate to="/"></Navigate>
    }

    return ( 
        <>
            <div className="log-container">
                <div className="log-logo">
                    <h1>Registration</h1>
                </div>
                <div className="log-form-container">
                    <div className="log-form">
                        <form className = "login-form" onSubmit = {submit}>
                            <div className="form-row">
                                <p>Entity Name</p><input className = "log-pass" type = "text" placeholder = "Name" required onChange = {e=>setEntityName(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p>memberAddress</p><input className = "log-email" type = "email" placeholder = "memberAddress" required onChange = {e=>setMemberAddress(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p>privacyAddress</p><input className = "log-pass" type = "text" placeholder = "privacyAddress" required onChange = {e=>setPrivacyAddress(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p>memberStatus</p><input className = "log-pass" type = "text" placeholder = "memberStatus" required onChange = {e=>setMemberStatus(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p>memberType</p><input className = "log-pass" type = "text" placeholder = "memberType" required onChange = {e=>setMemberType(e.target.value)}></input>
                            </div>
                            <div className="form-row">
                                <p><button className = "login-btn" type = "submit">Register</button></p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        
        </>
     );
}

 
export default Register;