import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useSelector, useDispatch } from "react-redux";
import {setSendInfo} from "../reduxProcess/actions/SendInfoAction"


export default function SendForm() {
  const { SendInfoReducer } = useSelector((state) => state);
  const dispatch = useDispatch();
  
  const handleChange = (event) => {
    dispatch(setSendInfo({toUserAddress: event.target.value}));
  };
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '100%' },
      }}
      noValidate
      autoComplete="off"
    >
       <TextField id="outlined-basic" label="Send to Address" variant="outlined" value={SendInfoReducer.toUserAddress} onChange={handleChange} />
    </Box>
  );
}
