import faker from "faker";

export const positions = [
  {
    id: 1,
    name: "cook",
    color: "blue",
  },
  {
    id: 2,
    name: "host",
    color: "red",
  },
  {
    id: 3,
    name: "waiter",
    color: "yellow",
  },
  {
    id: 4,
    name: "bartender",
    color: "orange",
  },
];

export const employees = new Array(5).fill(null).map(() => ({
  id: faker.random.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  avatar: `https://api.adorable.io/avatars/30/${faker.internet.email()}.png`,
  position: positions[faker.random.number() % 4],
}));

export const shifts = [
  {
    id: faker.random.uuid(),
    name: "first",
    date: "Mon Sep 28 2020",
    time: {
      start: "8am",
      end: "4pm",
    },
    employees: [employees[0]],
    position: employees[0].position,
  },
  {
    id: faker.random.uuid(),
    name: "second",
    date: "Tue Sep 29 2020",
    time: {
      start: "8am",
      end: "4pm",
    },
    employees: [employees[1]],
    position: employees[1].position,
  },
  {
    id: faker.random.uuid(),
    name: "third",
    date: "Mon Sep 28 2020",
    time: {
      start: "2pm",
      end: "10pm",
    },
    employees: [employees[2]],
    position: employees[2].position,
  },
  {
    id: faker.random.uuid(),
    name: "fourth",
    date: "Fri Sep 25 2020",
    time: {
      start: "8am",
      end: "4pm",
    },
    employees: [employees[2]],
    position: employees[2].position,
  },
  {
    id: faker.random.uuid(),
    name: "fifth",
    date: "Wed Sep 30 2020",
    time: {
      start: "1pm",
      end: "9pm",
    },
    employees: [employees[4]],
    position: employees[4].position,
  },
];
