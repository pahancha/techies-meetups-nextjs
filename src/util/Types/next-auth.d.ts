import { UserType } from "./UserType"

declare module "next-auth" {
    interface session {
        user: UserType;
    }
}