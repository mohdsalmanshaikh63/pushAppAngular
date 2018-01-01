export class AppUser {

    id: number;
    name = '';
    app = '';

    constructor(values: Object = {}) {
        Object.assign(this, values);
    }
}
