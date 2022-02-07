import React from 'react';

const RegTable = ({ regList, loadRegistration }) => {

    const DeleteRegistration = (id) => {
        fetch(`https://dry-sea-85373.herokuapp.com/delete-registration/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    window.alert('Appointment delete successfully')
                }
                loadRegistration()
            })
    }
    return (
        <div className='container'>
            <div className='table-responsive'>
                <table className='table table-bordered'>
                    <thead>
                        <tr className='text-capitalize'>
                            <th>no</th>
                            <th>nid</th>
                            <th>name</th>
                            <th>father name</th>
                            <th>mother name</th>
                            <th>date of birth</th>
                            <th>age</th>
                            <th>center id</th>
                            <th>division</th>
                            <th>action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            regList.map((registration, index) =>
                                <tr className='text-capitalize'>
                                    <td>{index + 1}</td>
                                    <td>{registration.nid}</td>
                                    <td>{registration.name}</td>
                                    <td>{registration.fatherName}</td>
                                    <td>{registration.motherName}</td>
                                    <td>{`${registration.day}-${registration.month}-${registration.year}`}</td>
                                    <td>{registration.age}</td>
                                    <td>{registration.centerId}</td>
                                    <td>{registration.division}</td>
                                    <td className='bg-danger text-center text-white' onClick={() => DeleteRegistration(registration._id)} style={{ cursor: 'pointer' }}>
                                        Delete
                                    </td>
                                </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default RegTable;