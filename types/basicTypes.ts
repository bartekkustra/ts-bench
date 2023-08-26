type TBasicPerson = {
  firstName: string;
  lastName: string;
  age: number;
};

type TBasicAddress = {
  street: string;
  city: string;
  country: string;
  postalCode: string;
};

const person: TBasicPerson = {
  firstName: "John",
  lastName: "Doe",
  age: 25,
};

const address: TBasicAddress = {
  street: "Main St",
  city: "Boston",
  country: "USA",
  postalCode: "1234",
};
