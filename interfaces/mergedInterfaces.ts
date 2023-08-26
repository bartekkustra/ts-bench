interface IMergedVehicle {
  make: string;
  model: string;
}

interface IMergedVehicle {
  year: number;
}

// The IVehicle interface now effectively looks like:
// interface IVehicle {
//     make: string;
//     model: string;
//     year: number;
// }
