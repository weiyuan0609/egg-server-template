import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/view/:id', controller.page.getView);
};
