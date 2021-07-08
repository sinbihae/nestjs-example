import { NestFactory } from '@nestjs/core';
import { BatchModule } from './batch.module';
import { BatchService } from './batch.service';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(BatchModule);
  const batchService = app.get(BatchService);
  console.log(batchService.getHello());
}
bootstrap();
