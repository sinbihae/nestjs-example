import {Injectable} from "@nestjs/common";

import { getRepository } from 'typeorm'
import {DemandCostEntity} from "./demand-cost.entity";
import {NccService} from "../../../../apis/src/ncc/ncc.service";



@Injectable()
export class DemandCostService {
    constructor(private nccService : NccService) {}

    async makeNccDaily() {
        //logic
        const nccResult = await this.nccService.getDemandCostList()
        console.log(nccResult);

        return 'Make Daily Task!!';
    }

    async insert(data: DemandCostEntity): Promise<DemandCostEntity> {
        const namespace = await this.findOneById(data.id)
        // if (namespace) {
        //     throw new ForbiddenError('이미 존재하는 정보입니다')
        // }

        return await getRepository(DemandCostEntity).save(data)
    }

    async findOneById(id: string): Promise<DemandCostEntity> {
        return await getRepository(DemandCostEntity).findOne({ id: id })
    }


}