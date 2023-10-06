import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

const About = () => {
  const [about, setAbout] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/about/get');
      const data = response.data;
      console.log(data)
      setAbout(data.about);
      setImage(data.image);
      setId(data._id)
    } catch (error) {
      console.error(error);
    }
  };

  const handleAboutChange = (e) => {
    setAbout(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      about,
      image
    };

    try {
      const response = await axios.put(`http://localhost:8080/about/update/${id}`, cardData);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:my-5">
      <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">About Us</h2>
          <div className="mb-4">
            <label htmlFor="about" className="block mb-2 font-bold text-lg">
              About
            </label>
            <textarea
              name="about"
              id="about"
              placeholder="About"
              value={about}
              onChange={handleAboutChange}
              className="w-full p-2 rounded-md"
              rows={4} 
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
            <img src={image} alt=""  className="w-full p-2 rounded-md" />
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

export default About;