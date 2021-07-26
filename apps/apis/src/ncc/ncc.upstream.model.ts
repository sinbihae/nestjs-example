declare namespace namespace {
  export interface ContractType {
    code: string;
    codeName: string;
  }

  export interface ContractStatus {
    code: string;
    codeName: string;
  }

  export interface ContractSummaryList {
    loginId: string;
    regionCode: string;
    contractCount: number;
    contractType: ContractType;
    contractStatus: ContractStatus;
  }

  export interface GetContractSummaryListResponse {
    requestId: string;
    returnCode: string;
    returnMessage: string;
    totalRows: number;
    contractSummaryList: ContractSummaryList[];
  }

  export interface RootObject {
    getContractSummaryListResponse: GetContractSummaryListResponse;
  }
}
