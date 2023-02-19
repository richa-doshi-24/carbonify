import React,{useState, useEffect} from 'react';
import PieChart from './PieChart'

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
      <div style={{
          "width": "100px",
          "height": "100px",
          "float": "right",
          marginRight: 50,
          marginTop:20,
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
