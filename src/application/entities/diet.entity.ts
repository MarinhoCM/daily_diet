import { Snack } from "./snack.entity";

export class Diet {

    constructor(
        private _description: string,
        private _snacks: Snack[],
        private _objective: string
    ) {
        this._description = _description
        this._snacks = _snacks
        this._objective = _objective
    }

    public get description(): string {
        return this._description;
    }

    public set description(value: string) {
        this._description = value;
    }

    public get snacks(): Snack[] {
        return this._snacks;
    }
    public set snacks(value: Snack[]) {
        this._snacks = value;
    }

    public get objective(): string {
        return this._objective;
    }

    public set objective(value: string) {
        this._objective = value;
    }
}