// TODO: add code here
const astroContainer = document.querySelector('#container');


fetch("https://handlers.education.launchcode.org/static/astronauts.json")
.then(res => res.json())
.then(data => data.forEach((item) => {
    let output = '';
    output += `
        <div class = "astronaut">
            <div class ="bio">
            <h2>${item.firstName} ${item.lastName}</h2>
            <ul>
                <li>Hours in space: ${item.hoursInSpace}</li>
                <li>Active: ${item.active}</li>
                <li>Skills: ${item.skills}</li>
            </ul>
            </div>
            <img src = "${item.picture}" class = "avatar">
        </div>
    `;
    
    astroContainer.innerHTML += output;
}))
.catch((err) => console.log(err));
