type TExtPerson = {
  firstName: string;
  lastName: string;
};

type TExtEmployee = TExtPerson & {
  employeeId: number;
  department: string;
};

type TExtManager = TExtEmployee & {
  subordinates: TExtEmployee[];
};

const manager: TExtManager = {
  firstName: "John",
  lastName: "Doe",
  employeeId: 1234,
  department: "Sales",
  subordinates: [
    {
      firstName: "Jane",
      lastName: "Doe",
      employeeId: 5678,
      department: "Sales",
    },
  ],
};