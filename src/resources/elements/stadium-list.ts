import { bindable } from 'aurelia-framework';
import { Stadium } from '../../services/stadium-types';

export class StadiumList {
  @bindable
  stadiums: Stadium[];
}
