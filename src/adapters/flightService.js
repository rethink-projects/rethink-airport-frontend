import { Flight } from '../domain/models/flight';

export async function getAllFlights() {
  await new Promise(res => setTimeout(res, 500));
  const data = [
    {
      id: 1,
      code: 'RA123',
      type: 'Chegada',
      departedAt: '08:30',
      arrivesAt: '10:45',
      status: 'No horário',
    },
    {
      id: 2,
      code: 'RA456',
      type: 'Partida',
      departedAt: '07:15',
      arrivesAt: '09:00',
      status: 'Atrasado',
    },

  ];
  return data.map(f => new Flight(f));
}