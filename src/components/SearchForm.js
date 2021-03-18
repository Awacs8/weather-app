import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../utils/search.svg";
import { Form, Input, Button } from "../utils/style";

const SearchForm = ({ handleClick }) => {
  const [city, setCity] = useState("");

  return (
    <Form>
      <Input
        placeholder="search location..."
        type="text"
        name="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <Button
        onClick={() => {
          handleClick(city);
          setCity("");
        }}
      >
        <SearchIcon />
      </Button>
    </Form>
  );
};
export default SearchForm;
