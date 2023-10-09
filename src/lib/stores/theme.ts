import {writable} from 'svelte/store';
import { browser } from '$app/environment';

const defaultValue = 'wintry';
const initialValue = browser ? localStorage.getItem('theme') : defaultValue;

export const theme = writable(initialValue);

theme.subscribe(value => {
    if (browser) {
        localStorage.setItem('theme', value as string);
    }
});