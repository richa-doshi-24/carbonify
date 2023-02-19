import React from 'react';
import './LeaderBoard.css';
// import image from "./green.png"; 

function LeaderBoard() {
  const myStyle={
    // backgroundImage:`url('${image}')`,
    height:'100vh',
    marginTop:'-90px',
    fontSize:'40px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    WebkitBackdropFilter: 'blur(1000px)',
    filter: 'blur(0.5px)',};

  const leaderboardData = [
    { rank: 1, name: 'You', score: 500 },
    { rank: 2, name: 'Jane Smith', score: 430 },
    { rank: 3, name: 'Bob Johnson', score: 320 },
    { rank: 4, name: 'Alice Davis', score: 270 },
    { rank: 5, name: 'Charlie Brown', score: 180 },
    { rank: 6, name: 'Sandra Grey', score: 150 },
    { rank: 7, name: 'Sara George', score: 130 },
  ];
  return (
    <div style={myStyle}>
      <table className="leaderboard-table" 
            style={{  }}>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Name</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          {leaderboardData.map((item) => (
            <tr key={item.rank}>
              <td>{item.rank}</td>
              <td>{item.name}</td>
              <td>{item.score}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeaderBoard;
