import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { ActionButton } from "../Buttons/ActionButton";
import { useState } from "react";

export const Search = () => {
  const [from, setFrom] = useState("");
  const [whereto, setWhereto] = useState("");
  const handleChange = (event) => {
    if (event.target.name === "fromwhere") {
      setFrom(event.target.value);
    }
    if (event.target.name === "whereto") {
      setWhereto(event.target.value);
    }
  };
  return (
    <form className="flex mb-[25px]">
      <Box className="w-full max-w-[425px]">
        <FormControl className="w-full">
          <InputLabel>From Where?</InputLabel>
          <Select
            name="fromwhere"
            value={from}
            onChange={handleChange}
            className="w-full"
          >
            <MenuItem value="JFK">JFK</MenuItem>
            <MenuItem value="PVG">PVG</MenuItem>
            <MenuItem value="STL">STL</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <Box className="w-full max-w-[425px]">
        <FormControl className="w-full">
          <InputLabel>Where to?</InputLabel>
          <Select
            name="whereto"
            value={whereto}
            onChange={handleChange}
            className="w-full"
          >
            <MenuItem value="JFK">JFK</MenuItem>
            <MenuItem value="PVG">PVG</MenuItem>
            <MenuItem value="STL">STL</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <input type="text" />
      <ActionButton title="Search" />
    </form>
  );
};
