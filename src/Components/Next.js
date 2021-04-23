import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import { Link } from "react-router-dom";

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

function Next() {
  const [submitLocalStorage, setSubmitLocalStorage] = useState([]);
  let [newFormData, setnewFormData] = useState({});
  const [array, setArray] = useState([]);
  let [indexID, setindexID] = useState(null);
  const [food, setFood] = useState();
  const [dropDown, setdropDown] = useState("Select");
  const [isChecked, setisChecked] = useState([]);

  //modal
  const [isopen, setIsopen] = useState(false);

  useEffect(() => {
    getLocalStorageData();
  }, [submitLocalStorage]);

  const getLocalStorageData = () => {
    let localDB = JSON.parse(localStorage.getItem("data"));
    setSubmitLocalStorage(localDB);
  };

  //DELETE USER
  const deleteUser = (id) => {
    setSubmitLocalStorage(submitLocalStorage.splice(id, 1));
    localStorage.setItem("data", JSON.stringify(submitLocalStorage));
  };

  //UPDATE USER
  const handleUpdate = (id) => {
    let data = JSON.parse(localStorage.getItem("data"));
    data.splice(indexID, 1, newFormData);
    localStorage.setItem("data", JSON.stringify(data));
    setIsopen(false);
    alert("Data successfully Updated");
  };

  //EDIT USER
  const handleEdit = (value, index) => {
    setnewFormData({ ...value });
    setIsopen(true);
    setindexID(index);
    array.splice(0, 1, value);
  };

  return (
    <>
      <div>
        <Link to="/">Back to HomePage</Link>
        <h2>Choice of Food: </h2>

        <table className="table">
          <thead>
            <tr>
              <th>Food</th>
              <th>City</th>
              <th>Rating</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {submitLocalStorage.length > 0 ? (
              submitLocalStorage.map((value, index) => {
                return (
                  <tr key={index}>
                    <td>{value.food}</td>
                    <td>{value.city}</td>
                    <td>{value.dropDown}</td>
                    <td>{value.rating}</td>

                    <td>
                      <button
                        className="btn btn-danger"
                        onClick={() => deleteUser(index)}
                      >
                        Delete
                      </button>
                    </td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEdit(value, index)}
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <h2 className="p-5">Empty List</h2>
            )}
          </tbody>
        </table>

        {/* MODAL START */}
        <Modal isOpen={isopen} style={customStyles}>
          <h2 style={{ textAlign: "center" }}>Update Details</h2>
          {array.map((value, index) => {
            return (
              <div className="form-group">
                <form>
                  <label>Food: </label>
                  <input
                    type="radio"
                    checked={food === "Italian"}
                    className="form-control"
                    defaultValue={value.food}
                    onChange={(e) =>
                      setnewFormData({ ...newFormData, radio: e.target.value })
                    }
                  />{" "}
                  Italian
                  <br />
                  <input
                    type="radio"
                    className="form-control"
                    checked={food === "Chinese"}
                    defaultValue={value.food}
                    onChange={(e) =>
                      setnewFormData({ ...newFormData, radio: e.target.value })
                    }
                  />{" "}
                  Chinese
                  <br />
                  <label>
          City:
        </label>
                  <input
                    type="checkbox"
                    className="form-control"
                    defaultValue={value.city}
                    onChange={(e) =>
                      setnewFormData({
                        ...newFormData,
                        isChecked: e.target.value,
                      })
                    }
                  />  PNCH
                  <br />
                  <input
                    type="checkbox"
                    name="city"
                    className="form-control"
                    defaultValue={value.city}
                    onChange={(e) =>
                      setnewFormData({
                        ...newFormData,
                        isChecked: e.target.value,
                      })
                    }
                  />   CHD
                  <br />
                  <input
                    type="checkbox"
                    name="city"
                    className="form-control"
                    defaultValue={value.city}
                    onChange={(e) =>
                      setnewFormData({
                        ...newFormData,
                        isChecked: e.target.value,
                      })
                    }
                  />  Mohali
                  <br />
        <select
         defaultValue={value.rating}
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
                </form>
                <br />
                <button className="btn btn-info" onClick={() => handleUpdate()}>
                  Update
                </button>
              </div>
            );
          })}
        </Modal>
        {/* MODAL END */}
      </div>
    </>
  );
}
export default Next;
