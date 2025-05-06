import { getChildrenAges, IChild } from "../../src/utils/search"

test("get children ages works ok", () => {
  const user = {
    name: 'Petr',
    age: 49,
    childrens: [
      {
        name: 'Nina',
        age: 25,
        childrens: [
          {
            name: 'Andrew',
            age: 3,
          },
          {
            name: 'Oleg',
            age: 1,
          },
        ],
      },
      {
        name: 'Alex',
        age: 22,
      },
    ],
  };
  expect(getChildrenAges(user)).toBe(49 + 25 + 3 + 1 + 22)
})