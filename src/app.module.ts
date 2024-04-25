import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [UsersModule, MongooseModule.forRoot('mongodb+srv://Admin:98697358Je@cluster0.ms1qgcu.mongodb.net/')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
