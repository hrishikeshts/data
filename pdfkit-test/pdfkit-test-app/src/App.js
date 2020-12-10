import React, { useState } from "react";
import Axios from "axios";
import "./App.css";

export default function App() {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(name);

        Axios.post("http://localhost:4000", { name: name, email: email }).then(
            (res) => {
                console.log(res);
                console.log(res.data);
            }
        );
    };

    return (
        <form className='m-5 container w-50' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label for='exampleInputName'>Name</label>
                <input
                    type='text'
                    className='form-control'
                    id='exampleInputName'
                    placeholder='Enter name'
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                />
            </div>
            <div className='form-group'>
                <label for='exampleInputEmail1'>Email address</label>
                <input
                    type='email'
                    className='form-control'
                    id='exampleInputEmail1'
                    aria-describedby='emailHelp'
                    placeholder='Enter email'
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                />
            </div>
            <button type='submit' className='btn btn-primary'>
                Create PDF
            </button>
        </form>
    );
}
