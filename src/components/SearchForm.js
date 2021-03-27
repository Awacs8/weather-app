import React, { useState } from "react";
import { ReactComponent as SearchIcon } from "../utils/icon/search.svg";
import { ReactComponent as LocationIcon } from "../utils/icon/current-location.svg";

import { Form, Input, Button } from "../utils/style";

const SearchForm = ({ searchByName, searchByGeolocation }) => {
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
          searchByName(city);
          setCity("");
        }}
      >
        <SearchIcon />
      </Button>
      <Button onClick={searchByGeolocation} title={"show by geolocation"}>
        <LocationIcon />
      </Button>
    </Form>
  );
};
export default SearchForm;
