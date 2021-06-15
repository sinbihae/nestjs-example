import { UserModule } from './user/user.module';
import { UserController } from './user/user.controller';
import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserService } from './user/user.service';
import { LoggerMiddleware } from './common/middleware/logger.middleware';

@Module({
  imports: [
    UserModule,],
  controllers: [
    AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
    .apply(LoggerMiddleware)
    .forRoutes('*')
  }
}
