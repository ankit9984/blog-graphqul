import { useQuery } from "@apollo/client";
import { useEffect } from "react";
import { GET_ALL_QUUOTES } from "../graphqul/Queries";

function Home() {
  const {loading, error, data} = useQuery(GET_ALL_QUUOTES);
  
  if(loading) return <h1>Loading...</h1>
  if(error){
    <h2>error.message</h2>
  }

  if(data){
    console.log(data);
  }
  return (
    <div className="container mx-auto py-8">
      {
        data.quotes.map(quote => {
          return (
            <blockquote className="border-l-4 border-blue-500 pl-4">
              <h6 className="font-semibold">{quote.name}</h6>
              <p className="text-gray-600">{quote.by.firstName}</p>
          </blockquote>
          )
        })
      }
      
    </div>
  );
}

export default Home;
