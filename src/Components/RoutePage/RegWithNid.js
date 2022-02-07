import React, { useState } from 'react';
import { useForm } from "react-hook-form";

const RegWithNid = () => {
    const { register, handleSubmit, reset } = useForm();
    const [matchText, setMatchText] = useState({
        validCaptcha: ''
    })
    const [captchaChecking, setCaptchaChecking] = useState(false)

    // ! GENERATE RANDOM CENTER ID 
    const date = new Date().toDateString('dd/MM/yyy')
    const generate_number = Math.random() * 15
    const generate_number_string = generate_number.toString()
    const centerId = generate_number_string.slice(4, 12)


    // !************* CAPTCHA MATCHING FUNCTION START *****************
    // ! ******* CAPTCHA GENERATE RANDOMLY *******
    const characters = 'abc135';
    const generateString = (length) => {
        let result = '';
        const charactersLength = characters.length;
        for (let i = 0; i < length; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength))
        }
        return result;
    }
    const captcha = generateString(6);

    // ! ***** HANDLING CAPTCHA INPUT CHANGE ******
    const handleCaptchaMatch = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        matchText[name] = value;
        setMatchText(matchText)
    }

    // ! ******* CAPTCHA MATCHING *******
    const matchingCaptcha = () => {
        if (captcha === matchText.validCaptcha) {
            setCaptchaChecking(true);
            document.getElementById('inputValue').value = ''
        }
        else {
            setCaptchaChecking(false)
            alert('Sorry captcha not matching')
        }
    }
    // !************* CAPTCHA MATCHING FUNCTION END *****************

    // ! **** FORM SUBMISSION ****
    const onSubmit = data => {
        // !** age calculation function
        const age = (dateString) => {
            const ageInMilliseconds = new Date() - new Date(dateString);
            return Math.floor(ageInMilliseconds / 1000 / 60 / 60 / 24 / 365); // convert to years
        }
        const registerAge = age(data.year, data.month, data.day)

        const information = {
            nid: data.nid,
            division: data.division,
            name: data.name,
            fatherName: data.fatherName,
            motherName: data.motherName,
            day: data.day,
            month: data.month,
            year: data.year,
            date: date,
            centerId: centerId,
            age: registerAge,
        }

        const url = 'https://dry-sea-85373.herokuapp.com/user-registrations'
        fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(information)
        })
            .then(res => res.json())
            .then(data => {
                if (data) {
                    alert('আপনার কোভিড-১৯ ভ্যাকসিনের নিবন্ধন সফলভাবে সম্পন্ন হয়েছে')
                }
            })
        reset()
    };


    return (
        <div>
            <div className='m-5'>
                <h3 style={{ fontSize: '22PX' }}>জাতীয় পরিচয়পত্রের মাধ্যমে নিবন্ধন</h3>
            </div>

            <div className='row m-5'>
                <div className="col-md-12 col-lg-7 px-0">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="row">
                            <div className="col-md-12 col-lg-7">
                                <label className='mb-2 d-block'>জাতীয় পরিচয়পত্র নম্বর:</label>
                                <div className="form-group">
                                    <input type="number" name="nid" id="" className="form-control" placeholder='উদাহরণ- 123456789' {...register("nid")} required />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-5">
                                <label className='mb-2 d-block'>বিভাগ:</label>
                                <div className="form-group">
                                    <select name="division" id="" className="form-control form-select" {...register("division")} required >
                                        <option selected disabled hidden value="">বিভাগ</option>
                                        <option value="ঢাকা">ঢাকা</option>
                                        <option value="চট্টগ্রাম">চট্টগ্রাম</option>
                                        <option value="সিলেট">সিলেট</option>
                                        <option value="রংপুর">রংপুর</option>
                                        <option value="বরিশাল">বরিশাল</option>
                                        <option value="রাজশাহী">রাজশাহী</option>
                                        <option value="খুলনা">খুলনা</option>
                                        <option value="ময়মনসিংহ">ময়মনসিংহ</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-12">
                                <label className='mb-2 d-block'>নাম জাতীয় এনআইডি অনুযায়ী:</label>
                                <div className="form-group">
                                    <input type="text" name="name" id="" className="form-control text-capitalize" placeholder='উদাহরণ- মামুন হোসেন' {...register("name")} required />
                                </div>
                            </div>
                        </div>

                        <div className="row mt-4">
                            <div className="col-md-12 col-lg-6">
                                <label className='mb-2 d-block'>বাবার নাম এনআইডি অনুযায়ী:</label>
                                <div className="form-group">
                                    <input type="text" name="fatherName" id="" className="form-control text-capitalize" placeholder='উদাহরণ- মনির হোসেন' {...register("fatherName")} required />
                                </div>
                            </div>
                            <div className="col-md-12 col-lg-6">
                                <label className='mb-2 d-block'>মায়ের নাম এনআইডি অনুযায়ী:</label>
                                <div className="form-group">
                                    <input type="text" name="motherName" id="" className="form-control text-capitalize" placeholder='উদাহরণ- সুফিয়া বেগম' {...register("motherName")} required />
                                </div>
                            </div>
                        </div>

                        <label className='mb-2 mt-4 d-block'>জন্ম তারিখ (জাতীয় পরিচয়পত্র অনুযায়ী):</label>
                        <div className="form-group">
                            <div className="row">
                                <div className="col-sm-12 col-lg-3 mb-2">
                                    <select type="number" className='form-control form-select' name="day" id="" {...register("day")} required>
                                        <option selected disabled hidden value="">দিন</option>
                                        <option value="1">১</option>
                                        <option value="2">২</option>
                                        <option value="3">৩</option>
                                        <option value="4">৪</option>
                                        <option value="5">৫</option>
                                        <option value="6">৬</option>
                                        <option value="7">৭</option>
                                        <option value="8">৮</option>
                                        <option value="9">৯</option>
                                        <option value="10">১০</option>
                                        <option value="11">১১</option>
                                        <option value="12">১২</option>
                                        <option value="13">১৩</option>
                                        <option value="14">১৪</option>
                                        <option value="15">১৫</option>
                                        <option value="16">১৬</option>
                                        <option value="17">১৭</option>
                                        <option value="18">১৮</option>
                                        <option value="19">১৯</option>
                                        <option value="20">২০</option>
                                        <option value="21">২১</option>
                                        <option value="22">২২</option>
                                        <option value="23">২৩</option>
                                        <option value="24">২৪</option>
                                        <option value="25">২৫</option>
                                        <option value="26">২৬</option>
                                        <option value="27">২৭</option>
                                        <option value="28">২৮</option>
                                        <option value="29">২৯</option>
                                        <option value="30">৩০</option>
                                        <option value="31">৩১</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 col-lg-5 mb-2">
                                    <select type="text" className='form-control form-select' name="month" id="" {...register("month")} required>
                                        <option selected disabled hidden value="">মাস</option>
                                        <option value="January">জানুয়ারী</option>
                                        <option value="February">ফেব্রুয়ারী</option>
                                        <option value="March">মার্চ</option>
                                        <option value="April">এপ্রিল</option>
                                        <option value="May">মে</option>
                                        <option value="June">জুন</option>
                                        <option value="July">জুলাই</option>
                                        <option value="August">আগস্ট</option>
                                        <option value="September">সেপ্টেম্বর</option>
                                        <option value="October">অক্টোবর</option>
                                        <option value="November">নভেম্বর</option>
                                        <option value="December">ডিসেম্বর</option>
                                    </select>
                                </div>
                                <div className="col-sm-12 col-lg-4 mb-2">
                                    <select type="number" className='form-control form-select' name="year" id="" {...register("year")} required>
                                        <option selected disabled hidden value="">বছর</option>
                                        <option value="2004">২০০৪</option>
                                        <option value="2003">২০০৩</option>
                                        <option value="2002">২০০২</option>
                                        <option value="2001">২০০১</option>
                                        <option value="2000">২০০০</option>
                                        <option value="1999">১৯৯৯</option>
                                        <option value="1998">১৯৯৮</option>
                                        <option value="1997">১৯৯৭</option>
                                        <option value="1996">১৯৯৬</option>
                                        <option value="1995">১৯৯৫</option>
                                        <option value="1994">১৯৯৪</option>
                                        <option value="1993">১৯৯৩</option>
                                        <option value="1992">১৯৯২</option>
                                        <option value="1991">১৯৯১</option>
                                        <option value="1990">১৯৯০</option>
                                        <option value="1989">১৯৮৯</option>
                                        <option value="1988">১৯৮৮</option>
                                        <option value="1987">১৯৮৭</option>
                                        <option value="1986">১৯৮৬</option>
                                        <option value="1985">১৯৮৫</option>
                                        <option value="1984">১৯৮৪</option>
                                        <option value="1983">১৯৮৩</option>
                                        <option value="1982">১৯৮২</option>
                                        <option value="1981">১৯৮১</option>
                                        <option value="1980">১৯৮০</option>
                                    </select>
                                </div>
                            </div>

                            <div className='mt-4'>
                                <div className="card">
                                    <div className='card-header text-center'>
                                        <p className='m-0' style={{ fontSize: '28px', fontWeight: '600' }}>{captcha}</p>
                                    </div>
                                    <div className="card-body">
                                        <label htmlFor="">উপরের লিখাটি সঠিকভাবে নিচে লিখুন</label>
                                        <div className="form-group">
                                            <input type="text" name="validCaptcha" id="inputValue" onChange={handleCaptchaMatch} className="form-control" />
                                        </div>
                                        <div className='mt-3 text-center'>
                                            <button type="button" className='btn btn-outline-dark' onClick={matchingCaptcha}>Match</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* submit button */}

                            <input type="submit" id='submit' disabled={!captchaChecking} className='btn btn-secondary form-control mt-4' value="নিবন্ধন করুন" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default RegWithNid;