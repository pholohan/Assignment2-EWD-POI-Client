import { inject } from 'aurelia-framework';
import { StadiumService } from '../services/stadium-service';

@inject(StadiumService)
export class Logout {
  constructor(private ds: StadiumService) {}

  attached() {
    this.ds.logout();
  }
}
