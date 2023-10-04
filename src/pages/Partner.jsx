import React, { useState, useEffect } from 'react';
import FileBase64 from 'react-file-base64';
import axios from 'axios';

const Partner = () => {
  const [image, setImage] = useState('');
  const [fetchedImage, setFetchedImage] = useState([])
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/partner/get');
      const data = response.data;
      console.log(data)
      setFetchedImage(data.partners);
      setId(data._id)
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      image
    };

    try {
      const response = await axios.post(`http://localhost:8080/partner/post`, cardData);
      console.log(response.data);
      fetchData();
    } catch (error) {
      console.error(error);
    }
  };

  const handleRemoveImage = async (id) => {
    try {
      const response = await axios.delete(`http://localhost:8080/partner/delete/${id}`);
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
            <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Partner</h2>
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
      {fetchedImage?.map((image) => (
        <div key={image._id} className="bg-white rounded-md shadow-md p-2 relative">
          <img src={image.image} alt="" className="w-full rounded-md" />
          <button
            className="absolute top-2 right-2 bg-red-500 hover:bg-red-600 text-white text-sm font-semibold py-1 px-2 rounded-md"
            onClick={() => handleRemoveImage(image._id)}
          >
            Remove
          </button>
        </div>
      ))}
    </div>
    </>
  );
};

export default Partner;