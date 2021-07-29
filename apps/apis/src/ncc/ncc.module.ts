import { HttpModule, Module } from '@nestjs/common';
import { NccController } from './ncc.controller';
import { NccService } from './ncc.service';

@Module({
  imports: [HttpModule],  //임포트된 모듈들의 리스트
  controllers: [],
  providers: [NccService],
  exports: [NccService] //다른 모듈에서 import할 때 설정해야함.
})
export class NccModule {}
