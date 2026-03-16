type ValidatorMap = Record<string, unknown>;

export function forbidExtraProps<T extends ValidatorMap>(
  propTypes: T,
): T & { isRequired: T } {
  const validator = propTypes as T & { isRequired: T };
  validator.isRequired = propTypes;
  return validator;
}

export default {
  forbidExtraProps,
};
