import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { RedocModule, RedocOptions} from 'nestjs-redoc'

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // add swagger module
  const options = new DocumentBuilder()
    .setTitle('Project Management Api')
    .setDescription('The Project Management API description')
    .setVersion('1.0')
    .addTag('pm')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  /* use Redoc
  const redocOptions: RedocOptions = {
    title: 'Hello Nest',
    logo: {
      url: 'https://redocly.github.io/redoc/petstore-logo.png',
      backgroundColor: '#F0F0F0',
      altText: 'PetStore logo'
    },
    sortPropsAlphabetically: true,
    hideDownloadButton: false,
    hideHostname: false,
    auth: {
      enabled: false,
      user: 'admin',
      password: '123'
    }
  };
  // Instead of using SwaggerModule.setup() you call this module
  await RedocModule.setup('/docs', app, document, redocOptions);
  */
 
  await app.listen(3000);
}
bootstrap();
