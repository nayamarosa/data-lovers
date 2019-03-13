let arrayOrder = [];
let arraySum = [];

function showSelect(){
  let filterType = document.getElementsByName("filter");
  for (let filter of filterType){
    filter.addEventListener('click', function(){
      let filterValue = filter.value;
      let selectCategory = document.querySelector("#select-category");
      let selectYear = document.querySelector("#select-year");
      if (filterValue === "category"){
        selectCategory.classList.remove("hidden");
        selectYear.classList.add("hidden");
      } else {
        selectYear.classList.remove("hidden");
        selectCategory.classList.add("hidden");
      }
    });
  }
}

function getDataYear(selection){
  fetch('./data/injuries/injuries.json')
  .then(response => { return response.json()})
  .then(data => filterYear(data, selection));
}

function filterYear(data, yearSelected){
  data.filter(data => {
    if(data.Year === yearSelected){
      return data;
    }
  }).map(data => {
    cleanTable();
    arrayOrder = [];
    arraySum = [];
    
    arrayOrder.push({type:"Bicicleta", injuried:data["Total_Injured_Persons_Pedalcyclists"]})
    arrayOrder.push({type:"Caminhão", injuried:data["Total_Injured_Persons_Truck_Occupants_Large"]})
    arrayOrder.push({type:"Carro", injuried:data["Total_Injured_Persons_Passenger_Car_Occupants"]})
    arrayOrder.push({type:"Moto", injuried:data["Total_Injured_Persons_Motorcyclists"]})
    arrayOrder.push({type:"Ônibus", injuried:data["Total_Injured_Persons_Bus_Occupants"]})
    
    arraySum.push(data["Total_Injured_Persons_Pedalcyclists"]);
    arraySum.push(data["Total_Injured_Persons_Truck_Occupants_Large"]);
    arraySum.push(data["Total_Injured_Persons_Passenger_Car_Occupants"]);
    arraySum.push(data["Total_Injured_Persons_Motorcyclists"]);
    arraySum.push(data["Total_Injured_Persons_Bus_Occupants"]);
    
    arrayOrder.sort(alphabeticOrder);
    for (let item in arrayOrder){
      printTable(arrayOrder[item].type, arrayOrder[item].injuried);
    }
    printTableDetail(data)
  });
}

function getDataCategory(selection){
  fetch('./data/injuries/injuries.json')
  .then(response => { return response.json()})
  .then(data => filterCategory(data, selection));
}

function filterCategory(data, categorySelected){
  data.forEach(data =>{
    if(data["Year"] === "2011-01-04"){
      cleanTable();
      arrayOrder = [];
      arraySum = [];
      arrayOrder.push({type:"2011", injuried:data[categorySelected]})
      arraySum.push(data[categorySelected]);
      
      printTable("2011", data[categorySelected])
    }
    if(data["Year"] === "2012-01-04"){
      arrayOrder.push({type:"2012", injuried:data[categorySelected]})
      arraySum.push(data[categorySelected]);
      
      printTable("2012",  data[categorySelected])
    }
    if(data["Year"] === "2013-01-04"){
      arrayOrder.push({type:"2013", injuried:data[categorySelected]})
      arraySum.push(data[categorySelected]);
      
      printTable("2013",  data[categorySelected])
    }
    if(data["Year"] === "2014-01-04"){
      arrayOrder.push({type:"2014", injuried:data[categorySelected]})
      arraySum.push(data[categorySelected]);
      
      printTable("2014",  data[categorySelected])
    }
    if(data["Year"] === "2015-01-04"){
      arrayOrder.push({type:"2015", injuried:data[categorySelected]})
      arraySum.push(data[categorySelected]);
      
      printTable("2015",  data[categorySelected])
    }
  });
  printTableDetail(data);
}

function dataForm(){
  let form = document.querySelector("#data-form");
  form.addEventListener('submit', function(e){
    e.preventDefault();
    
    let filterType = document.querySelector("input[name='filter']:checked").value;
    if(filterType == "year"){
      let year = document.querySelector("input[name='select-year']:checked").value;
      getDataYear(year);
    } else if(filterType == "category"){
      let category = document.querySelector("input[name='select-category']:checked").value;
      getDataCategory(category);
    }
  });
}

function printTable(type, data){
  let tableBody = document.querySelector("#tbody-data");
  let tableItem = document.createElement('tr');
  let tdType = document.createElement('td');
  let tdData = document.createElement('td');
  
  tableBody.appendChild(tableItem);
  tableItem.appendChild(tdType);
  tableItem.appendChild(tdData);
  
  tdType.classList.add("td-type");
  tdData.classList.add("td-data");
  
  tdType.innerHTML = type;
  tdData.innerHTML = data;
}

function printTableDetail(){
  let tableHead = document.querySelector("#thead-type");
  let tableItemHead = document.createElement('tr');
  let tdName = document.createElement('td');
  
  tableHead.appendChild(tableItemHead);
  tdName.setAttribute("colspan", 2);
  tableItemHead.appendChild(tdName);

  tdName.classList.add("td-name");

  let printType = document.querySelector("input[name='filter']:checked").value;
  
  if(printType === "year"){
    let year = document.querySelector("input[name='select-year']:checked").value;
    tdName.innerHTML = 'NÚMERO DE ACIDENTES NO ANO ' + year.split('-',1);
  } else {
    let category = document.querySelector("input[name='select-category']:checked").value;
    tdName.innerHTML = 'NÚMERO DE ACIDENTES DE ' + rename(category);
  }

  let tableFoot = document.querySelector("#tfoot-sum");
  let tableItemFoot = document.createElement('tr');
  let tdTotal = document.createElement('td');
  let tdTotalSum = document.createElement('td');
  
  tableFoot.appendChild(tableItemFoot);
  tableItemFoot.appendChild(tdTotal);
  tableItemFoot.appendChild(tdTotalSum);

  tdTotal.classList.add("td-type");
  tdTotalSum.classList.add("td-data");
  
  const reducer = (num, currentValue) => num + currentValue;
  
  tdTotal.innerHTML = "TOTAL DE ACIDENTES"
  tdTotalSum.innerHTML = arraySum.reduce(reducer);
}

function cleanTable(){
  let tableHead = document.querySelector("#thead-type");
  let tableBody = document.querySelector("#tbody-data");
  let tableFooter = document.querySelector("#tfoot-sum");
  tableHead.innerHTML = '';
  tableBody.innerHTML = '';
  tableFooter.innerHTML = '';
}


function orderInjuries(){
  let ordering = document.getElementById("order-injuries");
  ordering.addEventListener('change', function(){
    let value = ordering.options[ordering.selectedIndex].value;
    if(value === "increasing"){
      arrayOrder.sort(increasingOrder);
      cleanTable();
      for (let item in arrayOrder){
        printTable(arrayOrder[item].type, arrayOrder[item].injuried);
      }
    } else if(value === "decreasing"){
      arrayOrder.sort(decreasingOrder);
      cleanTable();
      for (let item in arrayOrder){
        printTable(arrayOrder[item].type, arrayOrder[item].injuried);
      }
    } else {
      arrayOrder.sort(alphabeticOrder);
      cleanTable();
      for (let item in arrayOrder){
        printTable(arrayOrder[item].type, arrayOrder[item].injuried);
      }
    }
  });
}

function alphabeticOrder(a, b){
  if(a.type < b.type){
    return -1;
  }
}

function increasingOrder(a, b){
  if(a.injuried - b.injuried){
    return a.injuried - b.injuried;
  }
}

function decreasingOrder(a, b){
  if(b.injuried - a.injuried){
    return b.injuried - a.injuried;
  }
}

function rename(name){
  let newName = name.split('_')[3];
  if(newName === "Passenger"){
    return "CARRO";
  } else if(newName === "Bus"){
    return "ÔNIBUS";
  } else if(newName === "Truck"){
    return "CAMINHÃO";
  } else if(newName === "Motorcyclists"){
    return "MOTO";
  } else if(newName === "Pedalcyclists"){
    return "BICICLETA";
  }
}

orderInjuries()
dataForm()
showSelect()