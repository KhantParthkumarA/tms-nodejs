export default (fn: any) => (...args: any) => Promise
  .resolve(fn(...args))
  .catch((error) => {
    throw new Error(error.message);
  });

