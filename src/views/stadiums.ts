import { inject } from 'aurelia-framework';
import { Stadium } from '../services/stadium-types';
import { StadiumService } from '../services/stadium-service';

@inject(StadiumService)
export class Stadiums {
  stadiums: Stadium[];

  constructor(private ds: StadiumService) {
    this.stadiums = ds.stadiums;
  }
}


