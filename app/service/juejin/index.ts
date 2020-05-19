import { Service } from 'egg';

/**
 * Test Service
 */
export default class Index extends Service {
  root_1: string;
  root_2: string;
  constructor(ctx: any) {
    super(ctx);
    this.root_1 = 'https://xiaoce-discount-storage-api-ms.juejin.im';
    this.root_2 = 'https://web-api.juejin.im';
  }

  /**
   * 获取页签
   */
  public async getInfo() {
    try {
      const result = await this.ctx.curl(`${this.root_1}/v1/getNewUserDiscountTicketDetail?uid=&client_id=&token=&src=web`, {
        dataType: 'json',
      });
      this.ctx.logger.info('juejin getinfo:' + JSON.stringify(result));
      return result.data;
    } catch (err) {
      this.ctx.throw(533, '获取页签错误');
    }
  }

  /**
   * 获取内容
   */
  public async postList() {
    const ctx = this.ctx;
    const result = await ctx.curl(`${this.root_2}/query`, {
      method: 'POST',
      headers: {
        'x-agent': 'Juejin/Web',
      },
      // 通过 contentType 告诉 HttpClient 以 JSON 格式发送
      contentType: 'json',
      data: {
        operationName: '',
        query: '',
        variables: {
          first: 20,
          after: '',
          order: 'POPULAR',
        },
        extensions: {
          query: { id: '21207e9ddb1de777adeaca7a2fb38030' },
        },
      },
      // 明确告诉 HttpClient 以 JSON 格式处理返回的响应 body
      dataType: 'json',
    });
    this.ctx.logger.info('juejin postList:' + JSON.stringify(result));
    const content = result.data.data.articleFeed.items.edges.map((item: any) => {
      return {
        id: item.node.id,
        content: item.node.content,
        title: item.node.title,
        name: item.node.user.username,
        createdAt: item.node.createdAt,
      };
    });
    return content;
  }

  /**
   * 根据 id 修改内容
   * @param id 内容 id
   */
  public async updateContentById(id: string, body: any) {
    this.ctx.logger.info('juejin update:' + id);
    return {
      pageId: id,
      id: body.id,
      name: body.name,
    };
  }

  /**
   * 根据 id 删除内容
   * @param id 内容 id
   */
  public async delContentById(id: string) {
    this.ctx.logger.info('juejin delete:' + id);
    return { pageId: id };
  }
}
