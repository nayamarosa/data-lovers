
    fetch('./data/injuries/injuries.json').then(response => {
        return response.json();
    }).then(data => {
        function showCarInjuries(){
            let jsonData = document.querySelector("#json-data");
            jsonData.innerHTML = `
            ${data.map((injurie) => `
            <li class="list-item">
                <p class="accident-type">${Object.keys(injurie)}</p>
                <p class="year">${injurie["Year"]}</p>
                <p class="accident-number">${injurie["Total_Injured_Persons_Passenger_Car_Occupants"]}</p>
            </li>
            `).join("")}
            `
        }
        
        // console.log(data);
        showCarInjuries()
    })
    




