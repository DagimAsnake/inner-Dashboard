import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MeetTeam = () => {
  const [meet, setMeet] = useState('');
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/meetTeam/get');
      const data = response.data;
      console.log(data)
      setMeet(data.meet);
      setId(data._id)
    } catch (error) {
      console.error(error);
    }
  };

  const handleMeetChange = (e) => {
    setMeet(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      meet
    };

    try {
      const response = await axios.put(`http://localhost:8080/meetTeam/update/${id}`, cardData);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:my-5">
      <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">About the Team</h2>
          <div className="mb-4">
            <label htmlFor="about" className="block mb-2 font-bold text-lg">
              About the Team
            </label>
            <textarea
              type="text"
              name="about"
              id="about"
              placeholder="About the Team"
              value={meet}
              onChange={handleMeetChange}
              className="w-full p-2 rounded-md"
              rows={10} 
            />
          </div>
          <button
            type="submit"
            className="bg-orange-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-md"
          >
            Create
          </button>
        </form>
      </div>
    </div>
  );
};

export default MeetTeam;