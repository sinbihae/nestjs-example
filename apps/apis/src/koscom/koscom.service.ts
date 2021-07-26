import { HttpService, Injectable } from '@nestjs/common';
import { KOSCOM } from '../environment'

@Injectable()
export class KoscomService {
  constructor(private httpService: HttpService) {}
  private readonly billing: string[] = [];


  async getDemand() {
    console.log('청구 비용 조회');
    const host = KOSCOM.HOST;
    const method = 'GET';
    const url = '/v1/billing/demand';
    const query = 'responseFormatType=json&startMonth=202106&endMonth=202106&isPartner=true';
    return await this.koscomRequest(host, method, url, query);
  }

  async getProductDemand() {
    console.log('상품 청구 비용 조회');
    const host = KOSCOM.HOST;
    const method = 'GET';
    const url = '/v1/billing/productDemand';
    const query = 'startMonth=202106&endMonth=202106&isPartner=true&responseFormatType=json';
    return await this.koscomRequest(host, method, url, query);
  }

  private koscomRequest(host: string, method: string, url: string, query: string) {
      console.log("----------------"+host)
    return this.httpService
        .get(host + url + '?' + query, {
          headers: {
              'x-Koscom-Access-Key':KOSCOM.ACCESS_KEY,
              'x-Koscom-secret-key':KOSCOM.SECRET_KEY
          },
        })
        .toPromise()
        .then(
            (res) => {
              // Success
                console.log('-----success')
              console.log(res.data);
              return res.data;
            },
            (msg) => {
              // Error
                console.log('-----error'+ msg.request.url)
              console.log(msg.request.url);
              console.log(msg.response.data);
              return msg.response.data;
            },
        );
  }
}
