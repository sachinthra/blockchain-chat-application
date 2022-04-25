import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useSelector } from "react-redux";

export default function ListUserDirectory({toUser, setToUser}) {
  

  const handleChange = (event) => {
    setToUser(event.target.value);
  };
  const { LoadSCpropReducer } = useSelector(
    (state) => state
  );
console.log(toUser)
  return (
    <div>
      <FormControl sx={{ m: 1, minWidth:420 }} >
        <InputLabel id="demo-simple-select-helper-label">User directory</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={toUser}
          label="User directory"
          onChange={handleChange}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={10}>Address</MenuItem>
          {LoadSCpropReducer.usersList.map((user, index) => <MenuItem key={index} value={user}>{user}</MenuItem>)}
        </Select>
        {/* <FormHelperText>With label + helper text</FormHelperText> */}
      </FormControl>
    </div>
  );
}


