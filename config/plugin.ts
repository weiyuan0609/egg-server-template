import { EggPlugin } from 'egg';

const plugin: EggPlugin = {
  static: true,
  nunjucks: {
    enable: true,
    package: 'egg-view-nunjucks',
  },
  validate: { // 参数校验
    enable: true,
    package: 'egg-validate',
  },
};

export default plugin;
