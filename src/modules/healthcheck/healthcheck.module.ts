import { Module } from '@nestjs/common';
import {HealthCheckController} from "./healthcheck.controller";
import {HealthCheckService} from "./healthcheck.service";
import {ConfigModule} from "../configuration/config.module";

@Module({
  imports: [ConfigModule],
  controllers: [HealthCheckController],
  providers: [HealthCheckService],
})
export class HealthCheckModule{}