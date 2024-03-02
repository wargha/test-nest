import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Board Game')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('boardGame')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);
  const PORT = process.env.PORT || 3100;
  await app.listen(PORT, () => {
    console.log(`running API in MODE: ${process.env.NODE_ENV} on PORT ${PORT}`);
  });
}
bootstrap();
