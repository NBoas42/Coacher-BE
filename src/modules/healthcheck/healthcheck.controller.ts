import { Controller, Get } from '@nestjs/common';
import { HealthCheckService } from './healthcheck.service';

@Controller("health_check")
export class HealthCheckController {
  constructor(private readonly healthCheckService: HealthCheckService) {}

  @Get()
  getHello(): string {
    return this.healthCheckService.getStatus();
  }
}