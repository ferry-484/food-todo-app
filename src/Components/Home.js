import React, { useState, useEffect } from "react";

const Home = (props) => {
  const [data, setData] = useState({});
  const [city, setCity] = useState([]);
  const [alldata, setAlldata] = useState([]);

  const handleSubmit = (e) => {
    data["city"] = city;
    alldata.splice(0, 1, data);
    localStorage.setItem("array", JSON.stringify(alldata));
    alert("Data saved successfuly");
    props.history.push("/user");
  };

  const handleCity = (e) => {
    if (city.includes(e.target.value)) {
      let idx = city.indexOf(e.target.value);
      city.splice(idx, 1);
      return;
    } else {
      setCity([...city, e.target.value]);
    }
  };

  return (
    <div>
      <h1>Home Page:</h1>
      <label> UserName:</label>
      <input
        type="text"
        // value="name"
        placeholder="Enter Name"
        name="UserName"
        
        onChange={(e) => setData({ ...data, userName: e.target.value })}
      />
      <br />
      <label>Age:</label>
      <select
        name="age"
        defaultValue={"Select Age"}
        onChange={(e) => setData({ ...data, age: e.target.value })}
      >
        <option value="Select">Select Age</option>
        <option value="0-10">0-10</option>
        <option value="10-20">10-20</option>
        <option value="20-30">20-30</option>
        <option value="30-40">30-40</option>
        <option value="40-50">40-50</option>
        <option value="50-60">50-60</option>
        <option value="60-70">60-70</option>
        <option value="70-80">70-80</option>
        <option value="80-90">80-90</option>
        <option value="90-100">90-100</option>
      </select><br />
      <label>Gender: </label>
      <input
        type="radio"
        value="Male"
        name="Male"
        onChange={(e) => setData({ ...data, gender: e.target.value })}
      />
      Male
      <input
        type="radio"
        value="Female"
        name="Female"
        onChange={(e) => setData({ ...data, gender: e.target.value })}
      />
      Female
      <br />
      {/* <label>Rating: </label>
      <select
        name="rating"
        defaultValue={"5 star"}
        onChange={(e) => setData({ ...data, rating: e.target.value })}
      >
        <option value="5 star">5 Star</option>
        <option value="4 star">4 Star</option>
        <option value="3 star">3 Star</option>
      </select>
      <br /> */}
      <label>City: </label>
      <label>Chandigarh</label>
      <input
        type="checkbox"
        name="city"
        value="Chandigarh"
        onChange={handleCity}
      /><br />
      <label>Panchkula</label>
      <input
        type="checkbox"
        name="city"
        value="Panchkula"
        onChange={handleCity}
      /><br />
      <label>Mohali</label>
      <input type="checkbox" name="city" value="Mohali" onChange={handleCity} />
      <br />
      <button type="submit" onClick={handleSubmit}>
        Submit
      </button>
    </div>
  );
};

export default Home;
