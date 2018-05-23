const Koa = require('koa');
const Router = require('koa-router');
const multer = require('koa-multer');
const vision = require('@google-cloud/vision');
const logger = require('koa-logger');
const config = require('./config')

const PORT = process.env.PORT || 4000;
const upload = multer({ dest: 'uploads/' });

const app = new Koa();
const router = new Router();

app
    .use(router.routes())
    .use(router.allowedMethods());
app.use(logger());
app.listen(PORT);

console.log(`Server listen on port ${PORT}`);

const client = new vision.ImageAnnotatorClient(config);

router.post('/check', upload.single('image'), async ctx => {
    const file = ctx.req.file.path;
    try {
        const request = await client.labelDetection(file)
        ctx.body = request[0].labelAnnotations
    } catch (error) {
        ctx.throw(500, err)
    }
});
