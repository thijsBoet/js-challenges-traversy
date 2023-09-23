function analyzeCarMileage(cars) {
  const averageMileage = cars.reduce((total, car) => total + car.mileage, 0) / cars.length
  const totalMileage = cars.reduce((total, car) => total + car.mileage, 0)
  const highestMileageCar = cars.reduce((highest, car) => (car.mileage > highest.mileage ? car : highest), cars[0])
  const lowestMileageCar = cars.reduce((highest, car) => (car.mileage < highest.mileage ? car : highest), cars[0])

  return {
    averageMileage,
    highestMileageCar,
    lowestMileageCar,
    totalMileage
  }
}

module.exports = analyzeCarMileage;
