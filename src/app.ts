export class App {
  name: string;
  county: string;
  capacity: string;
  province: string;
  stadiums: any[] = [];

  addStadium() {
    const stadium = {
      name: this.name,
      county: this.county,
      capacity: this.capacity,
      province: this.province,
    };
    this.stadiums.push(stadium);
    console.log(stadium);
}
}
