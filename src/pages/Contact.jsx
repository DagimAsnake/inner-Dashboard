import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Contact = () => {
  const [addressOne, setAddressOne] = useState('');
  const [addressTwo, setAddressTwo] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [id, setId] = useState('')

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/contact/get');
      const data = response.data;
      console.log(data)
      setAddressOne(data.addressOne)
      setAddressTwo(data.addressTwo)
      setEmail(data.email)
      setPhone(data.phone)
      setId(data._id)
    } catch (error) {
      console.error(error);
    }
  };

  const handleaddressOneChange = (e) => {
    setAddressOne(e.target.value);
  };

  const handleaddressTwoChange = (e) => {
    setAddressTwo(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const cardData = {
      addressOne,
      addressTwo,
      email,
      phone
    };

    try {
      const response = await axios.put(`http://localhost:8080/contact/update/${id}`, cardData);
      console.log(response.data);

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex justify-center items-center md:my-5">
      <div className="bg-white shadow-md rounded-md p-4 md:p-6 lg:p-8 flex flex-col items-center w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
        <form onSubmit={handleSubmit} className="w-full">
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold mb-4 text-center text-blue-500">Contact Us</h2>
          <div className="mb-4">
            <label htmlFor="addressOne" className="block mb-2 font-bold text-lg">
              Address One
            </label>
            <input
              type="text"
              name="addressOne"
              id="addressOne"
              placeholder="Address One"
              value={addressOne}
              onChange={handleaddressOneChange}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="addressTwo" className="block mb-2 font-bold text-lg">
              Address Two
            </label>
            <input
              type="text"
              name="addressTwo"
              id="addressTwo"
              placeholder="Address Two"
              value={addressTwo}
              onChange={handleaddressTwoChange}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2 font-bold text-lg">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={handleEmailChange}
              className="w-full p-2 rounded-md"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block mb-2 font-bold text-lg">
              Phone
            </label>
            <input
              type="text"
              name="phone"
              id="phone"
              placeholder="Phone"
              value={phone}
              onChange={handlePhoneChange}
              className="w-full p-2 rounded-md"
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

export default Contact;