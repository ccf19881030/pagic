export function unique(arr: any[]) {
  return Array.from(new Set(arr));
}

export function classnames(...args: (string | Record<string, boolean> | undefined)[]) {
  let classList: string[] = [];
  for (const arg of args) {
    if (typeof arg === 'string') {
      classList.push(arg);
    } else if (typeof arg !== 'undefined') {
      classList = [...classList, ...Object.keys(arg).filter((key) => arg[key])];
    }
  }
  return unique(classList).join(' ');
}

export const dateFormatter = {
  'YYYY-MM-DD': (date: Date | string) => {
    const d = new Date(date);
    const YYYY = d.getFullYear().toString();
    const MM = `0${d.getMonth() + 1}`.slice(-2);
    const DD = `0${d.getDate() + 1}`.slice(-2);
    return `${YYYY}-${MM}-${DD}`;
  }
};
