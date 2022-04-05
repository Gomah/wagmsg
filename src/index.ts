export const messages = [
  'GM 👋',
  'GMI 🤙',
  'WAGMI 💫',
  'Looks rare! 👀',
  'To the moon! 🌕',
  'ATH 📈',
  "Flip me, I'm famous 🤑",
  'Probably nothing 🤷',
] as const;

type ElementType<T extends ReadonlyArray<unknown>> = T extends ReadonlyArray<
  infer ElementType
>
  ? ElementType
  : never;

export function wagmsg(): ElementType<typeof messages> {
  return messages[Math.floor(Math.random() * messages.length)];
}
