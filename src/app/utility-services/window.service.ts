import { Injectable } from '@angular/core';

@Injectable()
export class WindowService {
    constructor() {
    }

    get() {
        return window;
    }
}