import { Snack } from "./snack.entity";

export class User {
    /**
     * Class (User):
     *  
     * Representação da entidade de usuário 
     *  
     * @param _name 
     * @param _username 
     * @param _email 
     * @param _snacks 
     */

    constructor(
        private _name: string,
        private _username: string,
        private _email: string,
        private _snacks: Snack[]
    ) {
        this._name = _name;
        this._username = _username;
        this._email = _email;
        this._snacks = _snacks;
    }


    get name() {
        return this._name;
    }

    get username() {
        return this._username;
    }

    get email() {
        return this._email;
    }

    get snacks() {
        return this._snacks;
    }

    set name(value: string) {
        this._name = value;
        return
    }

    set username(value: string) {
        this._username = value;
        return
    }

    set email(value: string) {
        this._email = value;
        return
    }

    set snacks(value: Snack[]) {
        this._snacks = value;
        return
    }
}