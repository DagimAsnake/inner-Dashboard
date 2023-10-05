import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { useParams, useNavigate } from "react-router-dom";

const EditTeam = () => {
    const { teamId } = useParams();
    const navigate = useNavigate();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');

    useEffect(() => {
        fetchData();
      }, []);
    
      const fetchData = async () => {
        try {
          const response = await axios.get(`http://localhost:8080/team/get/${teamId}`);
          const data = response.data;
          console.log(data)
          setName(data.name);
          setPosition(data.position);
          setImage(data.image);
        } catch (error) {
          console.error(error);
        }
      };

    const handleNameChange = (e) => {
        setName(e.target.value);
      };
    
      const handlePositionChange = (e) => {
        setPosition(e.target.value);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        const cardData = {
          image,
          name,
          position
        };
    
        try {
          const response = await axios.put(`http://localhost:8080/team/update/${teamId}`, cardData);
          console.log(response.data);
          navigate("/team");
        } catch (error) {
          console.error(error);
        }
      };

  return (
    <>
      <div className="flex justify-center items-center md:my-5">
        <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Add Team</h2>
            <div className="mb-4">
            <label htmlFor="name" className="block mb-2 font-bold text-lg">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Name"
              value={name}
              onChange={handleNameChange}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="position" className="block mb-2 font-bold text-lg">
              Position
            </label>
            <input
              type="text"
              name="position"
              id="position"
              placeholder="Position"
              value={position}
              onChange={handlePositionChange}
              className="w-full p-2 rounded-md"
            />
          </div>
            <div className="mb-4">
              <label htmlFor="image" className="block mb-2 font-bold text-lg">
                Image
              </label>
              <FileBase64
                type="file"
                multiple={false}
                onDone={({ base64 }) => setImage(base64)}
                className="w-full p-2 rounded-md"
              />
            </div>
            <div>
            <img src={image} alt="" className="w-full p-2 rounded-md" />
            </div>
            <button
              type="submit"
              className="bg-orange-500 hover:bg-blue-600 text-white text-xl font-semibold py-2 px-4 rounded-md"
            >
              Update
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default EditTeam;