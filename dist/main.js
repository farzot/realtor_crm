"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const common_1 = require("@nestjs/common");
const cookieParser = require("cookie-parser");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const PORT = process.env.PORT || 3030;
    app.use(cookieParser());
    app.useGlobalPipes(new common_1.ValidationPipe());
    await app.listen(PORT || 3030, () => {
        console.log(`http://localhost:${PORT}`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map