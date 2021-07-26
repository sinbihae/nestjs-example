import { HttpModule, Module } from '@nestjs/common';
import { NccController } from './ncc.controller';
import { NccService } from './ncc.service';

@Module({
  imports: [HttpModule],
  controllers: [NccController],
  providers: [NccService],
})
export class NccModule {}
