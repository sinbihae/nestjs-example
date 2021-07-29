import {Module} from "@nestjs/common";
import {DemandCostService} from "./demand-cost.service";
import {NccModule} from "../../../../apis/src/ncc/ncc.module";


@Module({
    imports: [NccModule],   //exports: [NccService]
    controllers: [],
    providers: [DemandCostService],
    exports: [DemandCostService]
})
export class DemandCostModule {}