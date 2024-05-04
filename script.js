function addExpField(){
    //console.log("Adding new field");
    //creating new textarea
    let newNode=document.createElement('textarea');
    //adding class to the new textarea
    newNode.classList.add('form-control');//formID
    newNode.classList.add('weField');//work experience field ID
    newNode.classList.add('mt-2');  //top margin
    //setting no. of rows and a placeholder attributes
    newNode.setAttribute('rows',3);
    newNode.setAttribute('placeholder',"Enter here");

    //reference of button and work experience form id
    let workExp = document.getElementById('wExp');
    let workExpButton = document.getElementById('expAddButton');

    workExp.insertBefore(newNode,workExpButton);
    /*By using "insertBefore" method a newNode textfield will be pushed in the form "workExp"
     before the "expAddButton"*/
}

function addAqField(){
   let newNode = document.createElement('textarea');

   newNode.classList.add('form-control');
   newNode.classList.add('aqField');
   newNode.classList.add('mt-2');

   newNode.setAttribute('rows',3);
   newNode.setAttribute('placeholder',"Enter here");

   let academicQualifiaction = document.getElementById('aq');
   let aqButton = document.getElementById('qualAddButton');

   academicQualifiaction.insertBefore(newNode,aqButton);

}

//Generating CV
function generateCV(){
   //Accessing the values of HTML elements through their IDs
   //Name
   let uName = document.getElementById('nameField').value;//from userinput
   let tName = document.getElementById('cName'); //accessing template object-name
   tName.innerHTML = uName; //Assigning the user value to the template name-object

   document.getElementById('cName2').innerHTML = uName;//2nd name-object

   //phnNo
   document.getElementById('cPhn').innerHTML = document.getElementById('contactField').value;

   //address
   document.getElementById('cAddress').innerHTML = document.getElementById('addressField').value;

   //photo
   let pic = document.getElementById('imgField').files[0];
   console.log(pic);

   let reader = new FileReader();
   reader.readAsDataURL(pic);
   console.log(reader.result);
      //setting img to the template
      reader.onloadend = function(){
        document.getElementById('cImg').src = reader.result;
      };

      
   //Facebook
   document.getElementById('cFb').innerHTML = document.getElementById('fbField').value;

   //instagram
   document.getElementById('cIg').innerHTML = document.getElementById('igField').value;

   //LinkedIn
   document.getElementById('cLin').innerHTML = document.getElementById('lnField').value;

  //Objective
  document.getElementById('cObj').innerHTML = document.getElementById('objField').value;

  //Work Experience
  //Accessing each text field of work experience
  let workExp = document.getElementsByClassName('weField');
  let str = '';
  for(let e of workExp){
    str = str+`<li>${e.value}</li>`;
  }
  //Assigning the value to template Academic qualification value
  document.getElementById('cWexp').innerHTML = str;

  //Academic Qualification
  //Accessing each text field of work experience
  let aq = document.getElementsByClassName('aqField');
  let str2 = '';
  for(let e of aq){
    str2 = str2+`<li>${e.value}</li>`;
  }
  //Assigning the value to template Academic qualification value
  document.getElementById('cAq').innerHTML = str2;

  document.getElementById('resumeForm').style.display = "none";
  document.getElementById('cvTemplate').style.display = "block";

}

function printCV(){
  window.print();
}