import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

const Home = () => {
  const [title, setTitle] = useState('');
  const [quote, setQuote] = useState('');
  const [image, setImage] = useState('');
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/home/get');
      const data = response.data;
      console.log(data)
      setTitle(data.title);
      setQuote(data.quote);
      setImage(data.image);
      setId(data._id)
    } catch (error) {
      console.error(error);
    }
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleQuoteChange = (e) => {
    setQuote(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      title,
      quote,
      image
    };

    try {
      const response = await axios.put(`http://localhost:8080/home/update/${id}`, cardData);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:my-5">
      <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Home</h2>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-2 font-bold text-lg">
              Title
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Title"
              value={title}
              onChange={handleTitleChange}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="quote" className="block mb-2 font-bold text-lg">
              Quote
            </label>
            <input
              type="text"
              name="quote"
              id="quote"
              placeholder="Quote"
              value={quote}
              onChange={handleQuoteChange}
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

export default Home;