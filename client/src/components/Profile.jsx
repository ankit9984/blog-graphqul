function Profile() {
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <img src="https://robohash.org/ai.png" alt="" className="mx-auto rounded-full w-24 h-24 mb-4" />
        <h5 className="text-xl font-semibold">Ankit Yadav</h5>
        <h5 className="text-gray-600">Email: ankit@gmail.com</h5>
      </div>
      <h3 className="text-2xl font-bold mb-4">Your Quotes</h3>
      <blockquote className="border-l-4 border-blue-500 pl-4 mb-4">
        <h6 className="font-semibold">hey i am ankit</h6>
      </blockquote>
      <blockquote className="border-l-4 border-blue-500 pl-4">
        <h6 className="font-semibold">hey i am ankit</h6>
      </blockquote>
    </div>
  );
}

export default Profile;
