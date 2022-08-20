import { assert } from "./assert";

describe("When asserting", () => {
  describe("with a custom name", () => {
    it("should use it for error messages", () => {
      const assertion = () => assert(null, "moon").toBePresent();

      expect(assertion).toThrow("moon must be present");
    });
  });

  describe("to be present", () => {
    it("should do nothing when value is set", () => {
      assert(3).toBePresent();
    });

    it("should throw if value is not set", () => {
      const assertion = () => assert(null).toBePresent();

      expect(assertion).toThrow("value must be present");
    });
  });

  describe("to be absent", () => {
    it("should do nothing when value is not set", () => {
      assert(null).toBeAbsent();
    });

    it("should throw if value is set", () => {
      const assertion = () => assert(3).toBeAbsent();

      expect(assertion).toThrow("value must be absent");
    });
  });

  describe("to be a string", () => {
    it("should do nothing when value is a string", () => {
      assert("hello").toBeAString();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeAString();
    });

    it("should require value to be a string", () => {
      const assertion = () => assert(3).toBeAString();

      expect(assertion).toThrow("value must be a string");
    });
  });

  describe("to be a boolean", () => {
    it("should do nothing when value is a boolean", () => {
      assert(true).toBeABoolean();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeABoolean();
    });

    it("should require value to be a boolean", () => {
      const assertion = () => assert("true").toBeABoolean();

      expect(assertion).toThrow("value must be a boolean");
    });
  });

  describe("to be a number", () => {
    it("should do nothing when value is a number", () => {
      assert(3).toBeANumber();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeANumber();
    });

    it("should require value to be a number", () => {
      const assertion = () => assert("3").toBeANumber();

      expect(assertion).toThrow("value must be a number");
    });
  });

  describe("to be a date", () => {
    it("should do nothing when value is a date", () => {
      assert(new Date()).toBeADate();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeADate();
    });

    it("should require value to be a date", () => {
      const assertion = () => assert(3).toBeADate();

      expect(assertion).toThrow("value must be a date");
    });
  });

  describe("to be a function", () => {
    it("should do nothing when value is a function", () => {
      assert(() => undefined).toBeAFunction();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeAFunction();
    });

    it("should require value to be a function", () => {
      const assertion = () => assert(3).toBeAFunction();

      expect(assertion).toThrow("value must be a function");
    });
  });

  describe("to be an array", () => {
    it("should do nothing when value is an array", () => {
      assert([1, 2]).toBeAnArray();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeAnArray();
    });

    it("should require value to be an array", () => {
      const assertion = () => assert(3).toBeAnArray();

      expect(assertion).toThrow("value must be an array");
    });
  });

  describe("to be an object", () => {
    it("should do nothing when value is an object", () => {
      assert({ test: "ok" }).toBeAnObject();
    });

    it("should do nothing when value is a absent", () => {
      assert(null).toBeAnObject();
    });

    it("should require value to be an object", () => {
      const assertion = () => assert(3).toBeAnObject();

      expect(assertion).toThrow("value must be an object");
    });
  });
});
