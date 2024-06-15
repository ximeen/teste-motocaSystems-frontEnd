import { useParams } from "react-router-dom";

export function EditMotorcycle(){
  const {id} = useParams() 
  console.log(id);

  return <h1>hellooooo</h1>

}