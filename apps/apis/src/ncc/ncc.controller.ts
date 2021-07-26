import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { NccService } from './ncc.service';

@Controller('billing/ncc')
export class NccController {
  constructor(private readonly billingService: NccService) {}

  @Get('/getContractSummaryList')
  async getContractSummaryList() {
    return this.billingService.getContractSummaryList();
  }

  @Get('/getDemandCostList')
  async getDemandCostList() {
    return this.billingService.getDemandCostList();
  }

  @Get('/getProductDemandCostList')
  async getProductDemandCostList() {
    return this.billingService.getProductDemandCostList();
  }
}
