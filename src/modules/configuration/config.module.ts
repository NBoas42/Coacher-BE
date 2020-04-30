import { Global, Module } from "@nestjs/common";
import { ConfigEnv } from "./config.env";
import { BuildConfigEnvFactory } from "./config.factory";

@Global()
@Module({
  providers: [
    {
      provide: ConfigEnv.name,
      useFactory: BuildConfigEnvFactory(),
    },
  ],
  exports: [ConfigEnv],
})
export class ConfigModule { }
