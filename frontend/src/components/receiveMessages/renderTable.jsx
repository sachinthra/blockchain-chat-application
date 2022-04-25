import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from "react-redux";

export default function RenderTable() {
    const { ReceivedMessagesReducer } = useSelector(
        (state) => state
      );
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Sender (Address)</TableCell>
            <TableCell align="right">Content&nbsp;</TableCell>
            <TableCell align="right">Timestamp&nbsp;()</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {ReceivedMessagesReducer.messages.map((row) => (
            <TableRow
              key={row.content}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">{row.sender}</TableCell>
              <TableCell align="right">{row.content}</TableCell>
              <TableCell align="right">{row.timestamp}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
