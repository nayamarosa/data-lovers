
fetch('./data/injuries/injuries.json').then(response => {
    return response.json();
}).then(data => {
    function showCarInjuries(){
        let jsonData = document.querySelector("#json-data");
        jsonData.innerHTML = `
        ${data.filter(function(injurie){
            if (injurie["Year"] >= "2000-01-04" && injurie["Year"] <= "2015-01-04"){
                return injurie;
            }
        }).map((injurie) => `
        <tr class="table-item">
        <td class="accident-type">Pessoas acidentadas de carro</td>
        <td class="accident-year">${injurie["Year"]}</td>
        <td class="accident-number">${injurie["Total_Injured_Persons_Passenger_Car_Occupants"]}</td>
        </tr>
        `).join("")}
        `
    }
    
    // console.log(data);
        showCarInjuries()
})





