export class Flight {
  constructor({ id, code, type, departedAt, arrivesAt, status }) {
    this.id = id;
    this.code = code;
    this.type = type; // 'Arrival' ou 'Departure'
    this.departedAt = departedAt;
    this.arrivesAt = arrivesAt;
    this.status = status;
  }
}