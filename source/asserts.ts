import assert from "assert/strict";

export function or(a: () => void, b: () => void) {
  try {
    a();
  } catch(aErr) {
    try {
      b();
    } catch(bErr) {
      throw new assert.AssertionError({
        message: `Tried multiple asserts, but they all failed.\n${aErr}\n\n${bErr}`,
      });
    }
  }
}

export function isNullish(a: unknown): asserts a is null | undefined {
  if(a == null) return;
  throw new assert.AssertionError({
    message: "Expected a null or undefined value",
    actual: a,
    expected: null,
    operator: "==",
  });
}

export function isNotNullish<T extends any>(a: T): asserts a is Exclude<T, null | undefined> {
  if(a != null) return;
  throw new assert.AssertionError({
    message: "Expected a non-null, non-undefined value",
    actual: a,
  });
}

export function isEmptyArray(a: any[]) {
  if(a.length === 0) return true;
  throw new assert.AssertionError({
    message: "Expected an empty array",
    actual: a,
    expected: [],
  });
}

export function isNotEmptyArray(a: any[]) {
  if(a.length !== 0) return true;
  throw new assert.AssertionError({
    message: "Expected a non-empty array",
    actual: a,
  });
}
