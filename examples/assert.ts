import { assert } from "../lib";

try {
  assert("hello").toBeANumber();
} catch (e) {
  console.error("Error caught:", e);
}
