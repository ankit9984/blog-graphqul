import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SIGNUP_USER } from '../graphqul/Mutation';

function Signup() {
  const [formData, setFormData] = useState({});
  const [signupUser,{data,loading,error}] = useMutation(SIGNUP_USER);

  if(loading) return <h1>Loading...</h1>

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signupUser({
      variables:{
        userNew: formData
      }
    })
  }

  return (
    <div className="container mx-auto py-8">
      {error && <div className='text-red-500'>{error.message}</div>}
      {data && data.user && <div>{data.user.firstName} you can login now</div>}
      <h1 className="text-2xl font-bold mb-4">Signup</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name.."
          onChange={handleChange}
          name="firstName"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="text"
          placeholder="Last Name.."
          onChange={handleChange}
          name="lastName"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="email"
          placeholder="Email.."
          onChange={handleChange}
          name="email"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <input
          type="password"
          placeholder="Password.."
          onChange={handleChange}
          name="password"
          required
          className="w-full p-2 border border-gray-300 rounded"
        />
        <p><Link to='/login'>Already have an account ?</Link></p>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Submit</button>
      </form>
    </div>
  );
}

export default Signup;
