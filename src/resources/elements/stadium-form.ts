import { bindable } from 'aurelia-framework';
import { Stadium } from "../../services/stadium-types";

export class StadiumForm {
  name: string;
  county: string;
  capacity: string;
  province: string;
  @bindable
  stadiums: Stadium[] = [];

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
