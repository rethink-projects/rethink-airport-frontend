import React, { useEffect, useState } from "react";
import { getAllFlights } from "../adapters/flightService";
import {
  Paper,
  Typography,
  Tabs,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";

export default function FlightStatus() {
  const [flights, setFlights] = useState([]);
  const [tab, setTab] = useState("Partida"); // 'Partidas' ou 'Chegadas'

  useEffect(() => {
    getAllFlights().then(setFlights);
  }, []);

  // Data de hoje formatada
  const today = new Date();
  const day = String(today.getDate()).padStart(2, "0");
  const month = String(today.getMonth() + 1).padStart(2, "0");
  const year = today.getFullYear();
  const formattedDate = `${day}/${month}/${year}`;

  // Filtra voos de acordo com a aba selecionada
  const filteredFlights = flights.filter((f) => f.type === tab);

  const handleTabChange = (_, newValue) => {
    setTab(newValue);
  };

  return (
    <Paper sx={{ p: 2, mb: 4, borderRadius: 3 }} elevation={3}>
      {/* Abas */}
      <Typography variant="h6" gutterBottom>
        Acompanhe os voos de {formattedDate}
      </Typography>
      <Tabs
        value={tab}
        onChange={handleTabChange}
        textColor="primary"
        indicatorColor="primary"
        sx={{ mb: 2 }}
      >
        <Tab label="Partidas" value="Partida" />
        <Tab label="Chegadas" value="Chegada" />
      </Tabs>

      {/* Título com data */}

      {/* Tabela de voos filtrados */}
      <Box sx={{ overflowX: "auto" }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Código</TableCell>
              <TableCell>Tipo</TableCell>
              <TableCell>Partida</TableCell>
              <TableCell>Chegada</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredFlights.map((f) => (
              <TableRow key={f.id}>
                <TableCell>{f.code}</TableCell>
                <TableCell>
                  {f.type === "Partida" ? "Partida" : "Chegada"}
                </TableCell>
                <TableCell>{f.departedAt}</TableCell>
                <TableCell>{f.arrivesAt}</TableCell>
                <TableCell>{f.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Paper>
  );
}
