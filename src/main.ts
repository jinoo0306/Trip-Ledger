import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

// Swagger 관련 import 추가
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Swagger 설정 시작
  const config = new DocumentBuilder()
    .setTitle('Trip Ledger API')
    .setDescription('The Trip Ledger API description')
    .setVersion('v1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger-ui/index.html', app, document);

  // console.log('DB Host:', process.env.DB_HOST);
  console.log('DB User:', process.env.DB_USER);
  console.log('DB Password:', process.env.DB_PASSWORD);
  console.log('DB Name:', process.env.DB_NAME);

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(8080);
}
bootstrap();
