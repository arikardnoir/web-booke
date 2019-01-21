import { Injectable } from "@angular/core";

@Injectable()

export class Storage {

    storage = window.localStorage;

    constructor() {}

    getItem(key) {
        this.storage.getItem(key);
    }

    setItem(key, value) {
        this.storage.setItem(key, value);
    }

    removeItem(key) {
        this.storage.removeItem(key);
    }

}