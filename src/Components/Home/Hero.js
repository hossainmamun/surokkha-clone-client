import React from 'react';
import '../../StyleSheet/Hero.scss'
import registerIcon from '../../image/registration.png'
import reg_pic from '../../image/reg-pic.png'
import status from '../../image/status.png'
import vac_card from '../../image/vaccin-card.png'
import certificate from '../../image/certificate.png'
import question from '../../image/question.png'
import { Link } from 'react-router-dom';

const Hero = () => {
    return (
        <div className='hero'>
            <div className="container">
                <div className="row justify-content-center align-items-center m-0">
                    <Link to="/enroll" className="col-lg-5 col-md-6 enrollment">
                        <div className="card border-0">
                            <div className="card-body p-0">
                                <div className='d-flex justify-content-evenly align-items-center'>
                                    <img src={registerIcon} className='img-fluid' alt="" />
                                    <h4>
                                        <strong>ভ্যাকসিনের জন্য <br /> নিবন্ধন করুন</strong>
                                    </h4>
                                </div>
                            </div>
                            <div className="card-footer bg-transparent text-center border-0 px-0">
                                <h6 className='mb-4'>
                                    <strong>নিবন্ধনের সময় প্রয়োজন হবে</strong>
                                </h6>
                                <img src={reg_pic} className='img-fluid' alt="" />
                            </div>
                        </div>
                    </Link>

                    <div className="col-lg-4 col-md-6 status-card-section">
                        <div className="row">
                            <div className="col-12">
                                <Link to="/vaccine-status" style={{ color: '#000', textDecoration: 'none' }}>
                                    <div className='d-flex justify-content-evenly align-items-center rounded py-3 status-card'>
                                        <img src={status} className='img-fluid d-flex align-items-center' alt="" style={{ width: '50px', height: '50px' }} />
                                        <strong>নিবন্ধন স্ট্যাটাস</strong>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12" style={{ marginTop: '10px' }}>
                                <Link to="/vaccine-card" style={{ color: '#000', textDecoration: 'none' }}>
                                    <div className='d-flex justify-content-evenly align-items-center rounded py-3 status-card'>
                                        <img src={vac_card} className='img-fluid d-flex align-items-center' alt="" style={{ width: '58px', height: '40px' }} />
                                        <strong>টিকা কার্ড সংগ্রহ</strong>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12" style={{ marginTop: '10px' }}>
                                <Link to="/" style={{ color: '#000', textDecoration: 'none' }}>
                                    <div className='d-flex justify-content-evenly align-items-center rounded py-3 status-card'>
                                        <img src={certificate} className='img-fluid d-flex align-items-center' alt="" style={{ width: '47px', height: '53px' }} />
                                        <strong>টিকা সনদ সংগ্রহ</strong>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-12" style={{ marginTop: '10px' }}>
                                <Link to="/faq" style={{ color: '#000', textDecoration: 'none' }}>
                                    <div className='d-flex justify-content-evenly align-items-center rounded py-3 status-card'>
                                        <img src={question} className='img-fluid d-flex align-items-center' alt="" style={{ width: '45px', height: '43px' }} />
                                        <strong>সচরাচর জিজ্ঞাসা</strong>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;