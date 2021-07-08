import { HttpService, Injectable } from '@nestjs/common';
import makeSignatureHeaders from '../common/crypto/crypto.service';

@Injectable()
export class BillingService {
  constructor(private httpService: HttpService) {}
  private readonly billing: string[] = [];

  async findAll() {
    console.log('Find Users');

    const host = 'https://billingapi.apigw-pub.fin-ntruss.com';
    const url = '/billing/v1/cost/getContractSummaryList';
    const query = 'responseFormatType=json&contractMonth=202103';
    return await this.httpService
      .get(host + url + '?' + query, {
        headers: makeSignatureHeaders(
          url,
          'GET',
          'A207A4599C0004C7F8ED',
          'EC23CA759652455250CAE65FA8C8620FC31545A9',
          query,
        ),
      })
      .toPromise()
      .then(
        (res) => {
          // Success
          console.log(res.data);
          return res.data;
        },
        (msg) => {
          // Error
          console.log(msg.request.url);
          console.log(msg.response.data);
          return msg.response.data;
        },
      );
  }

  create(): string[] {
    return this.billing;
  }

  update(): string[] {
    return this.billing;
  }

  delete() {
    console.log('Delete');
  }
}
