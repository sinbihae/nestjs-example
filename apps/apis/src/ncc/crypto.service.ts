import * as CryptoJS from 'crypto-js';

const NEW_LINE = '\n';

function generateSignature(
  accessKey: string,
  secretKey: string,
  options: RequestOptions,
) {
  const hmac = CryptoJS.algo.HMAC.create(CryptoJS.algo.SHA256, secretKey);
  hmac.update(propertyMessage(options) + accessKey);

  const hash = hmac.finalize();
  return hash.toString(CryptoJS.enc.Base64);
}

interface RequestOptions {
  method: string;
  url: string;
  timestamp: string;
}

function propertyMessage(options: RequestOptions): string {
  return (
    options.method + ' ' + options.url + NEW_LINE + options.timestamp + NEW_LINE
  );
}

export default function makeSignatureHeaders(
  url: string,
  methodName: string,
  accessKey: string,
  secretKey: string,
  query?: string,
) {
  const timestamp = ~~(Date.now() / 1000) * 1000;
  return {
    'x-ncp-apigw-timestamp': timestamp.toString(),
    'x-ncp-iam-access-key': accessKey,
    'x-ncp-apigw-signature-v2': generateSignature(accessKey, secretKey, {
      method: methodName,
      url: url + '?' + query,
      timestamp: timestamp.toString(),
    }),
  };
}
