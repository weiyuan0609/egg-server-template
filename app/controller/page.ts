import { Controller } from 'egg';

export default class ViewController extends Controller {

  /**
   * 获取页面
   */
  public async getView() {
    const { ctx } = this;
    const id = ctx.params.id;
    await ctx.render('view.tpl', { id });
  }
}
