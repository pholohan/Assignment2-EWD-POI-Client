import { autoinject, inject } from 'aurelia-framework';
import { bindable } from 'aurelia-framework';
import { Stadium } from "../../services/stadium-types";
import { StadiumService } from '../../services/stadium-service';

@inject(StadiumService)
export class StadiumForm {
  name: string;
  county: string;
  capacity: number;
  stadiumURL: string;
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

  constructor(private ds: StadiumService) {}

  addStadium() {
    this.ds.createStadium(this.name, this.selectedCounty, this.capacity, this.selectedProvince, this.stadiumURL);
  }

}

