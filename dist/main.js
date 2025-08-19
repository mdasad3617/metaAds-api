"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const common_1 = require("@nestjs/common");
const app_module_1 = require("./app.module");
require("reflect-metadata");
const swagger_1 = require("@nestjs/swagger");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.enableCors({
        origin: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        credentials: true,
    });
    const swaggerConfig = new swagger_1.DocumentBuilder()
        .setTitle('Meta Ads AI API')
        .setDescription('Backend API for Meta Ads AI Generator with comprehensive authentication and Meta Ads API integration')
        .setVersion('1.0.0')
        .addBearerAuth({
        type: 'http',
        scheme: 'bearer',
        bearerFormat: 'JWT',
        name: 'Authorization',
        description: 'Enter JWT token',
        in: 'header',
    }, 'access-token')
        .addTag('Authentication', 'User authentication and token management')
        .addTag('Meta Ads API', 'Meta/Facebook Ads API integration')
        .addTag('Users', 'User management')
        .addTag('AI', 'AI-powered ad generation')
        .addTag('Ads', 'Ad management')
        .addServer(process.env.API_URL || 'http://localhost:3001', 'Development server')
        .build();
    app.useGlobalPipes(new common_1.ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
    }));
    app.setGlobalPrefix('api');
    const document = swagger_1.SwaggerModule.createDocument(app, swaggerConfig);
    swagger_1.SwaggerModule.setup('swagger', app, document);
    await app.listen(3002);
    console.log(`Server is running on port ${3001}`);
}
bootstrap();
//# sourceMappingURL=main.js.map