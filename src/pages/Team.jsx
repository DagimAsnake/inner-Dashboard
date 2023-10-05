import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

const Team = () => {
  const [fetchedTeam, setFetchedTeam] = useState([])
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/team/get');
      const data = response.data;
      console.log(data)
      setFetchedTeam(data.teams);
      setId(data._id)
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveImage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/team/delete/${id}`);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
    <div className="flex justify-center items-center md:my-5">
      <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Team</h2>

        <div className="flex justify-between w-full">
          <Link
            to={'/meatTeam'}
            className="bg-orange-500 text-white text-xl font-semibold py-2 px-4 rounded-md mr-2"
          >
            Add About Team
          </Link>

          <Link
            to={'/addTeam'}
            className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-md ml-2"
          >
            Add Team
          </Link>
        </div>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 md:mx-4 lg:mx-8 xl:mx-16">
        {fetchedTeam?.map((team) => (
          <div key={team._id} className="bg-white rounded-md shadow-md p-2 text-center relative">
            <img
              className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center"
              src={team.image}
              alt={""}
            />
            <h3 className="text-2xl md:text-3xl font-semibold mb-2">{team.name}</h3>
            <p className="text-gray-700 text-base md:text-lg">{team.position}</p>
            <div className="flex justify-center mt-4">
              <button
                className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-2 rounded-md mr-2"
                onClick={() => handleRemoveImage(team._id)}
              >
                Remove
              </button>
              <Link
                className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-2 rounded-md"
                to={`/team/${team._id}`}
              >
                Edit
              </Link>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Team;