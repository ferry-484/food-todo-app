import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

function Food(props) {
  //const [user, setUser] = useState([{ userName: "", age: "", gender: "" }]);
  const [dropDown, setdropDown] = useState("Select");
  const [isChecked, setisChecked] = useState([]);

  const [radio, setRadio] = useState("Select");

  //const [random, setRandom] = useState([]);
  const history = useHistory();

  //   useEffect(() => {
  //     const randomId = {
  //       id: Math.floor(Math.random() * 10),
  //     };
  //     setRandom(randomId);
  //   }, []);

  const changeCity = (e) => {
    if (isChecked.includes(e.target.value)) {
      let index = isChecked.indexOf(e.target.value);
      isChecked.splice(index, 1);
      return;
    } else {
      setisChecked([...isChecked, e.target.value]);
      // setChecked(true)
    }
  };

  const handleAdd = (event) => {
    let path = "./next";
    history.push(path);

    let items = [];
    let itemsData = JSON.parse(localStorage.getItem("data"));

    if (itemsData === null) {
      let obj = {};
      obj["food"] = radio;
      obj["ratings"] = dropDown;
      obj["city"] = isChecked;
      items.push(obj);
      localStorage.setItem("data", JSON.stringify(items));
    } else {
      let obj = {};
      obj["food"] = radio;
      obj["ratings"] = dropDown;
      obj["city"] = isChecked;
      itemsData.push(obj);
      localStorage.setItem("data", JSON.stringify(itemsData));
    }
    alert("Added Successfully..");
  };

  return (
    <div>
      <form>
        <h1>Choice of Food..</h1>
        <br />
        <label>Food: </label>
        <input
          type="radio"
          checked={radio === "Select"}
          value="Select"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />{" "}
        Select: <br />
        <input
          type="radio"
          checked={radio === "Italian"}
          value="Italian"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />{" "}
        Italian
        <input
          type="radio"
          checked={radio === "Chinese"}
          value="Chinese"
          onChange={(e) => {
            setRadio(e.target.value);
          }}
        />{" "}
        Chinese
        <br /> <br />
        <label>
          City:
          {/* {isChecked} */}
        </label>
        <input
          type="checkbox"
          name="city"
          value="Chandigarh"
          onChange={changeCity}
        />
        CHD
        <input
          name="city"
          type="checkbox"
          value="Panchkula"
          onChange={changeCity}
        />
        PNCH
        <input
          type="checkbox"
          name="city"
          value="Mohali"
          onChange={changeCity}
        />
        Mohali
        <br />
        <br />
        <label>Rating</label>
        <select
          value={dropDown}
          onChange={(e) => {
            setdropDown(e.target.value);
          }}
        >
          <option value="Select">Select-Rating</option>
          <option value="5 Star">5 Star</option>
          <option value="4 Star">4 Star</option>
          <option value="3 Star">3 Star</option>
          <option value="2 Star">2 Star</option>
          <option value="1 Star">1 Star</option>
        </select>
        <br />
        <br />
        <button type="submit" onClick={handleAdd}>
          Submit
        </button>
      </form>
      {/* </Modal> */}
    </div>
  );
}

export default Food;
