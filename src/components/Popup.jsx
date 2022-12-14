import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross2 } from "react-icons/rx";
import { setEditId, setEditToggle, setToggle } from "../app/PopupSlice";
import { addItems, editItems } from "../app/ListSlice";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
function Popup(prop) {
  const toggle = useSelector((state) => state.popup.toggle);
  const count = useSelector((state) => state.list.count);
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [category, setcategory] = useState("");
  const [area, setArea] = useState("");
  const [openDate, setOpendate] = useState("");
  const [closeDate, setClosedate] = useState("");
  const [warn, setWarn] = useState("");
  const edit = useSelector((state) => state.popup);
  const list = useSelector((state) => state.list.shopList);
  const handleAdd = (e) => {
    e.preventDefault();

    if (name !== "" && category && area && openDate && closeDate) {
      if (!edit.editToggle) {
        dispatch(
          addItems({
            id: count + 1,
            shopName: name,
            shopArea: area,
            Category: category,
            openingDate: openDate,
            closingDate: closeDate,
          })
        );
        dispatch(setToggle(false));
      }
      if (edit.editToggle === true) {
        dispatch(
          editItems({
            id: edit.editId + 1,
            shopName: name,
            shopArea: area,
            Category: category,
            openingDate: openDate,
            closingDate: closeDate,
          })
        );
        dispatch(setToggle(false));
        dispatch(setEditToggle(false));
        dispatch(setEditId(-1));
      }
    } else {
      setWarn("all fields required");
      setTimeout(() => {
        reset();
      }, 5000);
    }
  };
  const reset = () => {
    setWarn("");
  };
  useEffect(() => {
    if (edit.editToggle) {
      setName(list[edit.editId].shopName);
      setcategory(list[edit.editId].Category);
      setArea(list[edit.editId].shopArea);
      setOpendate(list[edit.editId].openingDate);
      setClosedate(list[edit.editId].closingDate);
    } else {
      setName("");
      setcategory("");
      setArea("");
      setOpendate("");
      setClosedate("");
    }
    // eslint-disable-next-line
  }, [edit.editToggle]);

  return (
    <div className={`popup-body ${!toggle ? "hide" : ""}`}>
      <div className="popup-heading">
        <h3> {edit.editToggle ? "Edit Item" : "Add Item"}</h3>
        <RxCross2
          onClick={() => {
            dispatch(setToggle(false));
          }}
        />
      </div>
      <p className={`red ${warn !== "" ? "" : "hide"}`}>{warn}</p>
      <form className="form-add">
        <input
          type="text"
          placeholder="Enter Shop name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select Category</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="select category"
            onChange={(e) => {
              setcategory(e.target.value);
            }}
          >
            <MenuItem value={"Grocery"}>Grocery</MenuItem>
            <MenuItem value={"Butcher"}>Butcher</MenuItem>
            <MenuItem value={"Baker"}>Baker</MenuItem>
            <MenuItem value={"Chemist"}>Chemist</MenuItem>
            <MenuItem value={"Stationery shop"}>Stationery shop</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Select area</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={area}
            label="select category"
            onChange={(e) => {
              setArea(e.target.value);
            }}
          >
            <MenuItem value={"Thane"}>Thane</MenuItem>
            <MenuItem value={"Pune"}>Pune</MenuItem>
            <MenuItem value={"Mumbai Suburban"}>Mumbai Suburban</MenuItem>
            <MenuItem value={"Nashik"}>Nashik</MenuItem>
            <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
            <MenuItem value={"Ahmednagar"}>Ahmednagar</MenuItem>
            <MenuItem value={"Solapur"}>Solapur</MenuItem>
          </Select>
        </FormControl>
        <div className="f-add-date">
          <p>Set opening date:</p>
          <input
            type="date"
            value={openDate}
            min={new Date().toISOString().split("T")[0]}
            onChange={(e) => {
              setOpendate(e.target.value);
              setClosedate(e.target.value);
            }}
          />
        </div>
        <div className="f-add-date">
          <p>set closing date</p>

          <input
            type="date"
            min={openDate}
            value={closeDate}
            onChange={(e) => {
              setClosedate(e.target.value);
            }}
          />
        </div>
        <button className="f-btn" onClick={handleAdd}>
          {edit.editToggle ? "Edit Item" : "Add Item"}
        </button>
      </form>
    </div>
  );
}

export default Popup;
