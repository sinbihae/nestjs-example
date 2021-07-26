import { HttpService, Injectable } from '@nestjs/common';
import { NCC } from '../environment'
import makeSignatureHeaders from './crypto.service';

@Injectable()
export class NccService {
  constructor(private httpService: HttpService) {}
  private readonly billing: string[] = [];

  async getContractSummaryList() {
    console.log('계약 요약');

    const host = NCC.HOST;
    const method = 'GET';
    const url = '/billing/v1/cost/getContractSummaryList';
    const query = 'responseFormatType=json&contractMonth=202103';
    return await this.nccRequest(host, method, url, query);
  }

  async getDemandCostList() {
    console.log('청구 비용 조회');
    const host = NCC.HOST;
    const method = 'GET';
    const url = '/billing/v1/cost/getDemandCostList';
    const query = 'responseFormatType=json&startMonth=202106&endMonth=202106&isPartner=true';
    return await this.nccRequest(host, method, url, query);
  }

  async getProductDemandCostList() {
    console.log('상품 청구 비용 조회');
    const host = NCC.HOST;
    const method = 'GET';
    const url = '/billing/v1/cost/getProductDemandCostList';
    const query = 'startMonth=202106&endMonth=202106&isPartner=true&responseFormatType=json';
    return await this.nccRequest(host, method, url, query);
  }

  private nccRequest(host: string, method: string, url: string, query: string) {
    return this.httpService
        .get(host + url + '?' + query, {
          headers: makeSignatureHeaders(
              url,
              method,
              NCC.ACCESS_KEY,
              NCC.SECRET_KEY,
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
}
