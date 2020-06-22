import { Module } from '@nestjs/common';
import { HealthCheckModule } from './healthcheck/healthcheck.module'
import { ConfigModule } from "./configuration/config.module"
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from './user/user.module';


@Module({
  imports: [
    ConfigModule,
    MongooseModule.forRoot(`mongodb+srv://nboas:${process.env.DB_PASSWORD}@cluster0-2c3qk.mongodb.net/`,{dbName:"coacher"}),
    HealthCheckModule,
    UserModule]
})
export class AppModule { }
