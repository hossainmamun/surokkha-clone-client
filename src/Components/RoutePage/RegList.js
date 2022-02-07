import React, { useContext, useEffect, useState } from 'react';
import { globalUser } from '../../App.js';
import RegTable from './RegTable.js';

const RegList = () => {
    const [loggedInUser, setLoggedInUser] = useContext(globalUser)
    const [regList, setRegList] = useState([])
    const [admin, setAdmin] = useState(false)
    // ! ***************** make admin code ****************
    /* const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const handleSetAdmin = () => {
        const adminInfo = {
            name: name,
            email: email,
        }
        fetch('https://dry-sea-85373.herokuapp.com/adminCollection', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(adminInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err + 'admin deal failed')
            })
    } */


    // ! **************** load vaccine registration list ***************
    useEffect(() => {
        loadRegistration()
    }, [])

    const loadRegistration = () => {
        fetch('https://dry-sea-85373.herokuapp.com/registration-list')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setRegList(data)
            })
    }

    // ! ********** admin control to access registration list *********
    useEffect(() => {
        fetch('https://dry-sea-85373.herokuapp.com/admin-control', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loggedInUser)
        })
            .then(res => res.json())
            .then(data => {
                setAdmin(data)
            })
    })

    return (
        <div style={{ marginTop: '100px', marginBottom: '100px' }}>
            {/* <div className="row">
                <div className="col-md-6">
                    <div className="form-group">
                        <input type="text" name="" id="" onChange={(e) => setName(e.target.value)} className="form-control" placeholder='name' />
                        <input type="email" name="" id="" onChange={(e) => setEmail(e.target.value)} className="form-control" placeholder='email' />
                    </div>
                </div>
            </div>
            <button className='btn btn-dark' onClick={handleSetAdmin}>click</button> */}

            <div className='mt-5'>
                <div className='text-center mb-4'>
                    <h3>ভ্যাকসিন নিবন্ধন তালিকা</h3>
                </div>
                <div>
                    {
                        admin ?
                            <RegTable regList={regList} loadRegistration={loadRegistration} /> :
                            <div className='text-center' style={{ marginBottom: '400px' }}>
                                <h3>sorry this page is available for authorize person only</h3>
                            </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default RegList;