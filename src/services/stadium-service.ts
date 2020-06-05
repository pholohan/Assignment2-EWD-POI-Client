import { inject, Aurelia } from 'aurelia-framework';
import { Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';
import { Stadium, User } from './Stadium-types';
import { HttpClient } from 'aurelia-http-client';

@inject(HttpClient, Aurelia, Router)
export class StadiumService {
  stadiums: Stadium[] = [];
  users: Map<string, User> = new Map();
  usersById: Map<string, User> = new Map();

  constructor(private httpClient: HttpClient, private au: Aurelia, private router: Router) {
    httpClient.configure(http => {
      http.withBaseUrl('http://localhost:3000');
    });
  }

  async getStadiums() {
    const response = await this.httpClient.get('/api/userstadiums');
    this.stadiums = await response.content;
    console.log(this.stadiums);
  }

  async getUsers() {
    const response = await this.httpClient.get('/api/users');
    const users = await response.content;
    users.forEach(user => {
      this.users.set(user.email, user);
      this.usersById.set(user._id, user);
    });
  }

  async createStadium(name: string, county: string, capacity: number, province: string, stadiumURL: string,) {
    const stadium = {
      name: name,
      county: county,
      capacity: capacity,
      province: province,
      stadiumURL: stadiumURL,
    };
    const response = await this.httpClient.post('/api/stadiums', stadium);
    const newStadium = await response.content;
    this.stadiums.push(newStadium);
  }

  async signup(firstName: string, lastName: string, email: string, password: string) {
    const user = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };
    const response = await this.httpClient.post('/api/users', user);
    const newUser = await response.content;
    this.changeRouter(PLATFORM.moduleName('app'));
    return false;
  }

  async login(email: string, password: string) {
    let success = false;
    try {
      const response = await this.httpClient.post('/api/users/authenticate', { email: email, password: password });
      const status = await response.content;
      if (status.success) {
        this.httpClient.configure((configuration) => {
          configuration.withHeader('Authorization', 'bearer ' + status.token);
        });
        await this.getStadiums();
        await this.getUsers();
        this.changeRouter(PLATFORM.moduleName('app'));
        success = status.success;
      }
    } catch (e) {
      success = false;
    }
    return success;
  }

  logout() {
    this.httpClient.configure(configuration => {
      configuration.withHeader('Authorization', '');
    });
    this.changeRouter(PLATFORM.moduleName('start'));
  }

  changeRouter(module:string) {
    this.router.navigate('/', { replace: true, trigger: false });
    this.router.reset();
    this.au.setRoot(PLATFORM.moduleName(module));
  }
}
