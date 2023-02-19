import React from 'react';
const Card = (props) => {
  return (
    <div className="card" style={{ padding: '13px',marginLeft:10}}>
      
      <div >
      <img className='img' src={props.image} alt={props.altText} />
        <h5 className="card-title">{props.title}</h5>
      </div>
        <div>
        <p className="card-text">{props.text}</p>
      </div>
    </div>
  );
};

export default Card;
