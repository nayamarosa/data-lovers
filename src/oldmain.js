let category;
let year;

function getCategory(){
  let categorySelect = document.getElementsByName("categories");
  for (let i = 0; i < categorySelect.length; i++){
    categorySelect[i].addEventListener('click', function(){
      category = categorySelect[i].value;
      console.log(category)
    });
  }
}

function getYear(){
  let yearSelect = document.getElementsByName("years");
  for (let i = 0; i < yearSelect.length; i++){
    yearSelect[i].addEventListener('click', function(){
      year = yearSelect[i].value;
      console.log(year)   
    });
  }
}

async function getData(){
  fetch('./data/injuries/injuries.json').then(response => {
    return response.json();
  }).then(data => {
    
    function filterYear(){
      data.filter(function(years){
        if (year === "all-years"){
          let allYears = (years["Year"] >= "2000-01-04" && years["Year"] <= "2015-01-04");
          return allYears;
        } else if (year === "year-00-04"){
          let firstYearInterval = (years["Year"] >= "2000-01-04" && years["Year"] <= "2004-01-04");
          return firstYearInterval;
        } else if (year === "year-05-09"){
          let secondYearInterval = (years["Year"] >= "2005-01-04" && years["Year"] <= "2009-01-04");
          return secondYearInterval;
        } else if (year === "year-10-15"){
          let thridYearInterval = (years["Year"] >= "2010-01-04" && years["Year"] <= "2015-01-04");
          return thridYearInterval;
        } 
      }).map(filterCategoryInjuries);
    }
    
    function filterCategoryInjuries(injuries){
      if (category === "car"){
        let carInjurie = (injuries.Total_Injured_Persons_Passenger_Car_Occupants);
        return carInjurie;
      } else if (category === "bus"){
        let busInjurie = (injuries["Total_Injured_Persons_Bus_Occupants"]);
        return busInjurie;
      } else if (category === "truck"){
        let truckInjurie = (injuries["Total_Injured_Persons_Truck_Occupants_Large"]);
        return truckInjurie;
      } else if (category === "moto"){
        let motoInjurie = (injuries["Total_Injured_Persons_Motorcyclists"]);
        return motoInjurie;
      } else if (category === "bike"){
        let bikeInjurie = (injuries["Total_Injured_Persons_Pedalcyclists"]);
        return bikeInjurie;
      }
    }
    
    function btnReturn(){
      let continueBtn = document.querySelector("#continue");
      continueBtn.addEventListener('click', function(){
        showInjuries();
      });
    }
    
    function showInjuries(){
      let jsonData = document.querySelector("#json-data");
      jsonData.innerHTML = `
      ${data.filter(filterYear).map((injurie) => `
      <tr class="table-item">
      <td>lalala</td>
      <td>${injurie.year}</td>
      <td>${injurie.category}</td>
      </tr>
      `).join("")}
      `
      
      console.log(data.filter(filterYear))
    }
    
    
    
    // console.log(data);
    getCategory()
    getYear()
    filterCategoryInjuries()
    // filterYear()
    btnReturn()
  })
}

getData()


function pega(){
  fetch("./injuries.json")
  .then(response => response.json())
  .then(data => air(data));
}

function air(data){
  data.filter(data =>{
    if(data.Year === year){
      return data;
    }
  }).map(data => {
    console.log(data[category]);
    print(data);
  })
}