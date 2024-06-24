import { useState } from 'react';

function CreateQuotes() {
  const [quote, setQuote] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(quote);
  }

  return (
    <div className="container mx-auto py-8">
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
