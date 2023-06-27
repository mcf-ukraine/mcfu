export const capitalize = <T extends string>(s: T) =>
  (s.charAt(0).toUpperCase() + s.slice(1)) as Capitalize<typeof s>;
