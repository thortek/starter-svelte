import { writable } from 'svelte/store';

interface User {
    firstName?: string;
    lastName?: string;
    email: string;
    }

const defaultUser: User = {} as User;
export const localUser = writable(defaultUser);