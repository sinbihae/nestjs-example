import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { KoscomService } from './koscom.service';

@Controller('billing/koscom')
export class KoscomController {
  constructor(private readonly billingService: KoscomService) {}

  @Get('/demand')
  async getDemand() {
    return this.billingService.getDemand();
  }

  @Get('/productDemand')
  async getProductDemand() {
    return this.billingService.getProductDemand();
  }
}
