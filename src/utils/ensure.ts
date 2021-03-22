// https://stackoverflow.com/questions/54738221/typescript-array-find-possibly-undefind
// make Typescript know that you ensure that the function pass in argument param is not undefined

export function ensure<T>(
  argument: T | undefined | null,
  message: string = "This value was promised to be there."
): T {
  if (argument === undefined || argument === null) {
    throw new TypeError(message);
  }

  return argument;
}
