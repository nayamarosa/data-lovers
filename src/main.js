function dataForm(){
  let form = document.querySelector("#data-form");
  // let filterType = document.getElementsByName("filter");
  form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log('tá certo')
  });
}

function showSelect(){
  let filterType = document.getElementsByName("filter");
  for (let filter of filterType){
    filter.addEventListener('click', function(){
      let filterValue = filter.value;
      let selectCategory = document.getElementById("select-category");
      let selectYear = document.getElementById("select-year");
      console.log(filterValue)
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

function userSelection(selectionList){
  for (let select of selectionList){
    select.addEventListener('click', function(){
      let selectValue = select.value;
      console.log(selectValue);
      if(selectionList[0].name === "select-year"){
        getDataYear(selectValue);
        console.log("user year")
      } else {
        getDataCategory(selectValue);
        console.log("user category")
      }
    });
  }
}

function getDataYear(selection){
  fetch('./data/injuries/injuries.json')
  .then(response => { return response.json()})
  .then(data => filterYear(data, selection));
  console.log("ok data")
}

function filterYear(data, yearSelected){
  console.log("ok")
  console.log("filter")
  data.filter(data => {
    if(data.Year === yearSelected){
      return data;
    }
  }).map(data => {
    console.log("Carro " + data["Total_Injured_Persons_Passenger_Car_Occupants"]);
    console.log("Ônibus " + data["Total_Injured_Persons_Bus_Occupants"]);
    console.log("Caminhão " + data["Total_Injured_Persons_Truck_Occupants_Large"]);
    console.log("Moto " + data["Total_Injured_Persons_Motorcyclists"]);
    console.log("Bicicleta " + data["Total_Injured_Persons_Pedalcyclists"]);
  });
}

function getDataCategory(selection){
  fetch('./data/injuries/injuries.json')
  .then(response => { return response.json()})
  .then(data => filterCategory(data, selection));
  console.log("ok data")
}

function filterCategory(data, categorySelected){
  data.filter(data =>{
    return data;
  }).map(data =>{
    if(data["Year"] === "2011-01-04"){
      console.log("2011 " + data[categorySelected])
    }
    if(data["Year"] === "2012-01-04"){
      console.log("2012 " + data[categorySelected])
    }
    if(data["Year"] === "2013-01-04"){
      console.log("2013 " + data[categorySelected])
    }
    if(data["Year"] === "2014-01-04"){
      console.log("2014 " + data[categorySelected])
    }
    if(data["Year"] === "2015-01-04"){
      console.log("2015 " + data[categorySelected])
    }
  });
}

userSelection(document.getElementsByName("select-category"));
userSelection(document.getElementsByName("select-year"))
dataForm()
showSelect()