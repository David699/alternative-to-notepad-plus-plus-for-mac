// Chinese and Japanese need no word separator; alphabetic languages and Korean do.
export function headingSeparator(left: string, right: string): string {
  if (!left || !right || /\s$/.test(left) || /^\s/.test(right)) return ''
  const cjk = /[\u2e80-\u9fff\uff00-\uffef]/
  return cjk.test(left.slice(-1)) || cjk.test(right[0]) ? '' : ' '
}
