import React from 'react';
import phone from '../../Assets/phone.png';
import './MobileSection.scss';
function MobileSection() {
    return (
      <div>
            <span>
                <img id='phone-image' src={phone} alt="" />
            </span>
      </div>
    );
}

export default MobileSection;
