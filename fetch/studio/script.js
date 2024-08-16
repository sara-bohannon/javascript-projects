//TODO: Add Your Code Below
window.addEventListener("load", function () {
    fetch(
      "https://handlers.education.launchcode.org/static/astronauts.json"
    ).then(function (response) {
      // Access the JSON in the response
      response.json().then(function (json) {
        const div = document.getElementById("container");
     let astropic = document.querySelectorAll("astronaut");
        //const astrpic = document.getElementById(".avatar");
        // Add HTML that includes the JSON data
      for(let i = 0; i < json.length;i++){
       div.innerHTML += `<H2> ${json[i].firstName} ${json[i].lastName}</H2>
          <ul>
                  <li>Hours in Space: ${json[i].hoursInSpace}</li>`;
                  let status = json[i].active;
                  if(status)
                    {
                        div.innerHTML +=`<li style = "color: green"> Active: ${json[i].active}</li>`;
                    }
                    else
                    {
                        div.innerHTML +=`<li> Active: ${json[i].active}</li>`;
                    }
                 div.innerHTML += 
                ` <li> Skills : ${json[i].skills}</li>
                  <img src = '${json[i].picture}'/>
                  
         </ul>`;
      };
      });
    });
  });
  