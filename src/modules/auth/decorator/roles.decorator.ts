import { SetMetadata } from "@nestjs/common";

export const needsRoles = (...hasRoles:string[]) => SetMetadata('roles', hasRoles);