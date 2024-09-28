import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

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

  console.log('Database Host:', process.env.DATABASE_HOST);
  console.log('Database User:', process.env.DATABASE_USER);
  console.log('Database Password:', process.env.DATABASE_PASSWORD);
  console.log('Database Name:', process.env.DATABASE_NAME);

  await app.listen(8080);
}
bootstrap();
