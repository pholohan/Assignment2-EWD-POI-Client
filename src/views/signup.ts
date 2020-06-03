import { inject } from 'aurelia-framework';
import { StadiumService } from '../services/stadium-service';

@inject(StadiumService)
export class Signup {
  firstName = '';
  lastName = '';
  email = '';
  password = '';
  prompt = '';

  constructor(private ds: StadiumService) {}

  signup(e) {
    console.log(`Trying to sign up ${this.email}`);
    const success = this.ds.signup(this.firstName, this.lastName, this.email, this.password);
    if (!success) {
      this.prompt = 'Oops! Try again...';
    }
  }
}
