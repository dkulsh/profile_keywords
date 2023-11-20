
export function divideSizeBy(array, divisor) {
    return array.map(item => ({
      ...item,
      size: item.size / divisor
    }));
}

