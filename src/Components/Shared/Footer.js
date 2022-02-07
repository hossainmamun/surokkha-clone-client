import React from 'react';
import logo from '../../image/footer-logo.png'
import ict from '../../image/ict.52410752.png'
import org from '../../image/org.ed08c793.png'
import '../../StyleSheet/Footer.scss'

const Footer = () => {
    return (
        <div className='footer py-5'>
            <div className='container'>
                <div className="row">
                    <div className="col-md-3 col-lg-2">
                        <img src={logo} alt="" />
                    </div>
                    <div className="col-md-3 col-lg-2">
                        <ul className='ps-0'>
                            <li><a href="">জিজ্ঞাসা</a></li>
                            <li><a href="">সহায়িকা</a></li>
                            <li><a href="">প্রাইভেসি পলিসি</a></li>
                            <li><a href="">টার্মস অফ সার্ভিসেস</a></li>
                            <li><a href="">অন্যান্য সহযোগী প্রতিষ্ঠানসমূহ</a></li>
                        </ul>
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <p>কারিগরি সহায়তায় - তথ্য ও যোগাযোগ প্রযুক্তি অধিদপ্তর</p>
                        <img src={ict} alt="" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                        <p>সহযোগী সংস্থাসমূহ</p>
                        <img src={org} alt="" />
                    </div>
                </div>
                <div className='text-center text-capitalize mt-4'>
                    <p>copy&copy;right {(new Date()).getFullYear()} সুরক্ষা-ক্লোন all right reserved || design & develop by <strong>HMamun</strong></p>
                </div>
            </div>
        </div>
    );
};

export default Footer;