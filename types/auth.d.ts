


export interface LoginFormdataProps {
    username: string,
    password: string
}




export interface User {
    _id: string;
    activeHistory: any[];
    blockedByAdmin: boolean;
    createdAt: string;
    email: string;
    friendRequests: any[];
    friends: any[];
    groups: any[];
    mobile: number;
    name: string;
    password: string;
    sendRequests: any[];
    sessions: any[];
    status: boolean;
    updatedAt: string;
    username: string;
    __v: number;
}
