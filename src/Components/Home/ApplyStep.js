import React from 'react';
import notification from '../../image/notification.png'
import sms from '../../image/sms.png'
import road from '../../image/road.png'
import ApplyStepDisplay from './ApplyStepDisplay.js';

const ApplyStep = () => {
    const apply_step = [
        {
            img: notification,
            title: 'অনলাইনে নিবন্ধন',
            detail: 'প্রথমে এই পোর্টালের মাধ্যমে জাতীয় পরিচয়পত্র ও সঠিক মোবাইল নম্বর যাচাইপূর্বক অনলাইনে নিবন্ধন সম্পন্ন করবেন।',
        },
        {
            img: sms,
            title: 'SMS নোটিফিকেশন',
            detail: 'অনলাইনে নিবন্ধন পরবর্তী তথ্য যাচাইপূর্বক পর্যায়ক্রমে টিকা প্রদানের তারিখ ও কেন্দ্রের নাম উল্লেখপূর্বক মুঠোফোনে খুদেবার্তা পাবেন।',
        },
        {
            img: road,
            title: 'টিকা কেন্দ্রে টিকা গ্রহণ',
            detail: 'মুঠোফোনে খুদেবার্তা প্রাপ্তি সাপেক্ষে টিকাকার্ড জাতীয় পরিচয়পত্র ও সম্মতিপত্রসহ নির্দিষ্ট তারিখে টিকাদান কেন্দ্রে স্ব-শরীরে উপস্থিত হয়ে কোভিড-১৯ টিকা গ্রহণ করবেন।',
        },
    ]
    return (
        <div className='container' style={{marginTop: '70px', marginBottom: '80px'}}>
            <div className="row shadow p-5 rounded">
                <div className='mb-4'>
                    <h2 className='apply-sec-h2'>কোভিড-১৯ করোনা ভ্যাকসিন গ্রহণের প্রক্রিয়া</h2>
                </div>
                {
                    apply_step.map(apply => <ApplyStepDisplay apply={apply} /> )
                }
            </div>
        </div>
    );
};

export default ApplyStep;