import { is } from "./is";

export class Assert {
  private name: string;
  private value: unknown;

  constructor(value: unknown, name: string) {
    this.value = value;
    this.name = name;
  }

  public toBePresent(): Assert {
    if (is(this.value).absent()) {
      throw new Error(`${this.name} must be present`);
    }
    return this;
  }

  public toBeAbsent(): Assert {
    if (is(this.value).present()) {
      throw new Error(`${this.name} must be absent`);
    }
    return this;
  }

  public toBeAString(): Assert {
    if (is(this.value).present() && !is(this.value).aString()) {
      throw new Error(`${this.name} must be a string`);
    }
    return this;
  }

  public toBeABoolean(): Assert {
    if (is(this.value).present() && !is(this.value).aBoolean()) {
      throw new Error(`${this.name} must be a boolean`);
    }
    return this;
  }

  public toBeANumber(): Assert {
    if (is(this.value).present() && !is(this.value).aNumber()) {
      throw new Error(`${this.name} must be a number`);
    }
    return this;
  }

  public toBeADate(): Assert {
    if (is(this.value).present() && !is(this.value).aDate()) {
      throw new Error(`${this.name} must be a date`);
    }
    return this;
  }

  public toBeAFunction(): Assert {
    if (is(this.value).present() && !is(this.value).aFunction()) {
      throw new Error(`${this.name} must be a function`);
    }
    return this;
  }

  public toBeAnArray(): Assert {
    if (is(this.value).present() && !is(this.value).anArray()) {
      throw new Error(`${this.name} must be an array`);
    }
    return this;
  }

  public toBeAnObject(): Assert {
    if (is(this.value).present() && !is(this.value).anObject()) {
      throw new Error(`${this.name} must be an object`);
    }
    return this;
  }
}

export function assert(value: unknown, name = "value"): Assert {
  return new Assert(value, name);
}
