import React from 'react';

interface Cache<Value, Condition> {
  condition: Condition;
  value: Value;
}

export function useMemo<Value, Condition = any[]>(
  getValue: () => Value,
  condition: Condition,
  shouldUpdate: (prev: Condition, next: Condition) => boolean,
) {
  const cacheRef = React.useRef<Cache<Value, Condition>>({
    condition,
    value: getValue()
  });

  if (
    !('value' in cacheRef.current) ||
    shouldUpdate(cacheRef.current.condition, condition)
  ) {
    cacheRef.current.value = getValue();
    cacheRef.current.condition = condition;
  }

  return cacheRef.current.value;
}
