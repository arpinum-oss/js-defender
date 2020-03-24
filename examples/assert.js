"use strict";

const { assert } = require("../build");

try {
  assert("hello").toBeANumber();
} catch (e) {
  console.error("Error caught:", e.message);
}
