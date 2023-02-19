import React, { useState } from 'react';

function MakePayment() {
  const [formData, setFormData] = useState({  });
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    console.log("Posting...");
    fetch('http://localhost:3006/items', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  };

  const handleChange = (event) => {

    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    });
    

  };

  return (
    <form onSubmit={handleSubmit} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center',
        backgroundColor: '#f2f2f2', 
        padding: '2rem', 
        borderRadius: '0.5rem' 
      }}>
        <label style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#333', fontWeight: 'bold' }}>Date:</span>
          <input type="text" name="Date" value={formData.date}
           onChange={handleChange} style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
        <span style={{ color: '#333', fontWeight: 'bold' }}>Category:</span>
        <select name="Category" value={formData.category} onChange={handleChange} style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }}>
            <option value="">Select a category</option>
            <option value="Clothing">Clothing</option>
            <option value="Travel">Travel</option>
            <option value="Energy">Energy</option>
        </select>
        </label>

        <label style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#333', fontWeight: 'bold' }}>Amount:</span> 
          <input type="text" name="Amount" value={formData.amount} onChange={handleChange} style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#333', fontWeight: 'bold' }}>Description:</span> 
          <input type="text" name="Description" value={formData.cescription} onChange={handleChange} style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#333', fontWeight: 'bold' }}>Company:</span> 
          <input type="text" name="Company" value={formData.company} onChange={handleChange} style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }} />
        </label>
        <label style={{ marginBottom: '1rem' }}>
          <span style={{ color: '#333', fontWeight: 'bold' }}>UserId:</span> 
          <input type="text" name="UserId" value={formData.userId} onChange={handleChange} style={{ marginLeft: '0.5rem', padding: '0.5rem', borderRadius: '0.5rem', border: 'none' }} />
        </label>
        <button type="submit" style={{ 
          backgroundColor: '#008CBA', 
          color: 'white', 
          padding: '0.5rem 1rem', 
          borderRadius: '0.5rem', 
          border: 'none', 
          marginTop: '1rem', 
          cursor: 'pointer' 
        }}>Make Payment</button>
      </form>
      
  );
}

export default MakePayment;
