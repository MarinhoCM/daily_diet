export class Snack {
  /**
   * 
   * @param _name
   * @param _datetime
   * @param _description
   * @param _from_diet
   */

  constructor(
    private _name: string,
    private _datetime: Date,
    private _description: string,
    private _from_diet: boolean
  ) {
    this._name = _name;
    this._datetime = _datetime;
    this._description = _description;
    this._from_diet = _from_diet;
  }

  public get name(): string {
    return this._name;
  }
  public set name(value: string) {
    this._name = value;
  }

  public get datetime(): Date {
    return this._datetime;
  }
  public set datetime(value: Date,) {
    this._datetime = value;
  }

  public get description(): string {
    return this._description;
  }
  public set description(value: string,) {
    this._description = value;
  }

  public get from_diet(): boolean {
    return this._from_diet;
  }
  public set from_diet(value: boolean) {
    this._from_diet = value;
  }

  toString(): string {
    return `Snack {
      name: ${this._name},
      datetime: ${this._datetime.toISOString()},
      description: ${this._description},
      fromDiet: ${this._from_diet}
    }`;
  }
}