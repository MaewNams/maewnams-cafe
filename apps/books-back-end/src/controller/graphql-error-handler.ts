export function graphQLErrorHandler(err) {
  const errType = err.name;
  switch (errType) {
    case 'TypeError':
      throw new Error(`[${errType}]Message: ${err.message}`);
    default:
      throw new Error(
        `[Unexpected Internal Error]Message: ${err.message ? err.message : ''}`
      );
  }
}
