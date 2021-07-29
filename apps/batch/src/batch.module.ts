import { Module } from '@nestjs/common';
import { BatchController } from './batch.controller';
import { BatchService } from './batch.service';
import {AutomapperModule} from "@automapper/nestjs";
import {classes} from "@automapper/classes";
import {TypeOrmModule} from "@nestjs/typeorm";
import {TypeOrmService} from "./config/typeorm";
import {DemandCostService} from "./billing/demand-cost/demand-cost.service";
import {NccModule} from "../../apis/src/ncc/ncc.module";
import {KoscomModule} from "../../apis/src/koscom/koscom.module";
import {DemandCostModule} from "./billing/demand-cost/demand-cost.module";

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: TypeOrmService,
    }),
    AutomapperModule.forRoot({
      options: [{ name: 'classMapper', pluginInitializer: classes }],
      singular: true,
    }),
    NccModule, KoscomModule,
    DemandCostModule
  ],
  controllers: [BatchController],
  providers: [BatchService],
})
export class BatchModule {}
