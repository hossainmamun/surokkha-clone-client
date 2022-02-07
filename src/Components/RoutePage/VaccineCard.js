import React, { useState } from 'react';
import bd_logo from '../../image/bd-img.png'
import mujib_logo from '../../image/mujib.png'
import ict_img from '../../image/ict.52410752.png'
import '../../StyleSheet/VaccineCard.scss'
import QrCode from '../QrCode/QrCode.js';

const VaccineCard = () => {
    const [userNid, setUserNid] = useState('')
    const [vaccineInfo, setVaccineInfo] = useState({})
    const handleStatusCheck = (nidNo) => {
        fetch(`https://dry-sea-85373.herokuapp.com/vaccine-status/${nidNo}`)
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setVaccineInfo(data)
            })
            .catch(err => {
                alert('Nid number is not matched')
                window.location.reload();
            })
    }

    const documentPrint = () => {
        const printDocument = document.getElementById('print-content')
        const windowPrint = window.open();
        windowPrint.document.write(printDocument.innerHTML);
        windowPrint.document.close();
        windowPrint.focus();
        windowPrint.print();
        // windowPrint.close();
    }

    return (
        <div className="vaccine-status container">
            <div className='text-center mt-5 py-2'>
                <h3>কোভিড-১৯ ভ্যাকসিন কার্ড সংগ্রহ</h3>
            </div>
            <div className='container my-5'>
                <p>নিচের ফরমে আপনার জাতীয় পরিচয়পত্র নম্বর প্রদান করে "যাচাই করুণ" "টিকা কার্ড সংগ্রহ" বাটনে ক্লিক করলে টিকা কার্ড পাওয়া যাবে।</p>
            </div>

            <div className="container" style={{ marginBottom: '80px' }}>
                <div className="row">
                    <div className="col-md-5">
                        <form>
                            <label className='mb-2 d-block'>জাতীয় পরিচয়পত্র নম্বর:</label>
                            <div className="form-group">
                                <input type="number" name="" id="nid-input" onChange={(e) => setUserNid(e.target.value)} className="form-control" placeholder='উদাহরণ- 19825624603112' required />
                            </div>
                            <button type="button" id='submit' onClick={() => handleStatusCheck(userNid)} className='btn btn-secondary form-control mt-4'>টিকা কার্ড সংগ্রহ</button>
                        </form>
                    </div>
                </div>
            </div>

            {/* *************** vaccine card ********************* */}
            <div>
                {
                    vaccineInfo.nid &&

                    <div className='text-center text-capitalize mx-5' style={{ marginTop: '100px', marginBottom: '100px' }}>
                        <div id='print-content' className="row justify-content-center">
                            <div className="col-md-12 col-lg-6 border p-0">
                                <div className='d-flex justify-content-between align-items-center m-3'>
                                    <img src={bd_logo} className='img-fluid' alt="" style={{ width: '80px', height: '80px' }} />
                                    <img src={mujib_logo} className='img-fluid' alt="" style={{ width: '120px', height: 'auto' }} />
                                </div>
                                <div className='mb-3'>
                                    <h5>কোভিড-১৯ ভ্যাকসিন কার্ড</h5>
                                    <h5>covid-19 vaccine card</h5>
                                </div>
                                <div className='card-table'>
                                    <div className='d-flex justify-content-end mt-5 mb-2'>
                                        <p className='m-0'>তারিখ- </p>
                                        <p className='m-0'>{vaccineInfo.date}</p>
                                    </div>

                                    <div className='row'>
                                        <div className="col-5 border">
                                            <p className='my-2'>রেজিস্ট্রেশনের নং</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo._id}</strong>
                                        </div>
                                    </div>

                                    <div className='row'>
                                        <div className="col-5 border">
                                            <p className='my-2'>জাতীয় পরিচয়পত্র</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.nid}</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>নাম</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.name}</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>বাবার নাম</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.fatherName}</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>মায়ের নাম</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.motherName}</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>জন্ম তারিখ</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{`${vaccineInfo.day}-${vaccineInfo.month}-${vaccineInfo.year}`}</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>বয়স</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.age}</strong>
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>বিভাগ</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.division}</strong>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-5 border">
                                            <p className='my-2'>কেন্দ্র আইডি</p>
                                        </div>
                                        <div className="col-7 border">
                                            <strong className='my-2 d-block'>{vaccineInfo.centerId}</strong>
                                        </div>
                                    </div>
                                </div>
                                <p className='d-block mt-5'>কার্ড ডাউনলোড করুন ধন্যবাদ</p>
                            </div>
                            <div className="col-md-12 col-lg-6 border p-0">
                                <div className='py-4' style={{ backgroundColor: 'red', color: '#fff' }}>
                                    <p className='m-0'>সাধারণ নির্দেশনা</p>
                                </div>
                                <div className='mt-4'>
                                    <p> covid19 1ম এবং 2য় ডোজ এর জন্য অনুগ্রহ করে নির্দিষ্ট ভ্যাকসিন সেন্টারে ভ্যাকসিন কার্ড নিয়ে যান</p>
                                    <p> ভ্যাকসিন নেওয়ার পর কোনো সমস্যা হলে অনুগ্রহ করে আপনার ভ্যাকসিন সেন্টারে যোগাযোগ করুন বা জরুরি স্বাস্থ্যসেবাকে কল করুন</p>
                                    <p> ভ্যাকসিনের আগে আপনি এসএমএসের মাধ্যমে তথ্য এবং তারিখ পাবেন</p>
                                    <p className='text-lowercase'> কার্ড হারিয়ে গেলে www.surokkha.gov.bd থেকে ডাউনলোড করুন</p>
                                    <p> কোভিড 19 ভ্যাকসিনের পরে সঠিক স্বাস্থ্যবিধি নিয়ম অনুসরণ করুন</p>
                                    <p> টিকা দেওয়ার পর ভবিষ্যতের প্রয়োজনের জন্য ভ্যাকসিন কার্ড সংরক্ষণ করুন</p>
                                </div>
                                <div>
                                    <QrCode vaccineInfo={vaccineInfo} />
                                </div>
                                <div className='py-4 mt-4' style={{ backgroundColor: 'red', color: '#fff' }}>
                                    <p className='m-0'>আপনাদের সাহায্যের জন্য বাংলাদেশ সরকার স্বাস্থ্যসেবা ঘরে ঘরে পৌঁছে দিতে দৃঢ়প্রতিজ্ঞ</p>
                                </div>
                                <div className='mt-4'>
                                    <strong className='d-block'>সামগ্রিক সাহায্য</strong>
                                    <img src={ict_img} className='img-fluid' alt="" />
                                </div>
                            </div>
                        </div>
                        <div className='text-center mt-3 mb-5'>
                            <button className='btn btn-secondary' onClick={documentPrint}>Download</button>
                        </div>
                    </div>
                }
            </div>

        </div>
    );
};

export default VaccineCard;