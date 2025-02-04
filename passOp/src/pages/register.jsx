import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { register, reset } from '../redux/auth/authSlice';
import { FaUser } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: '',
  });

  const { name, email, password, password2 } = formData;
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // using state from store
  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      console.log(message);
    }

    if (isSuccess || user) {
      navigate('/');
    }

    dispatch(reset());
  }, [user, message, navigate, dispatch]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password !== password2) {
      // toast.error('Passwords do not match') // Uncomment after adding toast notifications
      console.log('Passwords do not match');
    } else {
      const userData = {
        name,
        email,
        password,
      };

      dispatch(register(userData));
    }
  };

  // if (isLoading) {
  //   return <Spinner />; // Uncomment when you add a Spinner component
  // }

  return (
    <>
      <section className="mx-auto max-w-lg mt-12">
        <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">
          <FaUser className="inline-block mr-2 text-blue-500" />
          Register
        </h1>
      </section>

      <section className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-md">
        <form onSubmit={onSubmit}>
          <div className="space-y-4">
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="text"
              placeholder="Enter your name"
              name="name"
              value={name}
              onChange={onChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="email"
              placeholder="Enter your email"
              name="email"
              value={email}
              onChange={onChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Enter the password"
              name="password"
              value={password}
              onChange={onChange}
            />
            <input
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              type="password"
              placeholder="Confirm the password"
              name="password2"
              value={password2}
              onChange={onChange}
            />

            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200"
            >
              Submit
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Register;
