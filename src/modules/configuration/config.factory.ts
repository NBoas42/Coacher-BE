import { ConfigEnv } from "./config.env";

export const BuildConfigEnvFactory = (overrides: object = {}) => async () =>
  ConfigEnv.buildConfig({ ...process.env, ...overrides });
