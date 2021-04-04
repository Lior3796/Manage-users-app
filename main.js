let baseApi = "https://next.json-generator.com/api/json/get/NJ-UoW2Xq";

function getUsersArrayInfo(){
    return fetch(`${baseApi}`,{})
    .then((res) => {
        return res.json();
    })
}

let usersArray; 
async function getUserInfo(){
    let containerCards = document.getElementById("containerCards");
    try{
    usersArray = await getUsersArrayInfo();
    usersArray.forEach(element => {
        console.log(element);
    containerCards.innerHTML += `<div class="card" style="width: 18rem;">
    <button onclick ="openFullScreen(${element.index})"><img src="${element.picture}" class="card-img-top" alt="..."></button>
    <div class="card-body">
      <h5 class="card-title">FirstName: ${element.name.first}</h5>
      <h5 class="card-title">LastName: ${element.name.last}</h5>
      <p class="card-text">Email: ${element.email}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">phone: ${element.phone}</li>
      <li class="list-group-item">Age: ${element.age}</li>
    </ul>
    <div class="card-body">
      <button onclick="addUser()" type="button" class="btn btn-primary">add user</button>
      <button onclick= "addForTable()" type="button" class="btn btn-primary">click for table</button>
    </div>
</div>`


    });
return newCard;
}
catch(response){
    console.log(response);
}
finally{
    console.log("yay",usersArray);
    return usersArray;
}
}
// דריסת הדף הראשי לטבלה בלחיצת כפתור
getUserInfo();

let counter = 1;
async function addForTable(){
    try{
    
    let cardsTableArray = await getUsersArrayInfo();
    containerCards.innerHTML = '';
    cardsTableArray.forEach(element => {
    console.log(element);
    containerCards.innerHTML += ` 
    <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">picture</th>
      <th scope="col">FirstName</th>
      <th scope="col">LastName</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Age</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">${counter}</th>
      <td><img src="${element.picture}" class="card-img-top" alt="...">
      </td>
      <td>${element.name.first}</td>
      <td>${element.name.last}</td>
      <td>${element.email}</td>
      <td>${element.phone}</td>
      <td>${element.age}</td>
    </tr>
  </tbody>
</table>`
counter++;

});
counter = 1;
}
catch(res){
    console.log(res);

}
finally{
    console.log("yay1");
}
}
function addUser() {
  let container = document.getElementById("containerCards");
  container.innerHTML += `
  <form id="userForm">
      <div class="row">
          <h6>First name</h6>
        <div class="col">
          <input name="First-name" id="" type="text" class="form-control" placeholder="First name">
        </div>
      </div>
      <div class="row">
          <h6>Last name</h6>
        <div class="col">
          <input name="Last-name" type="text" class="form-control" placeholder="Last name">
        </div>
      </div>
      <div class="row">
          <h6>Age</h6>
          <div class="col">
            <input name="Age" type="text" class="form-control" placeholder="Age">
          </div>
      </div>
  
        <div class="row">
          <h6>PhoneNumber</h6>
          <div class="col">
            <input name="PhoneNumber" type="text" class="form-control" placeholder="PhoneNumber">
          </div>
        </div>
      <div class="row">
          <h6>image</h6>
          <div class="col">
            <input name="image" type="text" class="form-control" placeholder="image">
          </div>
      </div>
      <div class="row">
          <h6>Email</h6>
          <div class="col">
            <input name="Email" id="userEmail" type="text" class="form-control" placeholder="Email">
          </div>
      </div>
      <div class="row">
          <h6>check valid Email</h6>
          <div class="col">
              <input name="valid-Email" id="userEmail" type="text" class="form-control" placeholder="Email">
            </div>
      </div>

      </div>
      <button onclick="addNewCard()" class="btn btn-primary" type="submit">Submit form</button>

    </form>

  `

}
let counterNewCard = 10;


function addNewCard() {
  let container = document.getElementById("containerCards");
  let userForm = document.getElementById("userForm");
  if(userForm[5].value !== userForm[6].value){
   alert("your email input not valid");
   userForm.remove();
   addUser();
  }
  else{
    container.innerHTML += `  
    
      <div class="card" style="width: 18rem;">
      <button onclick ="openFullScreen(${counterNewCard})"><img src="https://vistapointe.net/images/rick-and-morty-wallpaper-13.jpg" class="card-img-top" alt=""></button>
    <div class="card-body">
          <h5 class="card-title">FirstName:
          ${userForm[0].value}
            </h5>
      <h5 class="card-title">LastName:
      ${userForm[1].value}
      </h5>
      <p class="card-text">Email:${userForm[5].value}
    </p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">phone: ${userForm[3].value}
    </li>
      <li class="list-group-item">Age: ${userForm[2].value}
      </li>
    </ul>
    <div class="card-body">
      <button onclick="addUser()" type="button" class="btn btn-primary">add user</button>
      <button onclick="addForTable()" type="button" class="btn btn-primary">click for table</button>
    </div>
</div>

   `;
  }
  counterNewCard++;


  return false;
 
}
let choseCard;
async function openFullScreen(index){
  let containerCards = document.getElementById("containerCards");
try {
  let userCards = await getUsersArrayInfo();
  userCards.forEach((card) => {
    if(card.index === index){
      choseCard = card;
    }
    if(choseCard != null){
      
      document.body.innerHTML = `
     
      
      <div class="card" style="width: 18rem;">
   
    <img src="https://vistapointe.net/images/rick-and-morty-wallpaper-13.jpg" onclick ="openFullScreen(${choseCard.index})" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">FirstName: ${choseCard.name.first}</h5>
      <h5 class="card-title">LastName: ${choseCard.name.last}</h5>
      <p class="card-text">Email: ${choseCard.email}</p>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">phone: ${choseCard.phone}</li>
      <li class="list-group-item">Age: ${choseCard.age}</li>
    </ul>
    <div class="card-body">
       
      <button onclick="addUser()" type="button" class="btn btn-primary">add user</button>
      <button onclick= "addForTable()" type="button" class="btn btn-primary">click for table</button>
    </div>
    <div class="card-body">
    
    </div>
</div>`;
document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignContent = "center";

      
    }
  });
}

catch(res){

}
}