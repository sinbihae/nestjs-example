import { NestFactory } from '@nestjs/core';
import { BatchModule } from './batch.module';
import { BatchService } from './batch.service';
import { DemandCostService } from './billing/demand-cost/demand-cost.service'

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(BatchModule);

  const batchService = app.get(BatchService);
  console.log(batchService.getHello());

  //ncc Total cost
  const demandCostService = app.get(DemandCostService);
  console.log(demandCostService.makeNccDaily());

  //kt Total cost

  //nhn Total cost


  await app.close();
}
bootstrap();
