import React, { useState } from 'react';
import axios from 'axios'
import "./Body.css"

const Body = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    input1: '',
    input2: '',
    input3: '',
    input4: '',
    description: '',
  });

  // Function to handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
   
  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent the default form submission behavior

    if (!formData.name || !formData.email || !formData.input1 || !formData.input2 || !formData.input3 || !formData.input4) {
      window.alert('Please fill in all required fields.');
      return;
    }
    // Send a POST request to your API with the form data
    axios.post(import.meta.env.VITE_AURL, formData).then((response) => {
        // Handle the successful response here, e.g., show a success message
        console.log('Data submitted successfully:', response.data);
        // Optionally, you can reset the form fields after submission
        setFormData({
          name: '',
          email: '',
          input1: '',
          input2: '',
          input3: '',
          input4: '',
          description: '',
        });
        // Optionally, show an alert or message to the user
        window.alert('Data submitted successfully!');
      })
      .catch((error) => {
        // Handle any errors that occurred during the request, e.g., show an error message
        console.error('Error submitting data:', error);
        // Optionally, show an alert or message to the user
        window.alert('Error submitting data. Please try again.');
      });
  };
  return (
    <div className='bodyCont'>
      <form onSubmit={handleSubmit} className="bodyForm">
        <label className="ls F">Name: <span className="red">*</span> </label>
        <input
          type="text"
          name="name"
          id=""
          className="input-field F"
          placeholder='Enter name here'
          value={formData.name}
          onChange={handleInputChange}
          required
        />
        <label className="ls F">Email: <span className="red">*</span> </label>
        <input
          type="email"
          name="email"
          id=""
          className="input-field F"
          placeholder='Enter email here'
          value={formData.email}
          onChange={handleInputChange}
          required
        />
        <label className="ls F">How satisfied are you with our products ? <span className="red">*</span> </label>
        <input
          type="number"
          name="input1"
          id=""
          className="input-field F"
          min="1"
          max="10"
          placeholder='Rate between (1 - 10)'
          value={formData.input1}
          onChange={handleInputChange}
          required
        />
        <label className="ls F">How often would you recommend this to others ? <span className="red">*</span> </label>
        <input
          type="number"
          name="input2"
          id=""
          className="input-field F"
          min="1"
          max="10"
          placeholder='Rate between (1 - 10)'
          value={formData.input2}
          onChange={handleInputChange}
          required
        />
        <label className="ls F">How would you rate staff behavior ? <span className="red">*</span> </label>
        <input
          type="number"
          name="input3"
          id=""
          className="input-field F"
          min="1"
          max="10"
          placeholder='Rate between (1 - 10)'
          value={formData.input3}
          onChange={handleInputChange}
          required
        />
        <label className="ls F">How would you rate after-sales service ? <span className="red">*</span> </label>
        <input
          type="number"
          name="input4"
          id=""
          className="input-field F"
          min="1"
          max="10"
          placeholder='Rate between (1 - 10)'
          value={formData.input4}
          onChange={handleInputChange}
          required
        />
        <label className="ls F">Anything else you want to say (optional)</label>
        <textarea
          className="input-field F"
          name="description"
          id=""
          cols="30"
          rows="10"
          placeholder='Describe your view'
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
        <button type="submit" className='btn'>Submit</button>
      </form>
    </div>
  
  )
}

export default Body
