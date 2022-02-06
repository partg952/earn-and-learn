import React from 'react';
import './Card.scss';
import Commas from '../../Assets/commas.png';
function Card({story,by,preparingFor}) {
    return (
      <div className="review-cards">
        <img id='commas' src={Commas} alt="" />
        <div>
          <p>{story}</p>
          <p style={{margin:0}}>
            {" "}
            <b>{by}</b>{" "}
          </p>
          <p
            style={{
              color: "rgba(17, 17, 17, 0.349)",
              margin: 0,
            }}
          >
            {preparingFor}
          </p>
        </div>
      </div>
    );
}

export default Card;
