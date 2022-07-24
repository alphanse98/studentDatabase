let Vtable = document.querySelector('table')
// console.log(Vtable);
let vtr;
var dataF = (photo,namep,mobilep,batchp,gitp,refralp,locationp,placementp) =>{

 vtr = document.createElement('tr');

 let Vtd = document.createElement('td');
Vtd.textContent = photo;
vtr.appendChild(Vtd);  

let Vtd2 = document.createElement('td');
Vtd2.textContent = namep;
vtr.appendChild(Vtd2); 

let Vtd3 = document.createElement('td');
Vtd3.textContent = mobilep;
vtr.appendChild(Vtd3); 


let Vtd4 = document.createElement('td');
Vtd4.textContent = batchp;
vtr.appendChild(Vtd4); 


let Vtd5 = document.createElement('td');
Vtd5.textContent = gitp;
vtr.appendChild(Vtd5); 


let Vtd6 = document.createElement('td');
Vtd6.textContent = refralp;
vtr.appendChild(Vtd6); 


let Vtd7 = document.createElement('td');
Vtd7.textContent = locationp;
vtr.appendChild(Vtd7); 


let Vtd8 = document.createElement('td');
Vtd8.textContent = placementp;
vtr.appendChild(Vtd8); 
console.log(Vtable);
console.log(Vtable);

Vtable.appendChild(vtr);

}

dataF('img','mari selvam',9876543211,'fsd 10','git ','Alphanse','poozhangulam','Zoho')
dataF('img','Leo',9876543211,'fsd 10','git ','Alphanse','surandai','Zoho')



var dataBase = {
  img:'8979',
  name:'Banu mathi',
  number:'9876543211',
  branch :'Fsd 10',
  git:'link',
  refral:'mariselvam',
  location:'poozhangulam',
  placement:'zoho',
}
console.log(dataBase.img)

dataF(dataBase.img,dataBase.name,dataBase.number,dataBase.number,dataBase.git,dataBase.refral,dataBase.location,dataBase.placement)