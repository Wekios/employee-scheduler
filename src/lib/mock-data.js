export const positions = [
  {
    id: 1,
    name: "cook",
    color: "blue",
  },
  {
    id: 2,
    name: "hostess",
    color: "red",
  },
];

export const employees = [
  {
    id: "1",
    firstName: "Veljko",
    lastName: "Blagojevic",
    avatar: "https://api.adorable.io/avatars/30/veljko.png",
    position: positions[0],
  },
  {
    id: "2",
    firstName: "Veljko",
    lastName: "Doppelganger",
    avatar: "https://api.adorable.io/avatars/30/veljko@dopple.png",
    position: positions[0],
  },
  {
    id: "3",
    firstName: "John",
    lastName: "Doe",
    avatar: "https://api.adorable.io/avatars/30/john@doe.png",
    position: positions[1],
  },
];

export const shifts = [
  {
    id: "1",
    name: "first",
    date: "Mon Sep 21 2020",
    employees: [employees[0]],
    position: positions[0],
  },
  {
    id: "2",
    name: "second",
    date: "Tue Sep 22 2020",
    employees: [employees[1]],
    position: positions[0],
  },
  {
    id: "3",
    name: "third",
    date: "Mon Sep 21 2020",
    employees: [employees[2]],
    position: positions[1],
  },
  {
    id: "4",
    name: "fourth",
    date: "Mon Sep 28 2020",
    employees: [employees[0], employees[1]],
    position: positions[1],
  },
];
