// Custom ForEach function since .foreach wont work on NodeLists
export const ForEach = (arr: NodeListOf<Element>, callback: (element: Element, index: number) => void) => {
  const l: number = arr.length;
  for (let i: number = 0; i < l; i++) {
    callback(arr[i], i);
  }
};