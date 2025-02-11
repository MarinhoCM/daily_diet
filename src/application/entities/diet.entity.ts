import { Snack } from "./snack.entity";

export class Diet {
    /**
     * 
     * @param _description 
     * @param _snacks 
     * @param _objective 
     */

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

    toString(): string {
        return `Diet {
          description: ${this.description},
          snacks: ${this.snacks.map(snack => snack.name)},
          objective: ${this.objective},
        }`;
    }
}