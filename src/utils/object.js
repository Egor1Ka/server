function transformObject(source, mapping) {
  const result = {};

  Object.entries(mapping).forEach(([key, rule]) => {
    let value;

    if (typeof rule === "string") {
      value = source[rule];
    } else if (typeof rule === "function") {
      value = rule(source);
    } else if (typeof rule === "object") {
      value = transformObject(source, rule);
    }

    result[key] = value;
  });

  return result;
}

function deepMerge(target, source) {
  Object.entries(source).forEach(([key, value]) => {
    if (
      value !== null &&
      typeof value === "object" &&
      !Array.isArray(value) &&
      typeof target[key] === "object" &&
      target[key] !== null
    ) {
      deepMerge(target[key], value);
    } else {
      target[key] = value;
    }
  });
  return target;
}

export { transformObject, deepMerge };
