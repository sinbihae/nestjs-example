import { HttpService, Injectable } from '@nestjs/common';
import makeSignatureHeaders from '../common/crypto/crypto.service';

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}
  private readonly users: string[] = [];

  async findAll(): Promise<string[]> {
    console.log('Find Users');

    const host = 'https://billingapi.apigw-pub.fin-ntruss.com';
    const url = '/billing/v1/cost/getContractSummaryList';
    const query = 'responseFormatType=json&contractMonth=202103';
    const response = await this.httpService
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
        },
        (msg) => {
          // Error
          console.log(msg.request.url);
          console.log(msg.response.data);
        },
      );

    // console.log(response.data);
    return this.users;
  }

  create(): string[] {
    console.log('Create Users');
    return this.users;
  }

  update(): string[] {
    console.log('Update Users');
    return this.users;
  }

  delete() {
    console.log('Delete Users');
  }
}