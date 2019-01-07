function logDriverNames(drivers) {
  for (let i = 0; i < drivers.length; i++) {
    console.log(drivers[i].name)
  }
}

function logDriversByHometown(drivers, ht) {
  for (let i = 0; i < drivers.length; i++) {
    if (drivers[i].hometown === ht) {
      console.log(drivers[i].name);
    }
  }
}

function driversByRevenue(drivers) {
  return drivers.map(x => x).sort((a, b) => a.revenue - b.revenue);
}

function driversByName(drivers) {
  return drivers.slice().sort((d1, d2) => d1.name.localeCompare(d2.name));
}

function totalRevenue(drivers) {
  let total = 0;
  for (let i = 0; i < drivers.length; i++) {
    total += drivers[i].revenue;
  }
  return total;
}

function averageRevenue(drivers) {
  let total = 0;
  for (let i = 0; i < drivers.length; i++) {
    total += drivers[i].revenue;
  }
  return total / drivers.length;
}
