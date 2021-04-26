import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";

const User = (props) => {
  const [submitteddata, setSubmittedata] = useState([]);
  const [data, setData] = useState({
    userName: "",
    age: "",
    gender: "",
    city: [],
  });

  const cities = ["mohali", "chandigarh", "panchkula"];
  const [isopen, setIsopen] = useState(false);
  let [arr, setArr] = useState([]);
  //const [idx,setIdx] = useState(null)

  useEffect(() => {
    getAllData();
  }, [submitteddata]);

  const getAllData = () => {
    let items = JSON.parse(localStorage.getItem("array"));
    setSubmittedata(items);
  };

  const handleDelete = (index) => {
    setSubmittedata(submitteddata.splice(index, 1));
    localStorage.setItem("array", JSON.stringify(submitteddata));
  };

  const handleUpdate = (value) => {
    let val = JSON.parse(localStorage.getItem("array"));
    val.splice(0, 1, data);
    localStorage.setItem("array", JSON.stringify(val));
    alert("Data updated successfully");
    setIsopen(false);
  };

  const handleEdit = (value, index) => {
    setData({ ...value });
    console.log(value);
    setIsopen(true);
    // setIdx(index)
    arr.splice(0, 1, value);
  };

  const handleCity = (e) => {
    if (data.city.includes(e.target.value)) {
      let indx = data.city.indexOf(e.target.value);
      data.city.splice(indx, 1);
      return;
    } else {
      data.city.push(e.target.value);
      // setData([...data.city, e.target.value])
    }
  };

  const history = useHistory();

  const homePage = () => {
    let pathName = "/";
    history.push(pathName);
  };

  return (
    <div>
      <h1>USER DETAILS</h1>
      <button onClick={homePage}>Back to HomePage</button>
      <table>
        <thead>
          <tr>
            <th>UserName</th>
            <th>Age</th>
            <th>Gender</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {submitteddata.map((value, index) => {
            return (
              <tr key={index}>
                <td>{value.userName}</td>
                <td>{value.age}</td>
                <td>{value.gender}</td>
                <td>{value.city.join(",")}</td>
                <td>
                  <button onClick={() => handleDelete(index)}>Delete</button>
                  <br />
                  <button onClick={() => handleEdit(value, index)}>Edit</button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <Modal isOpen={isopen}>
        {arr.map((value, index) => {
          return (
            <div>
              <label>Update Details</label>
              <br />
              <label>UserName: </label>
              <input
                type="text"
                // value={value.userName}
                // name="UserName"
                defaultValue={value.userName}
                onChange={(e) => setData({ ...data, userName: e.target.value })}
              />
              <br />
              <label>Gender</label>
              <input
                type="radio"
                value="Male"
                name="gender"
                defaultChecked={value.gender === "Male"}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
              Male
              <br />
              <input
                type="radio"
                value="Female"
                name="gender"
                defaultChecked={value.gender === "Female"}
                onChange={(e) => setData({ ...data, gender: e.target.value })}
              />
              Female
              <br />
              <label>Age: </label>
              <select
                name="age"
                defaultValue={value.age}
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
              </select>
              <br />
              {cities.map((city, key) => (
                <div>
                  <span>
                    <label key={key}>{city}:</label>
                    <input
                      type="checkbox"
                      value={city}
                      defaultChecked={value.city.includes(city)}
                      onChange={handleCity}
                    />
                  </span>
                </div>
              ))}
              <button onClick={() => handleUpdate(value)}>Update</button>
            </div>
          );
        })}
      </Modal>
    </div>
  );
};

export default User;
