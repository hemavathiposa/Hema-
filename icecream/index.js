function darkMode(){
    document.body.classList.toggle("darkmode");
}
/*
viswa prasad-valid fullname
monisha-inpalid fullname
*/
const fullnameValidation = () => {
 FullnameError = document.getElementById("FullnameError");
 Fullname = document.getElementById("Fullname").value;
 const regex = /^[a-zA-Z]+(\s[a-zA-Z]*)$/;

 if (Fullname === "") {
 FullnameError.innerHTML = `❌ Name is Required`;
 FullnameError.style.color = "red";
 return false;
 }
 if (!regex.test(Fullname)) {
 FullnameError.innerHTML = `❌ Please Enter the Fullname`;
 FullnameError.style.color = "red";
 return false;
 }
 FullnameError.innerHTML = `Valid Fullname✅`;
 FullnameError.style.color = "green";
 return true;
};
/*
1-valid Age
0 and leseer then 0 - invalid Age
121 and greter then 121 - invalid Age

greater then 1 and lesser then equal to 120 - valid Age
*/


const agevalidation=()=>{
    AgeError=document.getElementById("AgeError");
    Age=document.getElementById("Age").value //100
    Age=Number(Age)  //100

    if(Age<=0  || Age  >= 121){
        AgeError.innerHTML =`❌ Enter Valid Age`;
                AgeError.style.color='red';
        return false;
    }
    AgeError.innerHTML=` valid age✅`;
    AgeError.style.color='green';
    return true;
};

/*
1234567890-invalid phonenumber 
987659432-invalid phonenumber
9876543210-valid phonenumber

pattern
1.phone number should start with either 6,7,8, or 9
2.phone number should have 10 digit.
*/
const phonenumbervalidation=()=>{
    phonenumberError=document.getElementById("phonenumberError");
    phonenumber=document.getElementById("phonenumber").value
    const regex=/^[6789]\d{9}$/;
    if(phonenumber===""){
        phonenumberError.innerHTML=`📞 Number is required`;
     phonenumberError.style.color='red';
        return false;
    }
    if(!regex.test (phonenumber)){
        phonenumberError.innerHTML=`Invalid📞 Number `;
        phonenumberError.style.color='red';
        return false;

    }
    phonenumberError.innerHTML=`valid📞 Number ✅`;
    phonenumberError.style.color='green';
    return true;
};
const emailValidation = () => {
EmailError = document.getElementById("EmailError");
 Email = document.getElementById("Email").value;
 const regexp = /^[A-Za-z0-9._%+-]+@[A-Za-z]+\.(com|co\.in)$/;

 if (Email === "") {
     EmailError.innerHTML = `📩 Mail id is required`;
EmailError.style.color = "red";
 return false;
 }
  if (!regexp.test(Email)) {
 EmailError.innerHTML = `📩 Mail id is Invalid`;
 EmailError.style.color = "red";
 return false;
 }
 EmailError.innerHTML = `📩 Mail id is Valid`;
 EmailError.style.color = "Green";
 return true;
};


const passwordvalidation=()=>{
    PasswordError=document.getElementById("PasswordError");
    Password=document.getElementById("Password").value;
    const regex=/^(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/;
    if(Password===""){
        PasswordError.innerHTML=`Password is reqired`;
        PasswordError.style.color="red";
        return false;

    }
    if(!regex.test(Password)){
        PasswordError.innerHTML=`Password should have one upper case and special charcater`;
            PasswordError.style.color='red';
        return false;
    }

    PasswordError.innerHTML=`Password is valid`;
    
        PasswordError.style.color='green';
        return true;
};
const formvalidation =()=>{
    Formerror = document.getElementById("formerror");
    if(!fullnamevalidation()||!agevalidation()||!phonenumbervalidation()||emailvalidation()||passwordvalidation())
        {
        Formerror.innerHTML = "Fix The Errors Above ❌";
 Formerror.style.color = "red";
 return false;
    }
    Formerror.innerHTML = "";
    alert("Form Submitted Successfully ✅");
return true;
};