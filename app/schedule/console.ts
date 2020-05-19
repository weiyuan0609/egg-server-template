/**
 * 定时任务
 * https://eggjs.org/zh-cn/basics/schedule.html#%E5%85%B6%E4%BB%96%E5%8F%82%E6%95%B0
 */
const Subscription = require('egg').Subscription;

class LoggerNumber extends Subscription {

  constructor(ctx: any) {
    super(ctx);
    this.number = 0;
  }

  // 通过 schedule 属性来设置定时任务的执行间隔等配置
  //  *    *    *    *    *    *
  //  ┬    ┬    ┬    ┬    ┬    ┬
  //  │    │    │    │    │    |
  //  │    │    │    │    │    └ day of week (0 - 7) (0 or 7 is Sun)
  //  │    │    │    │    └───── month (1 - 12)
  //  │    │    │    └────────── day of month (1 - 31)
  //  │    │    └─────────────── hour (0 - 23)
  //  │    └──────────────────── minute (0 - 59)
  //  └───────────────────────── second (0 - 59, optional)
  public static get schedule() {
    return {
      // cron: '0 0 */3 * * *', // 每三小时准点执行一次
      interval: '3s', // 3 秒间隔   eg: 1m 1分钟
      type: 'all', // 指定所有的 worker 都需要执行
    };
  }

  // subscribe 是真正定时任务执行时被运行的函数
  public async subscribe() {
    this.ctx.logger.info('定时任务：', this.number);
  }
}

module.exports = LoggerNumber;
