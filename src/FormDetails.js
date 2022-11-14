import { useLocation } from "react-router-dom";

function FormDetails() {
  let location = useLocation(); //for get data
  // console.log(location);

  return (
    <>
      <div>
        <li>{location.state.username}</li>
        <li>{location.state.email}</li>
        <li>{location.state.phoneno}</li>
        <li>{location.state.password}</li>
      </div>
    </>
  );
}

export default FormDetails;
