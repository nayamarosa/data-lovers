let category;
let year;

function getCategory(){
  let categorySelect = document.getElementsByName("categories");
  for (let i = 0; i < categorySelect.length; i++){
    categorySelect[i].addEventListener('click', function(){
      let category = categorySelect[i].value;
      console.log(category)
    });
  }
}

function getYear(){
  let yearSelect = document.getElementsByName("years");
  for (let i = 0; i < yearSelect.length; i++){
    yearSelect[i].addEventListener('click', function(){
      let year = yearSelect[i].value;
      console.log(year)   
    });
  }
}

function getData(){
  fetch('./data/injuries/injuries.json').then(response => {
    return response.json();
  }).then(data => {
    
    function filterYear(years){
      if (year === "all-years"){
        let allYears = (years["Year"] >= "2000-01-04" && years["Year"] <= "2015-01-04");
        console.log(allYears)
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
    }
    
    function filterCategoryInjuries(injuries){
      if (category === "car"){
        let carInjurie = (injuries["Total_Injured_Persons_Passenger_Car_Occupants"]);
        console.log(carInjurie)
        return carInjurie;
      } else if (category === "bus"){
        let busInjurie = (injuries["Total_Injured_Persons_Bus_Occupants"]);
        console.log(busInjurie)
        return busInjurie;
      } else if (category === "truck"){
        let truckInjurie = (injuries["Total_Injured_Persons_Truck_Occupants_Large"]);
        console.log(truckInjurie)
        return truckInjurie;
      } else if (category === "moto"){
        let motoInjurie = (injuries["Total_Injured_Persons_Motorcyclists"]);
        console.log(motoInjurie)
        return motoInjurie;
      } else if (category === "bike"){
        let bikeInjurie = (injuries["Total_Injured_Persons_Pedalcyclists"]);
        console.log(bikeInjurie)
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
      ${data.filter(filterYear).filter(filterCategoryInjuries).map((injurie) => `
      <tr class="table-item">
      <td>lalala</td>
      <td></td>
      <td>${filterCategoryInjuries()}</td>
      </tr>
      `).join("")}
      `
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

