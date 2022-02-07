import React from 'react';
import { useLocation } from 'react-router-dom';
import '../../StyleSheet/Enroll.scss'
import SideNav from '../SideNav/SideNav.js';
import RegWithBirth from './RegWithBirth.js';
import RegWithNid from './RegWithNid.js';
import RegWithPassport from './RegWithPassport.js';

const Enroll = () => {
    const currentLocation = useLocation();
    return (
        <div className='enroll'>
            <div className="container-fluid header">
                <div className="container">
                    <h3>কোভিড-১৯ ভ্যাকসিন নিবন্ধন ফর্ম</h3>
                </div>
            </div>

            <div className='container'>
                <div className="row">
                    <div className="col-md-3 border">
                        <SideNav />
                    </div>
                    <div className="col-md-9 border sidebar-content">
                        {currentLocation.pathname === '/enroll' &&
                            <div className='menu-instruction m-4'>
                                <h3 className='mb-5'>অনুগ্রহ করে মেনু থেকে আপনার রেজিস্ট্রেশন অপশনটি নির্বাচন করুন</h3>
                                <div className='mb-5'>
                                    <h5 style={{ fontSize: '18PX' }}>জাতীয় পরিচয়পত্র</h5>
                                    <p>ফর্মে আপনার জাতীয় পরিচয়পত্র ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন করুন। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।</p>
                                </div>

                                <div className='mb-5'>
                                    <h5 style={{ fontSize: '18PX' }}>জন্ম নিবন্ধন সার্টিফিকেট</h5>
                                    <p>ফর্মে আপনার জন্ম সনদ ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন করুন। মনে রাখবেন, জন্ম নিবন্ধন সার্টিফিকেট সহ ভ্যাকসিন নিবন্ধন এই মুহূর্তে সবার জন্য কাজ করবে না। বাংলাদেশ সরকারের সিদ্ধান্ত অনুযায়ী, 12-17 বছর বয়সী স্কুলগামী শিশুরা এই মুহূর্তে এই টিকাদান কর্মসূচির আওতায় থাকবে। টিকা দেওয়ার জন্য নিবন্ধিত হতে, আপনাকে অবশ্যই আপনার 17 সংখ্যার জন্ম নিবন্ধন সার্টিফিকেট নম্বর প্রদান করতে স্কুল কর্তৃপক্ষের সাথে পরামর্শ করতে হবে। স্কুল কর্তৃপক্ষ এই সকল জন্ম নিবন্ধন সার্টিফিকেট নম্বর তালিকাভুক্ত করবেন এবং এই সমস্ত নম্বরগুলিকে whitelist করার জন্য উপযুক্ত কর্তৃপক্ষের কাছে পাঠানোর বাবস্থা গ্রহণ করবেন৷ এই প্রক্রিয়া শেষ হওয়ার পরেই শুধুমাত্র আপনি আপনার whitelisted জন্ম নিবন্ধন সার্টিফিকেট নম্বর দিয়ে সুরক্ষা ভ্যাকসিনেশন সিস্টেমে নিবন্ধন করতে পারবেন। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।</p>
                                </div>

                                <div>
                                    <h5 style={{ fontSize: '18PX' }}>পাসপোর্ট (বাংলাদেশি/বিদেশি)</h5>
                                    <p>ফর্মে আপনার পাসপোর্ট ও মোবাইল নম্বর যাচাইপূর্বক নিবন্ধন সম্পন্ন করুন। মনে রাখবেন, পাসপোর্ট দিয়ে ভ্যাকসিন নিবন্ধন এই মুহূর্তে সবার জন্য কাজ করবে না। বাংলাদেশ সরকারের সিদ্ধান্ত অনুযায়ী, বিভিন্ন বৈদেশিক সংস্থায় কর্মরত বিদেশি নাগরিকগন পররাষ্ট্র মন্ত্রণালয়ের মাধ্যমে এবং BMET-তে নিবন্ধিত বিদেশি কর্মীগণ এর ডাটা সুরক্ষা সার্ভারে whitelist হওয়ার পরেই এই সমস্ত পাসপোর্ট নম্বর দিয়ে রেজিস্ট্রেশান করা যাবে। এই প্রক্রিয়া সম্পাদনের জন্য কিছু সময় ধৈর্যধারণ করার অনুরোধ করা হল। পরবর্তীতে মোবাইল ফোনে এসএমএস বার্তার মাধ্যমে ভ্যাকসিন প্রদানের স্থান ও তারিখ পর্যায়ক্রমে নির্দিষ্ট সময়ে জানানো হবে।</p>
                                </div>
                            </div>
                        }

                        {currentLocation.pathname === '/enroll/regNationalId' && <RegWithNid />}
                        {currentLocation.pathname === '/enroll/regBirthCertificate' && <RegWithBirth/>}
                        {currentLocation.pathname === '/enroll/regPassport' && <RegWithPassport/>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Enroll;