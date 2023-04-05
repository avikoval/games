import { UserStatus } from "../enums/UserStatus";

export type User = {
    id: number;
    firstName?: string;
    lastName?: string;
    status: UserStatus;
    username?: string;
    email?: string;
    phoneNumber?: string;
};
