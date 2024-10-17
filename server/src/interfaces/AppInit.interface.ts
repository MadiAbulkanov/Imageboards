import { RequestHandler } from 'express';
import { Route } from './IRoute.interface';

export interface AppInit {
  port: number;
  middlewares: RequestHandler[];
  routes: Route[];
}
