let Koa = require('koa');
let appRouter = require('koa-router');

const app = new Koa();
let router = new appRouter();

let items = require('./data/items.json')

router.get('/items',async ctx=>{
    ctx.body = items;
})

app.use(router.routes());
app.listen(4444);