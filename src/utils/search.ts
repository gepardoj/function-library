export interface IChild {
  name: string,
  age: number,
  children?: IChild[],
}

export function getChildrenAges(child: IChild): number {
  return child.age + (child.children?.reduce((acc, ch) => acc + getChildrenAges(ch), 0) ?? 0);
}