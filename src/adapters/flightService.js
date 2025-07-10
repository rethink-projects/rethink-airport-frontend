import { Flight } from '../domain/models/flight';

export async function getAllFlights() {
  await new Promise(res => setTimeout(res, 500));
  const data = [
    {
      id: 1,
      code: 'RA123',
      type: 'Departure',
      departedAt: '08:30',
      arrivesAt: '10:45',
      status: 'On Time',
    },
    {
      id: 2,
      code: 'RA456',
      type: 'Arrival',
      departedAt: '07:15',
      arrivesAt: '09:00',
      status: 'Delayed',
    },

  ];
  return data.map(f => new Flight(f));
}