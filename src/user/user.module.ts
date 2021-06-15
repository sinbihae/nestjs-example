import { UserService } from './user.service';
import { Module } from '@nestjs/common';
import { UserController } from './user.controller';

@Module({
    imports: [],
    controllers: [UserController],
    providers: [UserService,],
})
export class UserModule { }
