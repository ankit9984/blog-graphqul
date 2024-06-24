import { useMutation } from '@apollo/client';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { LOGIN_USER } from '../graphqul/Mutation';

function Login() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({});
  const [signinUser, {data,loading,error}] = useMutation(LOGIN_USER, {
    onCompleted(data){
      localStorage.setItem('token', data.user.token);
      navigate('/')
    }
  });

  if(loading) return <h1>Loading</h1>
  // if (data) {
  //   console.log(data);
    
  // }
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    signinUser({
      variables: {
        userSignin:formData
      }
    })
  }

  return (
    <div className="container mx-auto py-8">
      {error && <div className='text-red-500'>{error.message}</div>}
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
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
        <p><Link to='/signup'>Don't have an account ?</Link></p>
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Login</button>
      </form>
    </div>
  );
}

export default Login;
