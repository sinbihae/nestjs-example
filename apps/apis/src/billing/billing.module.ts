import { BillingService } from './billing.service';
import { HttpModule, Module } from '@nestjs/common';
import { BillingController } from './billing.controller';

@Module({
  imports: [HttpModule],
  controllers: [BillingController],
  providers: [BillingService],
})
export class BillingModule {}
