import { HttpModule, Module } from '@nestjs/common';
import { KoscomController } from './koscom.controller';
import { KoscomService } from './koscom.service';

@Module({
  imports: [HttpModule],
  controllers: [KoscomController],
  providers: [KoscomService],
})
export class KoscomModule {}
