import React, { useState } from 'react';
import bd_logo from '../../image/bd-img.png'
import mujib_logo from '../../image/mujib.png'

const VaccineStatus = () => {
    const [userNid, setUserNid] = useState('')
    const [vaccineInfo, setVaccineInfo] = useState({})

    const handleStatusCheck = (nidNo) => {
        fetch(`https://dry-sea-85373.herokuapp.com/vaccine-status/${nidNo}`)
            .then(res => res.json())
            .then(data => {
                setVaccineInfo(data)
            })
            .catch(err => {
                alert('Nid number is not matched')
            })
        console.log(vaccineInfo)
    }

    return (
        <div className="vaccine-status container">
            <div className="container-fluid header">
                <div className='text-center mt-5 py-2'>
                    <h3>কোভিড-১৯ ভ্যাকসিন নিবন্ধনের অবস্থা জানুন</h3>
                </div>
            </div>
            <div className='container my-5'>
                <p>নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর প্রদান করে "নিবন্ধন স্ট্যাটাস" বাটনে ক্লিক করলে নিবন্ধনের স্টেটাস জানা যাবে।</p>
            </div>

            <div className="container" style={{ marginBottom: '80px' }}>
                <div className="row">
                    <div className="col-md-5">
                        <form>
                            <label className='mb-2 d-block'>জাতীয় পরিচয়পত্র নম্বর:</label>
                            <div className="form-group">
                                <input type="number" name="" id="nid-input" onChange={(e) => setUserNid(e.target.value)} className="form-control" placeholder='উদাহরণ- 19825624603112' required />
                            </div>
                            <button type="button" id='submit' onClick={() => handleStatusCheck(userNid)} className='btn btn-secondary form-control mt-4'>নিবন্ধন স্ট্যাটাস</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* *************** status card ********************* */}
            <div>
                {
                    vaccineInfo.nid &&

                    <div className='text-center text-capitalize' style={{ marginTop: '100px', marginBottom: '100px' }}>
                        <div className="row justify-content-center">
                            <div className="col-lg-8 border p-3">
                                <div className='d-flex justify-content-between align-items-center mb-4'>
                                    <img src={bd_logo} className='img-fluid' alt="" style={{ width: '80px', height: '80px' }} />
                                    <img src={mujib_logo} className='img-fluid' alt="" style={{ width: '120px', height: 'auto' }} />
                                </div>
                                <div className='mb-3'>
                                    <h5>কোভিড-১৯ ভ্যাকসিনের নিবন্ধন অবস্থা</h5>
                                    <h5>covid-19 vaccine status</h5>
                                </div>
                                <div className='mx-3 px-3 border'>
                                    <div className='d-sm-flex justify-content-between my-3'>
                                        <strong>তারিখ</strong>
                                        <strong>{vaccineInfo.date}</strong>
                                    </div>
                                    <div className='d-sm-flex justify-content-between my-3'>
                                        <strong>নাম</strong>
                                        <strong>{vaccineInfo.name}</strong>
                                    </div>
                                    <div className='d-sm-flex justify-content-between my-3'>
                                        <strong>জাতীয় পরিচয়পত্র</strong>
                                        <strong>{vaccineInfo.nid}</strong>
                                    </div>
                                    <div className='d-sm-flex justify-content-between my-3'>
                                        <strong>জন্ম তারিখ</strong>
                                        <strong>{`${vaccineInfo.day}-${vaccineInfo.month}-${vaccineInfo.year}`}</strong>
                                    </div>
                                    <div className='d-sm-flex justify-content-between my-3'>
                                        <strong>রেজিস্ট্রেশনের নং</strong>
                                        <strong>{vaccineInfo._id}</strong>
                                    </div>
                                    <div className='d-sm-flex justify-content-between my-3'>
                                        <strong>কেন্দ্র আইডি</strong>
                                        <strong>{vaccineInfo.centerId}</strong>
                                    </div>
                                </div>
                                <strong className='d-block mt-5'>আপনি শীঘ্রই এসএমএস পাবেন রেজিস্ট্রেশনের জন্য ধন্যবাদ</strong>
                            </div>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default VaccineStatus;