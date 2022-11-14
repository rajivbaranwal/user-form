import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
// import formDetails from "/src/Form.details";

function App() {
  const [data, setData] = useState({
    username: "",
    email: "",
    phoneno: "",
    password: "",
  });

  const [records, setRecords] = useState([]);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    // console.log(name, value);

    setData({ ...data, [name]: value });
  };

  //   const getFormData = () => {
  //     if (formData) JSON.parse(localStorage.getItem("formdata"));
  //     else {
  //       return { username: "", email: "", phoneno: "", password: "" };
  //     }
  //   };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newRecord = { ...data, id: new Date().getTime().toString() };
    // console.log(records);
    setRecords([...records, newRecord]);
    //redirect page to another page
    navigate("/FormDetails", { state: data });

    localStorage.setItem("formdata", JSON.stringify(data));
    sessionStorage.setItem("formdata", JSON.stringify(data));

    // console.log(records);
    // setData({ username: "", email: "", phoneno: "", password: "" });
  };
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    // When the handler is invoked
    // inverse the boolean state of passwordShown
    setPasswordShown(!passwordShown);
  };

  useEffect(() => {
    // storing input name
    let formData = localStorage.getItem("formdata");
    // console.log(formData, "hkhjbjbjhbjhb");
    if (formData) {
      setData(JSON.parse(formData));
    }
  }, []);

  console.log(data);
  return (
    <>
      <form onSubmit={handleSubmit}>
        Name
        <input
          name="username"
          type="text"
          value={data.username}
          onChange={handleChange}
          //   autoComplete="on"
        />
        <br />
        Email
        <input
          name="email"
          type="email"
          value={data.email}
          onChange={handleChange}
        />
        <br />
        Phone no
        <input
          name="phoneno"
          type="number"
          value={data.phoneno}
          onChange={handleChange}
        />
        <br />
        Password
        <input
          name="password"
          type={passwordShown ? "text" : "password"}
          value={data.password}
          onChange={handleChange}
        />
        <input
          type="button"
          value={passwordShown === true ? "HIDE" : "SHOW"}
          onClick={togglePassword}
        />
        <br />
        <input type="submit" value="submit" />
      </form>
      <div>
        {records.map((printele) => {
          return (
            <div>
              <li>{printele.username}</li>
              <li>{printele.email}</li>
              <li>{printele.phoneno}</li>
              <li>{printele.password}</li>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
