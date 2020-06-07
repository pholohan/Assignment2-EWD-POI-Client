import { bindable } from 'aurelia-framework';
import { Stadium } from '../../services/stadium-types';
import { StadiumService } from '../../services/stadium-service';

export class StadiumList {
  @bindable
  stadiums: Stadium[];

  constructor(private ds: StadiumService) {}

  async activate(params){
    await this.ds.getStadiumsbyId(params._id);
  }
}
