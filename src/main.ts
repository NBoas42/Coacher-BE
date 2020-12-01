import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const options = new DocumentBuilder()
    .setTitle('Coacher RestFul Api')
    .setDescription('Back End Restful Api to the coacher mobile application')
    .setVersion('1.0.0')
    .addTag('Coacher')
    .build();
    const document = SwaggerModule.createDocument(app, options);
    SwaggerModule.setup('api', app, document);
  await app.listen(3000);
}
bootstrap();
