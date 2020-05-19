import * as assert from 'assert';
import { Context } from 'egg';
import { app } from 'egg-mock/bootstrap';

describe('test/app/service/home/index.test.ts', () => {
  let ctx: Context;

  before(async () => {
    ctx = app.mockContext();
  });

  it('getName', async () => {
    const result = await ctx.service.home.index.getName('egg');
    assert(result.name === 'egg');
  });
});
