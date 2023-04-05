

export type ReadUsersParam = {
    searchString?: string;
    sort?: string[];
    pageSize?: number;
    pageNumber?: number;
    roleIds?: number[];
    email?: string;
};

export type UserCreateData = {
    firstName?: string;
    lastName?: string;
    email: string;
    username?: string;
    phoneNumber?: string;
    roleIds: number[];
};

