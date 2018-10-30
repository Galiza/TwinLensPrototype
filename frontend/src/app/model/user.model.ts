export interface User {
    id: number;
    email: string;
    password: string;
    name: string;
}

export interface Login {
    email: string;
    password: string;
}
