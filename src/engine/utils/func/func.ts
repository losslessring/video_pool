
export function pipe(...fns: Function[]): any {
    return function piped(v: any): any {
      for (let fn of fns) {
        v = fn(v)
      }
      return v
    }
  }
  