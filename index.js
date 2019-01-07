// Code your solution in this file!
function logDriverNames(arr){
  for (var i = 0; i < arr.length; i++) {
    console.log(arr[i].name)
  }
}

function logDriversByHometown(arr,loc){
  for(var i = 0; i < arr.length; i++) {
    if(arr[i].hometown === loc){
      console.log(arr[i].name)
    }
  }
}

function driversByRevenue(arr){
  return arr.map(x => x).sort((a,b) => a.revenue - b.revenue)
}

function driversByName(arr) {
  return arr.slice().sort((a,b) => a.name.localeCompare(b.name))
}

function totalRevenue(arr){
  return arr.map(x => x.revenue).reduce((a,cv) => a + cv)
}

function averageRevenue(arr){
  return arr.map(x => x.revenue).reduce((a,cv) => a + cv)/arr.length
}
