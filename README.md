# hackernews-async-ts

[Hacker News](https://news.ycombinator.com/) showcase using typescript && egg

## QuickStart

### Development

```bash
$ npm i
$ npm run dev
$ open http://localhost:7001/
```

Don't tsc compile at development mode, if you had run `tsc` then you need to `npm run clean` before `npm run dev`.

### Deploy

```bash
$ npm run tsc
$ npm start
```

### Npm Scripts

- Use `npm run lint` to check code style
- Use `npm test` to run unit test
- se `npm run clean` to clean compiled js at development mode once

### Requirement

- Node.js 8.x
- Typescript 2.8+

### apidoc

https://apidocjs.com/#param-api-error

### 实现功能

- [x] 支持接口 apidoc 文档化  (支持展示 request model 和 response model)
- [x] 支持请求日志打印
- [x] 支持自定义异常错误 code
- [x] 支持接口返回数据格式化
- [x] 支持输入、输出参数校验
- [x] 单元测试、代码覆盖率
- [x] 支持断点调试 debug
- [x] 全面 TS
- [x] 安全
- [x] 模板渲染
- [x] 定时任务
- [x] 部署
- [x] 阿里性能监控
- [ ] socketio
- [ ] 支持鉴权，认证（待更新）
- [ ] 连接, 操作数据库（待更新）
