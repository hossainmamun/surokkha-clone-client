import React, { useEffect, useState } from 'react';
import '../../StyleSheet/CoronaUpdate.scss'

const CoronaUpdate = () => {
    // ! useState for data change to click button
    const [toggle, setToggle] = useState(1)
    const toggleTab = (index) => {
        setToggle(index);
    }

    // ! useState for corona api
    const [covidDaily, setCovidDaily] = useState({})
    const [covidWeekly, setCovidWeekly] = useState({})
    const [covidMonthly, setCovidMonthly] = useState({})
    const [covidEver, setCovidEver] = useState({})
    useEffect(() => {
        fetch('https://admin.corona.rultest.com/api/statistics/last-24-hours')
            .then(res => res.json())
            .then(data => {
                setCovidDaily(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://admin.corona.rultest.com/api/statistics/last-week')
            .then(res => res.json())
            .then(data => {
                setCovidWeekly(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://admin.corona.rultest.com/api/statistics/current-month')
            .then(res => res.json())
            .then(data => {
                setCovidMonthly(data)
            })
    }, [])

    useEffect(() => {
        fetch('https://admin.corona.rultest.com/api/statistics/total-data')
            .then(res => res.json())
            .then(data => {
                setCovidEver(data)
            })
    }, [])
    return (
        <div className='container corona-update shadow p-5 rounded' style={{ marginTop: '100px', marginBottom: '100px' }}>
            <div className='text-center mb-5'>
                <h3>কোভিড-১৯ বর্তমান পরিস্থিতি</h3>
            </div>

            <div className='row justify-content-center text-center mb-5'>
                <div className="col-md-2 bg-light shadow text-center px-0 rounded mx-2 mb-3">
                    <button onClick={() => toggleTab(1)} className={toggle === 1 ? 'btn w-100 text-white py-3 active-tab' : 'btn w-100 text-dark py-3'}>গত ২৪ ঘন্টা</button>
                </div>
                <div className="col-md-2 bg-light shadow text-center px-0 rounded mx-2  mb-3">
                    <button onClick={() => toggleTab(2)} className={toggle === 2 ? 'btn w-100 text-white py-3 active-tab' : 'btn w-100 text-dark py-3'}>গত ৭ দিন</button>
                </div>
                <div className="col-md-2 bg-light shadow text-center px-0 rounded mx-2  mb-3">
                    <button onClick={() => toggleTab(3)} className={toggle === 3 ? 'btn w-100 text-white py-3 active-tab' : 'btn w-100 text-dark py-3'}>গত ৩০ দিন</button>
                </div>
                <div className="col-md-2 bg-light shadow text-center px-0 rounded mx-2  mb-3">
                    <button onClick={() => toggleTab(4)} className={toggle === 4 ? 'btn w-100 text-white py-3 active-tab' : 'btn w-100 text-dark py-3'}>সর্বমোট</button>
                </div>
            </div>


            <div className='data-card'>
                <div className="row">
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card bg-blue">
                            <h6>নমুনা পরীক্ষা</h6>
                            <h6 className={toggle === 1 ? ' active-h3' : 'show-h3 '}>{covidDaily.tested_last_24_hours}</h6>
                            <h6 className={toggle === 2 ? ' active-h3' : 'show-h3 '}>{covidWeekly.tested_last_week}</h6>
                            <h6 className={toggle === 3 ? ' active-h3' : 'show-h3 '}>{covidMonthly.tested_current_month}</h6>
                            <h6 className={toggle === 4 ? ' active-h3' : 'show-h3 '}>{covidEver.tested_total}</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card bg-purple">
                            <h6>শনাক্ত</h6>
                            <h6 className={toggle === 1 ? ' active-h3' : 'show-h3 '}>{covidDaily.infected_last_24_hours}</h6>
                            <h6 className={toggle === 2 ? ' active-h3' : 'show-h3 '}>{covidWeekly.infected_last_week}</h6>
                            <h6 className={toggle === 3 ? ' active-h3' : 'show-h3 '}>{covidMonthly.tested_current_month}</h6>
                            <h6 className={toggle === 4 ? ' active-h3' : 'show-h3 '}>{covidEver.infected_total}</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card bg-lime">
                            <h6>সুস্থ</h6>
                            <h6 className={toggle === 1 ? ' active-h3' : 'show-h3 '}>{covidDaily.recovered_last_24_hours}</h6>
                            <h6 className={toggle === 2 ? ' active-h3' : 'show-h3 '}>{covidWeekly.recovered_last_week}</h6>
                            <h6 className={toggle === 3 ? ' active-h3' : 'show-h3 '}>{covidMonthly.recovered_current_month}</h6>
                            <h6 className={toggle === 4 ? ' active-h3' : 'show-h3 '}>{covidEver.recovered_total}</h6>
                        </div>
                    </div>
                    <div className="col-md-6 col-lg-3 mb-3">
                        <div className="card bg-red">
                            <h6>মৃত্যু</h6>
                            <h6 className={toggle === 1 ? ' active-h3' : 'show-h3 '}>{covidDaily.death_last_24_hours}</h6>
                            <h6 className={toggle === 2 ? ' active-h3' : 'show-h3 '}>{covidWeekly.death_last_week}</h6>
                            <h6 className={toggle === 3 ? ' active-h3' : 'show-h3 '}>{covidMonthly.death_current_month}</h6>
                            <h6 className={toggle === 4 ? ' active-h3' : 'show-h3 '}>{covidEver.death_total}</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoronaUpdate;