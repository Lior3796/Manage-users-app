class FormValues {
    constructor(firstName,lastName,Age,PhoneNumber,email,validEmail){
        this.firstName = firstName;
        this.lastName = lastName;
        this.Age = Age;
        this.PhoneNumber = PhoneNumber;
        this.email = email;
        this.validEmail = validEmail;
    }
  

    checkValid(firstName,lastName,Age,PhoneNumber,email,validEmail){
     if(this.email !== this.validEmail){
         return alert("check your email input");
     }
     let arrayDetails = [this.firstName,this.lastName,this.Age,this.PhoneNumber,this.email,this.validEmail];
     console.log(arrayDetails);
    if(arrayDetails.length !== 6){
        alert("you forgot to finish your form");
    }
     console.log("success");
     return arrayDetails;

    }
    get() {
       this.checkValid();
      }
}

let obj = new FormValues(formUser[0].value,formUser[1].value,formUser[2].value,formUser[3].value,formUser[4].value,
formUser[5].value);
let subButton = document.getElementsById("subButton");
subButton.addEventListner("click",)

