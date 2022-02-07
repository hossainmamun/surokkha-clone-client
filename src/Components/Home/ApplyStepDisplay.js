import React from 'react';

const ApplyStepDisplay = (props) => {
    const { img, title, detail } = props.apply;
    return (
        <div className='col-md-4'>
            <div className="card text-center border-0">
                <img src={img} className='img-fluid' alt="" style={{width: '91px', height: '154px', margin: 'auto'}} />
                <div className="card-body mt-3">
                    <h3 style={{fontSize: '16px'}}>
                        <strong>{title}</strong>
                    </h3>
                    <p>{detail}</p>
                </div>
            </div>
        </div>
    );
};

export default ApplyStepDisplay;