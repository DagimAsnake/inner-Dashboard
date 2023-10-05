import React from 'react';
import { Link } from 'react-router-dom'

const Team = () => {
  return (
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
            to={''}
            className="bg-blue-500 text-white text-xl font-semibold py-2 px-4 rounded-md ml-2"
          >
            Add Team
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Team;