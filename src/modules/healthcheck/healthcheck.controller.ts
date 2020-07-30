import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './healthcheck.service';
import { ApiOkResponse } from '@nestjs/swagger';

@Controller("health_check")
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  @ApiOkResponse({ description: "Returns Version Of the Back End System That Is Currently Running" })
  getHello(): string {
    return this.healthCheckService.getStatus();
  }
}