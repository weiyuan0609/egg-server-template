import { Service } from 'egg';
import { IHomeName } from '../../interfaces/home';

/**
 * Test Service
 */
export default class Home extends Service {

  /**
   * 返回 egg 测试接口
   * @param name - 名称
   */
  public async getName(name: string): Promise<IHomeName> {
    this.ctx.logger.warn('debug info from service', name);
    if (name === 'error') {
      this.ctx.throw(520, '测试全局错误提示');
    }
    return { name };
  }
}
