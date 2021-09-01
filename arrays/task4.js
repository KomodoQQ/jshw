const cities = [
  {
    city: 'New-York',
    population: 1000000
  },
  {
    city: 'Kyiv',
    population: 230000
  },
  {
    city: 'Warsaw',
    population: 195000
  },
  {
    city: 'Paris',
    population: 403434
  },
  {
    city: 'Budapest',
    population: 326154
  }
];
console.log(
  cities
    .filter((city) => {
      return city.population > 200000;
    })
    .sort((a, b) => {
      return a.population - b.population;
    })
    .map((obj) => {
      return obj.city;
    })
    .join(',')
);
