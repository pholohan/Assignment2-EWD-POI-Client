import { bindable } from 'aurelia-framework';
import { Stadium } from "../../services/stadium-types";

export class StadiumForm {
  name: string;
  county: string;
  capacity: string;
  stadiumURL: string;
  lng: number;
  lat: number
  @bindable
  stadiums: Stadium[] = [];
  @bindable
  poiProvinces =['Munster', 'Ulster', 'Leinster', 'Connacht'];
  @bindable
  poiCounty = ['Antrim', 'Armagh','Carlow','Cavan','Clare','Cork','Derry','Donegal','Down','Dublin','Fermanagh','Galway',
    'Kerry','Kildare','Kilkenny','Laois','Leitrim','Limerick','Longford','Louth','Mayo','Meath','Monaghan','Offaly','Roscommon',
    'Sligo','Tipperary','Tyrone','Waterford','Westmeath','Wexford','Wicklow'];

  selectedProvince = '';
  selectedCounty = '';

  addStadium() {
    const stadium = {
      name: this.name,
      county: this.selectedCounty,
      capacity: this.capacity,
      province: this.selectedProvince,
      stadiumURL: this.stadiumURL,
      lng: this.lng,
      lat: this.lat,
    };
    this.stadiums.push(stadium);
    console.log(stadium);
  }
}
