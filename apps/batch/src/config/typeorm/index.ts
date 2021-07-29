import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { TYPEORM } from '../../environments';
import {DemandCostEntity} from "../../billing/demand-cost/demand-cost.entity";

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  async createTypeOrmOptions(): Promise<TypeOrmModuleOptions> {
    return {
      ...TYPEORM,
      type: 'mysql',
      // entities: getMetadataArgsStorage().tables.map((tbl) => tbl.target),  //entity diretory 위치 변경
      entities: [DemandCostEntity],
      synchronize: true,
      autoLoadEntities: true,
      // keepConnectionAlive: true, //바로 종료되지 않아서 종료하도록 수정
      logging: true,
    }
  }
}
