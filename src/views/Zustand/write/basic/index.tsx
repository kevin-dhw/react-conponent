// interface funcType {
//   newSet: () => any;
//   get: any;
//   store: any;
// }

function logMiddleware(func: any) {
  return function (set: any, get: any, store: any) {
    function newSet(...args: any[]) {
      console.log("调用了 set, 新的 state:", get());
      return set(...args);
    }
    return func(newSet, get, store);
  };
}
export default logMiddleware;
