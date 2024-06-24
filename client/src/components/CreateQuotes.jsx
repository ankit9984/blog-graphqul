import { useState } from 'react';
import {useMutation} from '@apollo/client'
import { CREATE_QUOTE } from '../graphqul/Mutation';
import { GET_ALL_QUUOTES } from '../graphqul/Queries';

function CreateQuotes() {
  const [quote, setQuote] = useState('');
  const [createQuote, {loading,error,data}] = useMutation(CREATE_QUOTE, {
    refetchQueries: [
      'getAllQuotes',
      'getProfileInfo'
    ]
  });

  if(loading) return <h1>Loading</h1>
  if (error) {
    console.log(error.message);
  }

  if(data){
    console.log(data);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote({
      variables:{
        name:quote
      }
    })
  }
  

  return (
    <div className="container mx-auto py-8">
        {error && <div className='text-red-500'>{error.message}</div>}
        {data && <div className='text-green-500'>{data.quote}</div>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={quote}
          onChange={e => setQuote(e.target.value)}
          placeholder="Write your quote"
          className="w-full p-2 border border-gray-300 rounded"
        />
        <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded">Create</button>
      </form>
    </div>
  );
}

export default CreateQuotes;
