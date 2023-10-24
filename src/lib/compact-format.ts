export default function compactFormat(value: number) {
  return new Intl.NumberFormat(undefined, {
    notation: 'compact',
  }).format(value);
}
