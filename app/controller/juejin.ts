import { Controller } from 'egg';

export default class JunjinController extends Controller {

  /**
   * @api {get} /juejin/v1/info 获取基本信息
   * @apiDescription 获取掘金用户基本信息
   * @apiVersion 0.0.1
   * @apiName GetInfo
   * @apiGroup 掘金
   * @apiSuccess {Object} data 消息体，请求失败消息体是null
   * @apiSuccess {Boolean} data.isNewUser 是否新用户
   * @apiSuccess {String} data.serverTimeAt 时间
   * @apiSuccess {Number} code 请求状态 200 请求成功
   * @apiSuccess {String} msg 错误消息
   * @apiSuccessExample {json} 出参示例:
   * {
        "code": 200,
        "msg": "",
        "data": {
          "isNewUser": "false",
          "serverTimeAt": "2020-05-15T15:15:58.000Z",
        }
      }
   */
  public async getInfo() {
    const { ctx } = this;
    ctx.body = await ctx.service.juejin.index.getInfo();
  }

  /**
   * @api {post} /juejin/v1/pages 获取文章列表
   * @apiDescription 获取文章列表信息
   * @apiVersion 0.0.1
   * @apiName GetPage
   * @apiGroup 掘金
   * @apiSuccess {Object} data 消息体，请求失败消息体是null
   * @apiSuccess {String} data.id id
   * @apiSuccess {String} data.content 内容
   * @apiSuccess {String} data.title 标题
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {String} data.createdAt 时间
   * @apiSuccess {Number} code 请求状态 200 请求成功
   * @apiSuccess {String} msg 错误消息
   * @apiSuccessExample {json} 出参示例:
   * {
        "code": 200,
        "msg": "",
        "data": {
          "id": "5ebd3b855188256d997cd3c1",
          "content": "在每个项目的",
          "title": "重新认识  package.json",
          "name": "前端小黑",
          "createdAt": "2020-05-15T03:18:32.066Z"
        }
      }
   */
  public async getPages() {
    const { ctx } = this;
    ctx.body = await ctx.service.juejin.index.postList();
  }

  /**
   * @api {put} /juejin/v1/page/:id 修改文章信息
   * @apiDescription 根据id修改文章信息
   * @apiVersion 0.0.1
   * @apiName putPaGe
   * @apiGroup 掘金
   * @apiParam {String} name 用户名
   * @apiParam {Number} id 用户ID
   * @apiParamExample {json} 入参示例:
   * {
        "name": "法外狂徒张三",
        "id": 0910923212
      }
   * @apiSuccess {Object} data 消息体，请求失败消息体是null
   * @apiSuccess {String} data.pageId page id
   * @apiSuccess {String} data.name 用户名
   * @apiSuccess {Number} data.id 用户id
   * @apiSuccess {Number} code 请求状态 200 请求成功
   * @apiSuccess {String} msg 错误消息
   * @apiSuccessExample {json} 出参示例:
   * {
        "code": 200,
        "msg": "",
        "data": {
          "pageId": '123',
          "name": "张三",
          "id": 213
        }
      }
   */
  public async putContentById() {
    const { ctx } = this;
    const id = ctx.params.id;
    const { request: { body } } = ctx;
    const errors = this.app.validator.validate({ name: 'string' }, body);
    if (errors) {
      this.ctx.logger.error('参数错误：' + errors);
      this.ctx.throw(599, '参数错误');
    }
    console.log('error', errors);
    ctx.body = await ctx.service.juejin.index.updateContentById(id, body);
  }

  /**
   * @api {delete} /juejin/v1/page/:id 删除文章信息
   * @apiDescription 根据id删除文章信息
   * @apiVersion 0.0.1
   * @apiName delPage
   * @apiGroup 掘金
   * @apiSuccess {Object} data 消息体，请求失败消息体是null
   * @apiSuccess {String} data.pageId page id
   * @apiSuccess {Number} code 请求状态 200 请求成功
   * @apiSuccess {String} msg 错误消息
   * @apiSuccessExample {json} 出参示例:
   * {
        "code": 200,
        "msg": "",
        "data": {
          "pageId": '123',
        }
      }
   */
  public async delContentById() {
    const { ctx } = this;
    const id = ctx.params.id;
    ctx.body = await ctx.service.juejin.index.delContentById(id);
  }
}
