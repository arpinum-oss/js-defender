export class Is {
  private value: any;

  constructor(value: any) {
    this.value = value;
  }

  public present(): boolean {
    return !this.absent();
  }

  public absent(): boolean {
    return this.value === null || this.value === undefined;
  }

  public aString(): boolean {
    return typeof this.value === 'string';
  }

  public aNumber(): boolean {
    return typeof this.value === 'number' && !Number.isNaN(this.value);
  }

  public aDate(): boolean {
    return Object.prototype.toString.call(this.value) === '[object Date]';
  }

  public anArray(): boolean {
    return Array.isArray(this.value);
  }

  public anObject(): boolean {
    return typeof this.value === 'object';
  }
}

export function is(value: any): Is {
  return new Is(value);
}
