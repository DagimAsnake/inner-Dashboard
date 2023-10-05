import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import { useParams, useNavigate } from "react-router-dom";
import axios from 'axios';

const EditService = () => {

    const { serviceId } = useParams();
    const navigate = useNavigate();

    const [image, setImage] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/service/get/${serviceId}`);
      const data = response.data;
      console.log(data)
      setName(data.name);
      setMessage(data.message);
      setImage(data.image);
    } catch (error) {
      console.error(error);
    }
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleMessageChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
        image,
        name,
        message
    };

    try {
      const response = await axios.put(`http://localhost:8080/service/update/${serviceId}`, cardData);
      console.log(response.data);

        navigate("/service");

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:my-5">
        <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Edit Service</h2>
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
            <label htmlFor="message" className="block mb-2 font-bold text-lg">
              Message
            </label>
            <input
              type="text"
              name="message"
              id="message"
              placeholder="Message"
              value={message}
              onChange={handleMessageChange}
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
  );
};

export default EditService;