// import React, { useState, useEffect } from "react";
// import Modal from "react-modal";
// import { Link } from "react-router-dom";

// Modal.setAppElement("#root");

// //MODAL CUSTOM STYLE
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: 500,
//   },
// };

// function Next() {
//    const [submitLocalStorage, setSubmitLocalStorage] = useState([]);
//   // let [newFormData, setnewFormData] = useState({});
//   // const [array, setArray] = useState([]);
//   // let [indexID, setindexID] = useState(null);
//   // const [food, setFood] = useState();
//   // const [dropDown, setdropDown] = useState("");
//   // const [isChecked, setisChecked] = useState([]);

//   const [cities, changeCities] = useState([]);
//   const [rating, changeRating] = useState("");
//   const [food, changeFood] = useState("");
//   let array;

//   const citiesList = [
//     {name: "Chandigarh", value: "Chandigarh"},
//     {name: "Panchkula", value: "Panchkula"},
//     {name: "Mohali", value: "Mohali"},
//   ]

//   const changeCitiesArray = (val) => {
//     const stateCities = [...cities];
//     const index = stateCities.indexOf(val);

//     if(index === -1) {
//       stateCities.push(val)
//     } else {
//       stateCities.splice(index, 1)
//     }

//     changeCities(stateCities)
//  }

//   //modal
//   const [isopen, setIsopen] = useState(false);

//   useEffect(() => {
//     getLocalStorageData();
//   }, []);

//   const getLocalStorageData = () => {
//     let localDB = JSON.parse(localStorage.getItem("data"));
//     changeCities(localDB.cities);
//     changeRating(localDB.rating);
//     changeFood(localDB.food);
//     //setSubmitLocalStorage(localDB);
//   };

//   //DELETE USER
//   const deleteUser = (id) => {
//     setSubmitLocalStorage(submitLocalStorage.splice(id, 1));
//     localStorage.setItem("data", JSON.stringify(submitLocalStorage));
//   };

//   //UPDATE USER
//   const handleUpdate = (id, e) => {
//     // let data = JSON.parse(localStorage.getItem("data"));

//     // data.splice(indexID, 1, newFormData);
//     e.preventDefault();
//     const res = {
//       cities: cities,
//       rating: rating,
//       food: food
//     }
//     localStorage.setItem("localDB", JSON.stringify(res));
//     setIsopen(false);
//     alert("Data successfully Updated");
//   };

//   //EDIT USER
//   const handleEdit = (value, index) => {
//     // setnewFormData({ ...value });

//     setIsopen(true);
//     // setindexID(index);
//     array.splice(0, 1, value);
//   };

//   return (
//     <>
//       <div>
//         <Link to="/">Back to HomePage</Link>
//         <h2>Choice of Food: </h2>

//         <table className="table">
//           <thead>
//             <tr>
//               <th>Food</th>
//               <th>City</th>
//               <th>Rating</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {submitLocalStorage.length > 0 ? (
//               submitLocalStorage.map((value, index) => {
//                 return (
//                   <tr key={index}>
//                     <td>{value.food}</td>
//                     <td>{value.city}</td>
//                     <td>{value.dropDown}</td>
//                     <td>{value.rating}</td>

//                     <td>
//                       <button
//                         className="btn btn-danger"
//                         onClick={() => deleteUser(index)}
//                       >
//                         Delete
//                       </button>
//                     </td>
//                     <td>
//                       <button
//                         className="btn btn-warning"
//                         onClick={() => handleEdit(value, index)}
//                       >
//                         Edit
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })
//             ) : (
//               <h2 className="p-5">Empty List</h2>
//             )}
//           </tbody>
//         </table>

//         {/* MODAL START */}
//         <Modal isOpen={isopen} style={customStyles}>
//           <h2 style={{ textAlign: "center" }}>Update Details</h2>
//           {/* {array.map((value, index) => { */}
//             return (
//               <div className="form-group">
//                 <form onSubmit={handleUpdate}>
//                   <label>Food: </label>
//                   <input
//                     type="radio"
//                     name="food"
//                     checked={food === "Italian"}
//                     className="form-control"
//                     value="Italian"
//                     //defaultValue={value.food}
//                     onChange={(e) =>
//                       changeFood("Italian")
//                     }
//                   />{" "}
//                   Italian
//                   <br />
//                   <input
//                     type="radio"
//                     name="food"
//                     value="Chinese"
//                     className="form-control"
//                     checked={food === "Chinese"}
//                     //defaultValue={value.food}
//                     onChange={(e) =>
//                       changeFood("Chinese")
//                     }
//                   />{" "}
//                   Chinese
//                   <br />
//                   <label>
//           City: {cities.join(", ")}
//         </label>
//         {citiesList.map((city, key) => (
//                         <label key={key}>
//                           {city.name}
//                           <input
//                             type="checkbox"
//                             value={city.name}
//                             checked={cities.includes(city.name)}
//                             onChange={(e) => changeCitiesArray(city.name)}
//                           />
//                         </label>
//                       ))}
//                   {/* <input
//                     type="checkbox"
//                     className="form-control"
//                     defaultValue={value.city}
//                     onChange={(e) =>
//                       setnewFormData({
//                         ...newFormData,
//                         isChecked: e.target.value,
//                       })
//                     }
//                   />  PNCH */}
//                   {/* <br />
//                   <input
//                     type="checkbox"
//                     name="city"
//                     className="form-control"
//                     defaultValue={value.city}
//                     onChange={(e) =>
//                       setnewFormData({
//                         ...newFormData,
//                         isChecked: e.target.value,
//                       })
//                     }
//                   />   CHD
//                   <br />
//                   <input
//                     type="checkbox"
//                     name="city"
//                     className="form-control"
//                     defaultValue={value.city}
//                     onChange={(e) =>
//                       setnewFormData({
//                         ...newFormData,
//                         isChecked: e.target.value,
//                       })
//                     }
//                   />  Mohali
//                   <br /> */}
//                   <label>
//                         Rating:
//                         {rating}
//                         <select
//                           value={rating}
//                           onChange={(e) => changeRating(e.target.value)}
//                         >
//                           {[1, 2, 3, 4, 5].map((rating, key) => (
//                             <option key={key}>{rating}</option>
//                           ))}
//                         </select>
//                       </label>
//         {/* <select
//          defaultValue={value.rating}
//           onChange={(e) => {
//             setdropDown(e.target.value);
//           }}
//         >
//                   <option value="Select">Select-Rating</option>
//           <option value="5 Star">5 Star</option>
//           <option value="4 Star">4 Star</option>
//           <option value="3 Star">3 Star</option>
//           <option value="2 Star">2 Star</option>
//           <option value="1 Star">1 Star</option>
//         </select> */}
//         <br />
//                 </form>
//                 <br />
//                 <div>
//                         <input type="submit" value="Submit" />
//                       </div>
//                 <button className="btn btn-info" onClick={() => handleUpdate()}>
//                   Update
//                 </button>
//               </div>
//             );
//           {/* })} */}
//         </Modal>
//         {/* MODAL END */}
//       </div>
//     </>
//   );
// }
// export default Next;

// import React, { useState, useEffect } from "react";
// import Modal from "react-modal";
// Modal.setAppElement("#root");

// //MODAL CUSTOM STYLE
// const customStyles = {
//   content: {
//     top: "50%",
//     left: "50%",
//     right: "auto",
//     bottom: "auto",
//     marginRight: "-50%",
//     transform: "translate(-50%, -50%)",
//     width: 500,
//   },
// };

// function Next() {
//   const [localData, setLocalData] = useState([]);
//   const [selectedData, setSelectedData] = useState([]);
//   const [idx, setIdx] = useState(null);
//   const [formData, setFormData] = useState({
//     food: "",
//     ratings: "",
//     city: [],
//   });

//   const [isopen, setIsopen] = useState(false);

//   useEffect(() => {
//     getData();
//   }, [localData, selectedData]);

//   const getData = () => {
//     let localDB = JSON.parse(localStorage.getItem("data"));
//     setLocalData(localDB);
//   };

//   const cities = ["Mohali", "Chandigarh", "Panchkula"];
//   const handleCity = (e) => {
//     if (formData.city.includes(e.target.value)) {
//       let idx = formData.city.indexOf(e.target.value);
//       formData.city.splice(idx, 1);
//       return;
//     } else {
//       formData.city.push(e.target.value);
//     }
//   };

//   const handleRating = (e) => {
//     setFormData({ ...formData, ratings: e.target.value });
//   };

//   const handleFood = (e) => {
//     setFormData({ ...formData, food: e.target.value });
//   };

//   const deleteData = (id) => {
//     setLocalData(localData.splice(id, 1));
//     localStorage.setItem("data", JSON.stringify(localData));
//   };

//   // const handleEdit = (value, index) => {
//   //   setFormData({ ...value });
//   //   setIsopen(true);
//   //   let filteredData = localData.filter((data) => data)[index];
//   //   selectedData.push(filteredData);
//   //   console.log(selectedData);
//   // };

//   const handleEdit = (value, index) => {
//     setFormData({ ...value });
//     setIsopen(true);
//     setIdx(index);
//     selectedData.splice(0, 1, value);
//   };

//   const handleUpdate = (idx) => {
//     let data = JSON.parse(localStorage.getItem("data"));
//     data.splice(idx, 1, formData);
//     localStorage.setItem("data", JSON.stringify(data));
//     setIsopen(false);
//     alert("Data successfully Updated");
//   };

//   return (
//     <div>
//       <table className="table">
//         <thead>
//           <tr>
//             <th>Food Choice</th>
//             <th>Ratings</th>
//             <th>City</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {/* map start */}
//           {localData.map((value, index) => {
//             return (
//               <tr>
//                 <td>{value.food}</td>
//                 <td>{value.ratings}</td>
//                 <td>
//                   {value.city.map((c) => {
//                     return <p>{c}</p>;
//                   })}
//                 </td>
//                 <button
//                   className="btn btn-warning"
//                   onClick={() => handleEdit(value, index)}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="btn btn-danger"
//                   onClick={() => deleteData(index)}
//                 >
//                   Delete
//                 </button>
//               </tr>
//             );
//           })}
//           {/* map end */}
//         </tbody>
//       </table>
//       {/* MODAL START */}
//       <Modal isOpen={isopen} style={customStyles}>
//         <h2 style={{ textAlign: "center" }}>Update</h2>
//         {selectedData.map((value, index) => {
//           return (
//             <div className="form-group" key={index}>
//               <form>
//                 <b>Food: </b>
//                 <br />
//                 <input
//                   type="radio"
//                   defaultChecked={value.food === "Italian"}
//                   value="Italian"
//                   onChange={handleFood}
//                   id="italian"
//                   name="food"
//                 />
//                 <label htmlFor="italian">Italian</label>
//                 <br />
//                 <input
//                   type="radio"
//                   defaultChecked={value.food === "Chinese"}
//                   value="Chinese"
//                   onChange={handleFood}
//                   id="chinese"
//                   name="food"
//                 />
//                 <label htmlFor="chinese">Chinese</label>
//                 <br />
//                 <br />
//                 <label>
//                   <b>Ratings: {value.ratings} </b>
//                 </label>
//                 <br />
//                 <select onChange={handleRating} defaultValue={value.ratings}>
//                   <option>STARS</option>
//                   <option value="5">5 stars</option>
//                   <option value="4">4 stars</option>
//                   <option value="3">3 stars</option>
//                 </select>
//                 <br />
//                 <br />
//                 <b>City: </b>
//                 {/* <input
//                   type="checkbox"
//                   id="chd"
//                   value="Chandigarh"
//                   defaultChecked={value.city === "Chandigarh"}
//                   onChange={handleCity}
//                 />
//                 <label htmlFor="chd">Chandigarh</label>
//                 <input
//                   type="checkbox"
//                   id="mohali"
//                   value="Mohali"
//                   defaultChecked={value.city === "Mohali"}
//                   onChange={handleCity}
//                 />
//                 <label htmlFor="mohali">Mohali</label>
//                 <input
//                   type="checkbox"
//                   id="pchk"
//                   value="Panchkula"
//                   defaultChecked={value.city === "Panchkula"}
//                   onChange={handleCity}
//                 />
//                 <label htmlFor="pchk">Panchkula</label> */}
//                 {/* {value.city.map((c, index) => {
//                   return (
//                     <div key={index}>
//                       <input
//                         type="checkbox"
//                         id="chd"
//                         value="Chandigarh"
//                         defaultChecked={c === "Chandigarh"}
//                         onChange={handleCity}
//                       ></input>
//                       <label htmlFor="chd">Chandigarh</label>
//                       <input
//                         type="checkbox"
//                         id="mohali"
//                         value="Mohali"
//                         defaultChecked={c === "Mohali"}
//                         onChange={handleCity}
//                       ></input>
//                       <label htmlFor="mohali">Mohali</label>
//                       <input
//                         type="checkbox"
//                         id="pchk"
//                         value="Panchkula"
//                         defaultChecked={c === "Panchkula"}
//                         onChange={handleCity}
//                       ></input>
//                       <label htmlFor="pchk">Panchkula</label>
//                     </div>
//                   );
//                 })} */}
//                 {cities.map((city, key) => (
//                   <div>
//                     <span>
//                       <label key={key}>{city}:</label>
//                       <input
//                         type="checkbox"
//                         value={city}
//                         defaultChecked={value.city.includes(city)}
//                         onChange={handleCity}
//                       />
//                     </span>
//                   </div>
//                 ))}

//                 <br />
//                 <br />
//                 <button
//                   className="btn btn-info"
//                   onClick={() => handleUpdate(index, value)}
//                 >
//                   Update
//                 </button>
//               </form>
//               <br />
//             </div>
//           );
//         })}
//       </Modal>
//       {/* MODAL END */}
//     </div>
//   );
// }

// export default Next;

import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { useHistory } from "react-router-dom";
Modal.setAppElement("#root");

//MODAL CUSTOM STYLE
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: 500,
  },
};

function UserTable() {
  const [idx, setIdx] = useState(null);
  const [localData, setLocalData] = useState([]);
  const [selectedData, setSelectedData] = useState([]);
  const [formData, setFormData] = useState({
    food: "",
    ratings: "5",
    city: [],
  });

  //modal
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    getData();
  }, [localData]);

  const getData = () => {
    let localDB = JSON.parse(localStorage.getItem("data"));
    setLocalData(localDB);
  };

  const cities = ["Mohali", "Chandigarh", "Panchkula"];

  //handleCity
  const handleCity = (e) => {
    if (formData.city.includes(e.target.value)) {
      let idx = formData.city.indexOf(e.target.value);
      formData.city.splice(idx, 1);
      return;
    } else {
      formData.city.push(e.target.value);
    }
  };

  //handleRating
  const handleRating = (e) => {
    setFormData({ ...formData, ratings: e.target.value });
  };

  //handleFood
  const handleFood = (e) => {
    setFormData({ ...formData, food: e.target.value });
  };

  //DELETE
  const deleteData = (id) => {
    setLocalData(localData.splice(id, 1));
    localStorage.setItem("data", JSON.stringify(localData));
  };

  //EDIT
  const handleEdit = (value, index) => {
    setFormData({ ...value });
    setIsopen(true);
    setIdx(index);
    selectedData.splice(0, 1, value);
  };

  //UPDATE
  const handleUpdate = (id) => {
    let data = JSON.parse(localStorage.getItem("data"));
    data.splice(idx, 1, formData);
    localStorage.setItem("data", JSON.stringify(data));
    setIsopen(false);
    alert("Data successfully Updated");
  };
  const history = useHistory();

  const homePage = () => {
    let pathName = "/"
     history.push(pathName);
  }

  return (
    <div>
         <button onClick={homePage}>Back to HomePage</button>
      <h1>Choice of Food: </h1>
      <table className="table">
        <thead>
          <tr>
            <th>Food Choice</th>
            <th>Ratings</th>
            <th>City</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {/* map start */}
          {localData.map((value, index) => {
            return (
              <tr>
                <td>{value.food}</td>
                <td>{value.ratings}</td>
                <td>
                  {value.city.map((c) => {
                    return <p>{c}</p>;
                  })}
                </td>
                <button
                  className="btn btn-warning"
                  onClick={() => handleEdit(value, index)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  onClick={() => deleteData(index)}
                >
                  Delete
                </button>
              </tr>
            );
          })}
          {/* map end */}
        </tbody>
      </table>
      {/* MODAL START */}
      <Modal isOpen={isopen} style={customStyles}>
        <h2 style={{ textAlign: "center" }}>Update User</h2>
        {selectedData.map((value, index) => {
          return (
            <div className="form-group" key={index}>
              <form>
                <b>Food: </b>
                <br />
                <input
                  type="radio"
                  defaultChecked={value.food === "Italian"}
                  value="Italian"
                  onChange={handleFood}
                  id="italian"
                  name="food"
                />
                <label htmlFor="italian">Italian</label>
                <br />
                <input
                  type="radio"
                  defaultChecked={value.food === "Chinese"}
                  value="Chinese"
                  onChange={handleFood}
                  id="chinese"
                  name="food"
                />
                <label htmlFor="chinese">Chinese</label>
                <br />
                <br />
                <label>
                  <b>Ratings: </b>
                </label>
                <br />
                <select onChange={handleRating} defaultValue={value.ratings}>
                  <option value="Select">Select Ratings</option>
                  <option value="5">5 Stars</option>
                  <option value="4">4 Stars</option>
                  <option value="3">3 Stars</option>
                  <option value="2">2 Stars</option>
                  <option value="1">1 Stars</option>
                </select>
                <br />
                <br />
                <b>City: </b>
                {/* <input
                  type="checkbox"
                  id="chd"
                  value="Chandigarh"
                  defaultChecked={value.city === "Chandigarh"}
                  onChange={handleCity}
                />
                <label htmlFor="chd">Chandigarh</label>
                <input
                  type="checkbox"
                  id="mohali"
                  value="Mohali"
                  defaultChecked={value.city === "Mohali"}
                  onChange={handleCity}
                />
                <label htmlFor="mohali">Mohali</label>
                <input
                  type="checkbox"
                  id="pchk"
                  value="Panchkula"
                  defaultChecked={value.city === "Panchkula"}
                  onChange={handleCity}
                />
                <label htmlFor="pchk">Panchkula</label> */}
                {/* {value.city.map((c, index) => {
                  return (
                    <div key={index}>
                      <input
                        type="checkbox"
                        id="chd"
                        value="Chandigarh"
                        defaultChecked={c === "Chandigarh"}
                        onChange={handleCity}
                      ></input>
                      <label htmlFor="chd">Chandigarh</label>
                      <input
                        type="checkbox"
                        id="mohali"
                        value="Mohali"
                        defaultChecked={c === "Mohali"}
                        onChange={handleCity}
                      ></input>
                      <label htmlFor="mohali">Mohali</label>
                      <input
                        type="checkbox"
                        id="pchk"
                        value="Panchkula"
                        defaultChecked={c === "Panchkula"}
                        onChange={handleCity}
                      ></input>
                      <label htmlFor="pchk">Panchkula</label>
                    </div>
                  );
                })} */}
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

                <br />
                <br />
                <button className="btn btn-info" onClick={() => handleUpdate()}>
                  Update
                </button>
              </form>
              <br />
            </div>
          );
        })}
      </Modal>
      {/* MODAL END */}
    </div>
  );
}

export default UserTable;
