import { Module } from '@nestjs/common';
import {HealthCheckModule} from './healthcheck/healthcheck.module'
import {ConfigModule} from "./configuration/config.module"


@Module({
  imports: [
    HealthCheckModule,
    ConfigModule]
})
export class AppModule {}
