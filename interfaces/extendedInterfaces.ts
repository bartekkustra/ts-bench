interface IExtPerson {
  firstName: string;
  lastName: string;
}

interface IExtEmployee extends IExtPerson {
  employeeId: number;
  department: string;
}

interface IExtManager extends IExtEmployee {
  subordinates: IExtEmployee[];
}

const manager: IExtManager = {
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