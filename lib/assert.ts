import { is } from './is';

export class Assert {
  private name: string;
  private value: any;

  constructor(value: any, name: string) {
    this.value = value;
    this.name = name;
  }

  public toBePresent() {
    if (is(this.value).absent()) {
      throw new Error(`${this.name} must be present`);
    }
    return this;
  }

  public toBeAbsent() {
    if (is(this.value).present()) {
      throw new Error(`${this.name} must be absent`);
    }
    return this;
  }

  public toBeAString() {
    if (is(this.value).present() && !is(this.value).aString()) {
      throw new Error(`${this.name} must be a string`);
    }
    return this;
  }

  public toBeANumber() {
    if (is(this.value).present() && !is(this.value).aNumber()) {
      throw new Error(`${this.name} must be a number`);
    }
    return this;
  }

  public toBeADate() {
    if (is(this.value).present() && !is(this.value).aDate()) {
      throw new Error(`${this.name} must be a date`);
    }
    return this;
  }

  public toBeAnArray() {
    if (is(this.value).present() && !is(this.value).anArray()) {
      throw new Error(`${this.name} must be an array`);
    }
    return this;
  }

  public toBeAnObject() {
    if (is(this.value).present() && !is(this.value).anObject()) {
      throw new Error(`${this.name} must be an object`);
    }
    return this;
  }
}

export function assert(value: any, name = 'value'): Assert {
  return new Assert(value, name);
}
