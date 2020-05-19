import { Application } from 'egg';
import HomeRouter from './router/home';
import JuejinRouter from './router/juejin';
import ViewRouter from './router/page';

export default (app: Application) => {
  HomeRouter(app);
  JuejinRouter(app);
  ViewRouter(app);
};
