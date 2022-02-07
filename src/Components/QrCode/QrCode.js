import React from 'react';
import QRCode from 'qrcode.react';

const QrCode = ({ vaccineInfo}) => {
    const birth = `${vaccineInfo.day}-${vaccineInfo.month}-${vaccineInfo.year}`
    const info = {
        nid: vaccineInfo.nid,
        regId: vaccineInfo._id,
        name: vaccineInfo.name,
        age: vaccineInfo.age,
        birth: birth,
    }
    return (
        <div>
            <QRCode
                value={info}
            />
        </div>
    );
};

export default QrCode;