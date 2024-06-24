import { useQuery } from "@apollo/client";
import { GET_PROFILE_INFO } from "../graphqul/Queries";
import { useNavigate } from "react-router-dom";

function Profile() {
  const navigate = useNavigate();
  const {loading,error,data} = useQuery(GET_PROFILE_INFO);
  if(loading) return <h1>Loading..</h1>
  if (!localStorage.getItem('token')) {
    navigate('/login')
    return <h1>Unauthorized</h1>
  }
  if (error) {
    console.log(error);
  }
  console.log(data);
  return (
    <div className="container mx-auto py-8">
      <div className="text-center mb-8">
        <img src={`https://robohash.org/${data.user.firstName}.png`} alt="" className="mx-auto rounded-full w-24 h-24 mb-4" />
        <h5 className="text-xl font-semibold">{data.user.firstName} {data.user.lastName}</h5>
        <h5 className="text-gray-600">{data.user.email}</h5>
      </div>
      <h3 className="text-2xl font-bold mb-4">{data.user.quotes.map(quote => {
        return (
          <blockquote>
            <h6>{quote.name}</h6>
          </blockquote>
        )
      })}</h3>
      {/* <blockquote className="border-l-4 border-blue-500 pl-4 mb-4">
        <h6 className="font-semibold">hey i am ankit</h6>
      </blockquote>
      <blockquote className="border-l-4 border-blue-500 pl-4">
        <h6 className="font-semibold">hey i am ankit</h6>
      </blockquote> */}
    </div>
  );
}

export default Profile;
