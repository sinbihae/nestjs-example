import {Injectable} from "@nestjs/common";
import {AutomapperProfile, InjectMapper} from "@automapper/nestjs";
import {Mapper, MappingProfile} from "@automapper/types";
import {DemandCostEntity} from "./demand-cost.entity";
import {DemandCost, DemandCostResult} from "./demand-cost.dto";
import {mapFrom} from "@automapper/core";

@Injectable()
export class demandCostProfile extends AutomapperProfile {
    constructor(@InjectMapper() mapper: Mapper) {
        super(mapper);
    }

    mapProfile(): MappingProfile {
        return mapper => {
            mapper.createMap(DemandCost, DemandCostEntity)
                .forMember((destination) => destination.customerMemberId, mapFrom((source) => source.loginId))
                .forMember((destination) => destination.totalDemandAmount, mapFrom((source) => source.totalDemandAmount))
                .forMember((destination) => destination.billingDate, mapFrom((source) => source.demandMonth))
        };
    }
}