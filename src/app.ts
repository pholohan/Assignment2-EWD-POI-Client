import { RouterConfiguration, Router } from 'aurelia-router';
import { PLATFORM } from 'aurelia-pal';

export class App {
  router: Router;

  configureRouter(config: RouterConfiguration, router: Router) {
    config.options.pushState = true;
    config.map([
      {
        route: ['', 'stadiums'],
        name: 'stadiums',
        moduleId: PLATFORM.moduleName('views/stadiums'),
        nav: true,
        title: 'Stadium'
      },
      {
        route: "stadium-poi",
        name: 'Stadium-Detail',
        moduleId: PLATFORM.moduleName('views/stadium-poi'),
        nav: true,
        title: 'Stadium-Detail'
      },
      {
        route: 'logout',
        name: 'logout',
        moduleId: PLATFORM.moduleName('views/logout'),
        nav: true,
        title: 'Logout'
      },
    ]);
    this.router = router;
  }
}
