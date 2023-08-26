type TInterVehicleBase = {
  make: string;
  model: string;
};

type TInterVehicleYear = {
  year: number;
};

type TInterVehicle = TInterVehicleBase & TInterVehicleYear;

const vehicle: TInterVehicle = {
  make: "Honda",
  model: "Accord",
  year: 2020,
};