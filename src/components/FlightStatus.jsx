import React, { useEffect, useState } from "react";
import { getAllFlights } from "../adapters/flightService";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Paper,
  Typography,
} from "@mui/material";

export default function FlightStatus() {
  const [flights, setFlights] = useState([]);
  useEffect(() => {
    getAllFlights().then(setFlights);
  }, []);

  return (
    <Paper sx={{ p: 2, mb: 4 }}>
      <Typography variant="h6" gutterBottom>
        Flight Status
      </Typography>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Code</TableCell>
            <TableCell>Type</TableCell>
            <TableCell>Departed At</TableCell>
            <TableCell>Arrives At</TableCell>
            <TableCell>Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {flights.map((f) => (
            <TableRow key={f.id}>
              <TableCell>{f.code}</TableCell>
              <TableCell>{f.type}</TableCell>
              <TableCell>{f.departedAt}</TableCell>
              <TableCell>{f.arrivesAt}</TableCell>
              <TableCell>{f.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}
