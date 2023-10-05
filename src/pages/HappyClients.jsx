import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';
import { Link } from 'react-router-dom'

const HappyClients = () => {
  const [image, setImage] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [position, setPosition] = useState('');
  const [fetchedClient, setFetchedClient] = useState([])
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/client/get');
      const data = response.data;
      console.log(data)
      setFetchedClient(data.clients);
      setId(data._id)
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

  const handlePositionChange = (e) => {
    setPosition(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      image,
      name,
      message,
      position
    };

    try {
      const response = await axios.post(`http://localhost:8080/client/post`, cardData);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveImage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/client/delete/${id}`);
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
          <form onSubmit={handleSubmit} className="w-full">
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Happy Clients</h2>
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
              Create
            </button>
          </form>
        </div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-2 md:mx-4 lg:mx-8 xl:mx-16">
  {fetchedClient?.map((client) => (
    <div key={client._id} className="bg-white rounded-md shadow-md p-2 text-center relative">
      <p className="text-lg md:text-2xl text-gray-700 mb-4">{client.message}</p>
      <img
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover object-center"
        src={client.image}
        alt={""}
      />
      <h3 className="text-xl font-semibold mb-2">{client.name}</h3>
      <p className="text-gray-600">{client.position}</p>
      <div className="flex justify-center mt-4">
        <button
          className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-2 rounded-md mr-2"
          onClick={() => handleRemoveImage(client._id)}
        >
          Remove
        </button>
        <Link
          className="bg-blue-500 hover:bg-blue-600 text-white text-sm font-semibold py-1 px-2 rounded-md"
          to={`/client/${client._id}`}
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

export default HappyClients;