export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
    isAdmin?: boolean;
}

export interface Login {
    email: string;
    password: string;
}

export interface Album {
    id;
    photo: string;
}
