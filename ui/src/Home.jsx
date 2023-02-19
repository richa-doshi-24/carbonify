import React from 'react';
// import image from "./Home.png"; 

function Home() {
  const myStyle={
            // backgroundImage:`url('${image}')`,
            backgroundColor: '#30D5C8',
            height:'100vh',
            marginTop:'-70px',
            fontSize:'40px',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            WebkitBackdropFilter: 'blur(1000px)',
            filter: 'blur(0.5px)',
           };

  return (
    <div className="home-page" 
        style={myStyle}
    >
      <h1 style={{ 
            color: 'black',
            fontSize:'90px',
            paddingTop: '100px',
            // marginTop:'200px',
            textAlign: 'center',
            }}>Carbon Capture Hub </h1>
      <h5 style={{ 
            color: 'black',
            fontSize:'40px',
            textAlign: 'center', }}>- Where ride to zero emission begins...</h5>
      <p style={{ 
            color: 'black',
            textAlign: 'center',
            }}>Welcome to our app that helps you track and reduce your carbon footprint</p>
    
    </div>
    

  );
}

export default Home;
