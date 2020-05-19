import { Application } from 'egg';

export default (app: Application) => {
  const { controller, router } = app;

  router.get('/juejin/v1/info', controller.juejin.getInfo);
  router.post('/juejin/v1/pages', controller.juejin.getPages);
  router.put('/juejin/v1/page/:id', controller.juejin.putContentById);
  router.del('/juejin/v1/page/:id', controller.juejin.delContentById);
};
