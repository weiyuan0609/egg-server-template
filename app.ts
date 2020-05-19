import { Application } from 'egg';

export default (app: Application) => {
  app.beforeStart(async () => {
    await Promise.resolve('egg + ts');
  });

  // 自定义验证规则
  app.validator.addRule('jsonString', (_rule, value) => {
    try {
      JSON.parse(value);
    } catch (err) {
      return 'must be json string';
    }
  });
};
