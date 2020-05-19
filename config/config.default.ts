import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export default (appInfo: EggAppInfo) => {
  const config = {} as PowerPartial<EggAppConfig>;

  // override config from framework / plugin
  // use for cookie sign key, should change to your own and keep security
  config.keys = 'eyJ0b2tlbiI6ImV5SmhZMk5sYzNOZmRHOXJaVzRpT2lKcFkzcHFlRmszUTBsd2NuSk5ja3BDSWl3aWNtVm1jbVZ6YUY5MGIydGxiaUk2SW5sRWFGcGlNVE5qZFV4ck4xUXlOVkVpTENKMGIydGxibDkwZVhCbElqb2liV0ZqSWl3aVpYaHdhWEpsWDJsdUlqb3lOVGt5TURBd2ZRPT0iLCJjbGllbnRJZCI6MTU4NzM0NzUzMjUzNCwidXNlcklkIjoiNThmMWFlZDA1YzQ5N2QwMDZjODQwMjJhIn0';

  // config.proxy = true;

  // add your egg config in here
  config.middleware = [];

  // add your special config in here
  const bizConfig = {
    sourceUrl: `https://github.com/eggjs/examples/tree/master/${appInfo.name}`,
  };

  // the return config will combines to EggAppConfig
  return {
    ...config,
    ...bizConfig,
    security: {
      csrf: {
        enable: false, // 关闭框架默认得csrf插件
      },
    },
    logger: {
      encoding: 'gbk', // 日志文件编码
      outputJSON: true, // 设置输出格式为JSON,方便日志监控系统分析
      level: 'DEBUG', // 日志级别  NONE 关闭
      // allowDebugAtProd: true, // 为了避免一些插件的调试日志在生产环境打印导致性能问题，生产环境默认禁止打印 DEBUG 级别的日志，如果确实有需求在生产环境打印 DEBUG 日志进行调试，需要打开 allowDebugAtProd 配置项。
    },
    middleware: [ 'errorHandler' ],
    // 只对 /api 前缀的 url 路径生效
    errorHandler: {
      match: '/',
    },
    validate: {
      // convert 会对入参进行转换，建议开启。举个例子，使用表单中默认的 submit 类型按钮提交表单时，提交过来的往往是序列化后的字符串，那些期望是数字类型的字段就会始终验证不过。而开启此项后，会对入参按希望的类型进行转换
      // convert: true,
      // widelyUndefined 开启后，会把空字符串，NaN,null 这些转成 undefined，将这些异常的数据进行了统一，方便后续处理
      widelyUndefined: true,
    },
    view: { // 模板
      defaultViewEngine: 'nunjucks',
      mapping: {
        '.tpl': 'nunjucks',
      },
    },
    alinode: {
      enable: true,
      // 从 `Node.js 性能平台` 获取对应的接入参数
      appid: '84914',
      secret: 'b8f43016dc2df95451a2f13bb4fe2145cccadeb4',
      logdir: '/tmp',
      error_log: [
        `${appInfo.baseDir}/logs/egg-test/egg-web.log`,
        `${appInfo.baseDir}/logs/egg-test/common-error.log`,
        `${appInfo.baseDir}/logs/egg-test/egg-agent.log`,
      ],
      packages: [ `${appInfo.baseDir}/package.json` ],
    },
  };
};
