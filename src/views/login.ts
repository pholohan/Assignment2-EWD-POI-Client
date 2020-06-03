import { inject } from 'aurelia-framework';
import { StadiumService } from '../services/stadium-service';

@inject(StadiumService)
export class Login {
  email = 'marge@simpson.com';
  password = 'secret';
  prompt = '';

  constructor(private ds: StadiumService) {}

  async login(e) {
    console.log(`Trying to log in ${this.email}`);
    const success  = await this.ds.login(this.email, this.password);
    if(!success){
      this.prompt = "Oops! try again... ";
    }
  }
}
