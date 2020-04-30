import { Injectable } from '@nestjs/common';
import {ConfigEnv} from "../configuration/config.env"

@Injectable()
export class HealthCheckService {

  constructor(
    private readonly ENV_VARS: ConfigEnv
  ) { }

  getStatus():any {
    return {
        message:`Running Version ${this.ENV_VARS.VERSION}`
    };
  }
}
