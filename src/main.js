function btnEnable(btn){
  btn.disabled = false;
}

function btnDesable(btn){
  btn.disabled = true;
}

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
    printTable("Carro", data["Total_Injured_Persons_Passenger_Car_Occupants"]);
    printTable("Ônibus", data["Total_Injured_Persons_Bus_Occupants"]);
    printTable("Caminhão", data["Total_Injured_Persons_Truck_Occupants_Large"]);
    printTable("Moto", data["Total_Injured_Persons_Motorcyclists"]);
    printTable("Bicicleta", data["Total_Injured_Persons_Pedalcyclists"]);
  });
}

function getDataCategory(selection){
  fetch('./data/injuries/injuries.json')
  .then(response => { return response.json()})
  .then(data => filterCategory(data, selection));
}

function filterCategory(data, categorySelected){
  data.filter(data =>{
    return data;
  }).map(data =>{
    if(data["Year"] === "2011-01-04"){
      console.log(data)
      cleanTable();
      printTable("2011", data[categorySelected])
    }
    if(data["Year"] === "2012-01-04"){
      printTable("2012",  data[categorySelected])
    }
    if(data["Year"] === "2013-01-04"){
      printTable("2013",  data[categorySelected])
    }
    if(data["Year"] === "2014-01-04"){
      printTable("2014",  data[categorySelected])
    }
    if(data["Year"] === "2015-01-04"){
      printTable("2015",  data[categorySelected])
    }
  });
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
  let table = document.querySelector("#table-data");
  let tableItem = document.createElement('tr');
  let tdType = document.createElement('td');
  let tdData = document.createElement('td');
  
  tdType.classList.add("td-type");
  tdData.classList.add("td-data");
  
  table.appendChild(tableItem);
  tableItem.appendChild(tdType);
  tableItem.appendChild(tdData);
  
  tdType.innerHTML = type;
  tdData.innerHTML = data;
}

function cleanTable(){
  let table = document.querySelector("#table-data");
  table.innerHTML = '';
}

function orderInjuries(){
  let ordering = document.getElementById("order-injuries");
  ordering.addEventListener('change', function(){
    let value = ordering.options[ordering.selectedIndex].value;
    console.log(value)
    if(value === "increasing"){

    }
  });
}

function increasingOrder(a, b){
  if(a.length - b.length){
    return a - b;
  }
}

function decreasingOrder(a, b){
  if(b.length - a.length){
    return b - a;
  }
}

dataForm()
showSelect()