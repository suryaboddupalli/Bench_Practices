import axios from "axios";
import React, { ChangeEvent, useState } from "react";

type product = {
  Name?: String;
  Cost?: number;
  Description?: String;
  Profile?: string;
};

function SearchBar() {
  const [search, setSearch] = useState({});
  const [searchProduct, setSearchProduct] = useState<product[]>();

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch({ [e.target.name]: e.target.value });
  };

  const handleClick = () => {
    axios
      .get(`http://localhost:8000/product/get/${search}`)
      .then((res) => {
        setSearchProduct(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="form-group">
        <input type="text" name="search" onChange={changeHandler} />
      </div>
      <br />
      <div>
        <button onClick={handleClick} className="btn btn-primary">
          Search
        </button>
      </div>
      <br />
    </div>
  );
}

export default SearchBar;
