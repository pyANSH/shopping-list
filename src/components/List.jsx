import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { FiEdit, FiList } from "react-icons/fi";
import Popup from "./Popup";
import { setToggle } from "../app/PopupSlice";
import { RxCross2 } from "react-icons/rx";
import { removeItems } from "../app/ListSlice";
function List() {
  const dispatch = useDispatch();
  const current = new Date();
  const [a, setA] = useState("None");
  const [c, setC] = useState("None");

  const list = useSelector((state) => state.list);
  const findDate = (o, c) => {
    return new Date(o) < current && new Date(c) > current;
  };
  return (
    <div className="list-body">
      <div className="list-heading">
        <h1>Shop list</h1>
        <p>Items : {list.count}</p>
      </div>
      <div className="filter">
        <h3>Apply Filter</h3>
        <div className="flexi">
          <FormControl className="half">
            <InputLabel id="demo-simple-select-label">Select area</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={a}
              label="select category"
              onChange={(e) => {
                setA(e.target.value);
              }}
            >
              <MenuItem value={"None"}>None</MenuItem>
              <MenuItem value={"Thane"}>Thane</MenuItem>
              <MenuItem value={"Pune"}>Pune</MenuItem>
              <MenuItem value={"Mumbai Suburban"}>Mumbai Suburban</MenuItem>
              <MenuItem value={"Nashik"}>Nashik</MenuItem>
              <MenuItem value={"Nagpur"}>Nagpur</MenuItem>
              <MenuItem value={"Ahmednagar"}>Ahmednagar</MenuItem>
              <MenuItem value={"Solapur"}>Solapur</MenuItem>
            </Select>
          </FormControl>
          <FormControl className="half">
            <InputLabel id="demo-simple-select-label">
              Select Category
            </InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={c}
              label="select category"
              onChange={(e) => {
                setC(e.target.value);
              }}
            >
              <MenuItem value={"None"}>None</MenuItem>
              <MenuItem value={"Grocery"}>Grocery</MenuItem>
              <MenuItem value={"Butcher"}>Butcher</MenuItem>
              <MenuItem value={"Baker"}>Baker</MenuItem>
              <MenuItem value={"Chemist"}>Chemist</MenuItem>
              <MenuItem value={"Stationery shop"}>Stationery shop</MenuItem>
            </Select>
          </FormControl>
        </div>
        <p
          className={`rm-filter ${a !== "None" || c !== "None" ? "" : "hide"}`}
          onClick={() => {
            setA("None");
            setC("None");
          }}
        >
          Remove filter
        </p>
      </div>
      <div className="list-prod">
        {a === "None" && c === "None"
          ? list.shopList.map((item) => {
              return (
                <div key={item.id} className="prod">
                  <div className="prod-icon">
                    <FiList />
                  </div>
                  <div className="prod-name">
                    <h3>{item.shopName}</h3>
                    <span>
                      {findDate(item.openingDate, item.closingDate) ? (
                        <p className="green">Opened</p>
                      ) : (
                        <p className="red">Closed</p>
                      )}
                    </span>
                    <p>{item.shopArea}</p>
                    <p>{item.Category}</p>
                    <span>
                      {item.openingDate} - {item.closingDate}
                    </span>
                  </div>
                  <div className="edit">
                    <RxCross2
                      onClick={() => {
                        dispatch(removeItems(item.id));
                      }}
                    />
                  </div>
                </div>
              );
            })
          : a !== "None" && c === "None"
          ? list.shopList
              .filter((item) => item.shopArea === a)
              .map((item) => {
                return (
                  <div key={item.id} className="prod">
                    <div className="prod-icon">
                      <FiList />
                    </div>
                    <div className="prod-name">
                      <h3>{item.shopName}</h3>
                      <span>
                        {findDate(item.openingDate, item.closingDate) ? (
                          <p className="green">Opened</p>
                        ) : (
                          <p className="red">Closed</p>
                        )}
                      </span>
                      <p>{item.shopArea}</p>
                      <p>{item.Category}</p>
                      <span>
                        {item.openingDate} - {item.closingDate}
                      </span>
                    </div>
                  </div>
                );
              })
          : a === "None" && c !== "None"
          ? list.shopList
              .filter((item) => item.Category === c)
              .map((item) => {
                return (
                  <div key={item.id} className="prod">
                    <div className="prod-icon">
                      <FiList />
                    </div>
                    <div className="prod-name">
                      <h3>{item.shopName}</h3>
                      <span>
                        {findDate(item.openingDate, item.closingDate) ? (
                          <p className="green">Opened</p>
                        ) : (
                          <p className="red">Closed</p>
                        )}
                      </span>
                      <p>{item.shopArea}</p>
                      <p>{item.Category}</p>
                      <span>
                        {item.openingDate} - {item.closingDate}
                      </span>
                    </div>
                  </div>
                );
              })
          : a !== "None" && c !== "None"
          ? list.shopList
              .filter((item) => item.shopArea === a)
              .filter((item) => item.Category === c)
              .map((item) => {
                return (
                  <div key={item.id} className="prod">
                    <div className="prod-icon">
                      <FiList />
                    </div>
                    <div className="prod-name">
                      <h3>{item.shopName}</h3>
                      <span>
                        {findDate(item.openingDate, item.closingDate) ? (
                          <p className="green">Opened</p>
                        ) : (
                          <p className="red">Closed</p>
                        )}
                      </span>
                      <p>{item.shopArea}</p>
                      <p>{item.Category}</p>
                      <span>
                        {item.openingDate} - {item.closingDate}
                      </span>
                    </div>
                  </div>
                );
              })
          : "Congrats You found a Bug "}
      </div>
      <button
        className="btn-add"
        onClick={() => {
          dispatch(setToggle(true));
        }}
      >
        Add a new item
      </button>
      <Popup />
    </div>
  );
}

export default List;
