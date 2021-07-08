import { Controller, Delete, Get, Post, Put } from '@nestjs/common';
import { BillingService } from './billing.service';

@Controller('billing')
export class BillingController {
  constructor(private readonly billingService: BillingService) {}

  @Get('get')
  async getBilling() {
    return this.billingService.findAll();
  }

  @Post('create')
  async createBilling(): Promise<string[]> {
    return this.billingService.create();
  }

  @Put('update')
  async updateBilling(): Promise<string[]> {
    return this.billingService.update();
  }

  @Delete('delete')
  async deleteBilling() {
    return this.billingService.delete;
  }
}
