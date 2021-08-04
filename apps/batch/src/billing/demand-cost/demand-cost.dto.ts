// declare module DemandCostDto {
    export class DemandAttribute {
        code: string;
        codeName: string;
    }

    export class DemandCost {
        loginId: string;
        demandMonth: string;
        demandNo: string;
        integrationDemandNo: string;
        demandAttribute: DemandAttribute;
        useAmount: number;
        promiseDiscountAmount: number;
        promotionDiscountAmount: number;
        etcDiscountAmount: number;
        customerDiscountAmount: number;
        productDiscountAmount: number;
        creditDiscountAmount: number;
        under100DiscountAmount: number;
        under1000DiscountAmount: number;
        coinUseAmount: number;
        defaultAmount: number;
        thisMonthDemandAmount: number;
        thisMonthVatRatio: number;
        thisMonthVatAmount: number;
        thisMonthAmountIncludingVat: number;
        totalDemandAmount: number;
        isPaidUp: boolean;
        paidUpDate: Date;
        overduePlusAmount: number;
        overdueRatio: number;
        thisMonthOverdueAmount: number;
        beforeMonthDemandNo: string;
        totalOverdueAmount: number;
        writeDate: Date;
    }

    export class GetDemandCostListResponse {
        requestId: string;
        returnCode: string;
        returnMessage: string;
        totalRows: number;
        demandCostList: DemandCost[];
    }

    export class DemandCostResult {
        getDemandCostListResponse: GetDemandCostListResponse;
    }
// }