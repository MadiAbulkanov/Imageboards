import express from 'express';
import { Application, RequestHandler } from 'express';
import { AppInit } from './interfaces/AppInit.interface';
import { Route } from './interfaces/IRoute.interface';

class App {
  public app: Application;
  public port: number;
  constructor(appInit: AppInit) {
    this.app = express();
    this.port = appInit.port;

    this.initAssets();
    this.initMiddlewares(appInit.middlewares);
    this.initRoutes(appInit.routes);
  }
  private initMiddlewares(middlewares: RequestHandler[]) {
    middlewares.forEach((middleware) => {
      this.app.use(middleware);
    });
  }
  private initRoutes(routes: Route[]) {
    routes.forEach((route) => {
      this.app.use(route.path, route.router);
    });
  }
  private initAssets() {
    this.app.use(express.json());
    this.app.use(express.static('public'));
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening  on the http://localhost:${this.port}`);
    });
  }
};

export default App;