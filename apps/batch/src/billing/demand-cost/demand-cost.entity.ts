import {Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn} from "typeorm";
import {AutoMap} from "@automapper/classes";

@Entity({
    name: 'billing-demand-costs',
})
export class DemandCostEntity {
    @AutoMap()
    @PrimaryColumn()
    id: string

    // 고객사 정보 ID
    // 네이버 클라우드 : loginId
    @AutoMap()
    @Column()
    customerMemberId: string

    // 빌링 계약 청구 비용 ID
    @AutoMap()
    @Column('simple-array', { nullable: true })
    billingContractDemandCostIds: string[]

    // 청구년월
    // 네이버 클라우드 : demandMonth
    @AutoMap()
    @Column()
    billingDate: string

    // 사용금액
    // 네이버 클라우드 : useAmount
    @AutoMap()
    @Column()
    useAmount: number

    // 청구 금액
    // 네이버 클라우드 : totalDemandAmount
    @AutoMap()
    @Column()
    totalDemandAmount: number

    // 생성 일자
    @AutoMap()
    @CreateDateColumn()
    createdAt: Date

    // 갱신 일자
    @AutoMap()
    @UpdateDateColumn()
    updatedAt: Date
}