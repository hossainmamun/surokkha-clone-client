import React from 'react';
import '../../StyleSheet/Faq.scss'
import faq_data from '../Data/faq.js'
import FaqDisplay from './FaqDisplay.js';

const Faq = () => {
    const covid_faq = faq_data;

    return (
        <div className='container'>
            <div className="container-fluid header">
                <div className='text-center mt-5 py-2'>
                    <h3>টিকা বিষয়ক সচরাচর জিজ্ঞাসা</h3>
                </div>
            </div>
            <div className='container my-5'>
                <p>কোভিড- ১৯ করোনা ভাইরাসের টিকার জন্য পোর্টালে নিবন্ধন, পরবর্তী করনীয়, এসএমএস বার্তা প্রাপ্তি, টিকা কার্ড প্রাপ্তি , টিকা কেন্দ্র , টিকা গ্রহণের সময়, টিকার ডোজ, চূড়ান্ত সনদ প্রাপ্তি ইত্যাদি বিষয়ক বিভিন্ন প্রশ্ন ও উত্তর নিচের অংশে পাওয়া যাবে।</p>
            </div>

            <div>
                {
                    covid_faq.map(currentEle => <FaqDisplay currentEle={currentEle} key={currentEle.id} />)
                }
            </div>
        </div>
    );
};

export default Faq;