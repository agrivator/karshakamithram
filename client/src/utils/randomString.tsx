export default (length: number): string =>
    Math.random()
        .toString(36)
        .substring(2, 2 + length);
