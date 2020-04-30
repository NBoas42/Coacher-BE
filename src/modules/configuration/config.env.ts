import { Expose, plainToClass} from "class-transformer";
import { IsOptional, IsString,validate } from "class-validator";

@Expose()
export class ConfigEnv {

  static async buildConfig(source = process.env): Promise<ConfigEnv> {
    const configEnv: ConfigEnv = plainToClass(ConfigEnv, source);
    const errors = await validate(configEnv, {
      whitelist: true,
      forbidUnknownValues: false,
    });
    if (errors.length) {
      throw new Error(`Config validation errors: ${errors}`);
    }
    return configEnv;
  }

  @IsOptional()
  @IsString()
  VERSION: string;

}
