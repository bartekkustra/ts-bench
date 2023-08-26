interface IBasicPerson {
  firstName: string;
  lastName: string;
  age: number;
}

interface IBasicAddress {
  street: string;
  city: string;
  country: string;
  postalCode: string;
}

const person: IBasicPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const address: IBasicAddress = {
  street: "Main St",
  city: "Boston",
  country: "USA",
  postalCode: "1234",
};
