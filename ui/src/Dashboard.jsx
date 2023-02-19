import React,{useState, useEffect} from 'react';
import PieChart from './PieChart'
import Card from './Card';
import Red from './Red.png';
import Green from './Green.png'
function Dashboard() {
  const [score, setScore] = useState(0);

  const fetchData = async () => {
    const response = await fetch('http://localhost:3006/score/1234');
    const data = await response.json();
    setScore(data.score);
    }

    useEffect(() => {
      fetchData();
    },[]);

  return (
    <div>

      <div style={{width:180, height:"0px", marginTop:20, marginLeft:20,padding :10}}>

        <div style={{display:'flex', marginLeft: '80px', marginTop: '200px'}}>
      <Card
        image={Red}
        altText="Example image"
        title="Fashion"
        text="5% Increase"
      />
      <Card
        image={Green}
        altText="Example image"
        title="Energy Consumption"
        text="15% Decrease"
      />
      <Card
        image={Red}
        altText="Example image"
        title="Transportation"
        text="35% Increase"
      />
      </div>
      </div>


      <div style={{
          "width": "100px",
          "height": "100px",
          "float": "right",
          marginRight: 50,
          marginTop:0,
          textAlign: "center",
          "borderRadius": "50%",
          "backgroundColor": "green"
      }}>
        <p style={{marginTop: 20, fontWeight:"bold",  color: "white", fontSize: '50px'}}>
          {score}
        </p>
        <p style={{marginTop:-20}}> Sustainability Score</p>
        
        </div>
       


      <PieChart/>
    </div>
  );
}

export default Dashboard;
