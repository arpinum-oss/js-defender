import { is } from './is';

describe('When testing if value is', () => {
  describe('present', () => {
    it('should be positive when value is neither null nor undefined', () => {
      expect(is(3).present()).toBeTruthy();
      expect(is('hello').present()).toBeTruthy();
      expect(is(0).present()).toBeTruthy();
      expect(is('').present()).toBeTruthy();
      expect(is({}).present()).toBeTruthy();
      expect(is([]).present()).toBeTruthy();
    });

    it('should be negative if value is null', () => {
      expect(is(null).present()).toBeFalsy();
    });

    it('should be negative if value is undefined', () => {
      expect(is(undefined).present()).toBeFalsy();
    });
  });

  describe('absent', () => {
    it('should be positive when value is null or undefined', () => {
      expect(is(null).absent()).toBeTruthy();
      expect(is(undefined).absent()).toBeTruthy();
    });

    it('should be negative if value is present', () => {
      expect(is(3).absent()).toBeFalsy();
    });
  });

  describe('a string', () => {
    it('should be positive when value is a string', () => {
      expect(is('hello').aString()).toBeTruthy();
      expect(is('').aString()).toBeTruthy();
    });

    it('should be negative when value is not a string', () => {
      expect(is(3).aString()).toBeFalsy();
    });
  });

  describe('a number', () => {
    it('should be positive when value is a number', () => {
      expect(is(3).aNumber()).toBeTruthy();
      expect(is(0).aNumber()).toBeTruthy();
    });

    it('should be negative when value is not a number', () => {
      expect(is('3').aNumber()).toBeFalsy();
      expect(is(Number.NaN).aNumber()).toBeFalsy();
    });
  });

  describe('a date', () => {
    it('should be positive when value is a date', () => {
      expect(is(new Date()).aDate()).toBeTruthy();
    });

    it('should be negative when value is not a date', () => {
      expect(is(3).aDate()).toBeFalsy();
    });
  });

  describe('an array', () => {
    it('should be positive when value is an array', () => {
      expect(is([1, 2]).anArray()).toBeTruthy();
      expect(is([]).anArray()).toBeTruthy();
    });

    it('should be negative when value is not an array', () => {
      expect(is(3).anArray()).toBeFalsy();
    });
  });

  describe('an object', () => {
    it('should be positive when value is an object', () => {
      expect(is({ test: 'ok' }).anObject()).toBeTruthy();
      expect(is({}).anObject()).toBeTruthy();
    });

    it('should be negative when value is not an object', () => {
      expect(is(3).anObject()).toBeFalsy();
    });
  });
});
