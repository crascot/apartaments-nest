"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const swagger_1 = require("@nestjs/swagger");
const validation_pipe_1 = require("./pipes/validation.pipe");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.useGlobalPipes(new validation_pipe_1.ValidationPipe());
    app.enableCors({
        origin: 'http://localhost:3000',
        credentials: true,
    });
    app.use(cookieParser());
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Apartaments')
        .setDescription('Apartaments API for clients')
        .setVersion('1.0')
        .addTag('apartaments')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('swagger', app, document, {
        customSiteTitle: 'Apartaments API'
    });
    const PORT = process.env.PORT || 7000;
    await app.listen(PORT, () => console.log(`Server was started on port ${PORT}`));
}
bootstrap();
//# sourceMappingURL=main.js.map