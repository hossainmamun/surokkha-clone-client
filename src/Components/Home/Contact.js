import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeadphonesAlt } from '@fortawesome/free-solid-svg-icons'
import '../../StyleSheet/Contact.scss'


const Contact = () => {
    const contact = [
        {
            icon: <FontAwesomeIcon icon={faHeadphonesAlt} />,
            title: 'হটলাইন',
        },
        {
            title: 'জাতীয় কল সেন্টার',
            contact: '৩৩৩',
        },
        {
            title: 'স্বাস্থ্য বাতায়ন',
            contact: '১৬২৬৩',
        },
        {
            title: 'আইইডিসিআর',
            contact: '১০৬৫৫',
        },
        {
            title: 'কোভিড-১৯ টেলিহেলথ',
            contact: '০৯৬৬৬৭৭৭২২২',
        },
        {
            icon: <FontAwesomeIcon icon={faHeadphonesAlt} />,
            title: 'সকল কল সেন্টার',
        },
    ]
    return (
        <div className='container'>
            <div className="row bg-white rounded shadow p-4 contact-section">
                {
                    contact.map(contacts =>
                        <div className="col-lg-2 col-md-4 text-center">
                            <i className='d-block'>{contacts.icon}</i>
                            <span className='d-block'>{contacts.contact}</span>
                            <p className='mb-0 mt-3' style={{ fontSize: '14px', fontWeight: 'bold' }}>{contacts.title}</p>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Contact;