import {Injectable} from "@nestjs/common";
import { plainToClass } from 'class-transformer'
import { getRepository } from 'typeorm'
import {DemandCostEntity} from "./demand-cost.entity";
import {DemandCostResult, GetDemandCostListResponse, DemandAttribute, DemandCost} from "./demand-cost.dto";
import {NccService} from "../../../../apis/src/ncc/ncc.service";




@Injectable()
export class DemandCostService {
    constructor(private nccService : NccService) {}

    async makeNccDaily() {
        //logic
        let response = await this.nccService.getDemandCostList()
        let demandCostResult = plainToClass(DemandCostResult, response)

        for (const demandCost of demandCostResult.getDemandCostListResponse.demandCostList) {

            Object.assign(DemandCostEntity, demandCost)
            console.log(demandCost.loginId);
            console.log(demandCost.totalDemandAmount);
            // this.insert(Object.assign(DemandCostEntity, demandCost))
        }

        return 'Make Daily Task!!';
    }

    async insert(data: DemandCostEntity): Promise<DemandCostEntity> {
        // const namespace = await this.findOneById(data.id)
        // if (namespace) {
        //     throw new ForbiddenError('이미 존재하는 정보입니다')
        // }

        return await getRepository(DemandCostEntity).save(data)
    }

    async findOneById(id: string): Promise<DemandCostEntity> {
        return await getRepository(DemandCostEntity).findOne({ id: id })
    }


}