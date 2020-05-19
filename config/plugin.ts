import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  nunjucks: { // 模板
    enable: true,
    package: 'egg-view-nunjucks',
  },
  validate: { // 参数校验
    enable: true,
    package: 'egg-validate',
  },
  alinode: { // 阿里 node 性能平台
    enable: true,
    package: 'egg-alinode',
  },
};

export default plugin;
