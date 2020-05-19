import { Controller } from 'egg';

export default class HomeController extends Controller {

  public response(data: object) {
    return {
      code: 200,
      msg: '请求成功',
      data,
    };
  }

  /**
   * @api {get} / egg接口名称
   * @apiDescription egg接口描述
   * @apiVersion 0.0.1
   * @apiName GetName
   * @apiGroup HOME
   * @apiParam {String} name 用户名
   * @apiSuccess {Object} data 消息体，请求失败消息体是null
   * @apiSuccess {String} data.name 用户姓名
   * @apiSuccess {Number} code 请求状态 200 请求成功
   * @apiSuccess {String} msg 错误消息
   * @apiSuccessExample {json} 出参示例:
   * {
        "code": 200,
        "msg": "",
        "data": {
          "name": "张三"
        }
      }
   * @apiError UserNotFound The <code>id</code> of the User was not found.
   * @apiErrorExample {json} Error-Response:
   * HTTP/1.1 404 Not Found
   * {
   *    "error": "UserNotFound"
   * }
   */
  public async index() {
    const { ctx } = this;
    const { query } = ctx;
    this.logger.info('current query: %j', query);
    const data = await ctx.service.home.index.getName(query.name);
    ctx.body = this.response(data);
  }
}
