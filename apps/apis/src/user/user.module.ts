import { UserService } from './user.service';
import { HttpModule, Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
  imports: [HttpModule],
  controllers: [UserController],
  providers: [UserService],
})
export class UserModule {}
