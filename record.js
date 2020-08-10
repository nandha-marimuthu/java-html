const readline = require('readline');
const { Console } = require('console');
const readlineInterface = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
}
function display(hash){
  for(x in hash){console.log(x +' :'+hash[x]);}
}
function del(hash){ delete hash ;}

start();
async function start() {
  console.log('1.CREATE record')

  let ID = await ask('Enter the ID: ');
  let name = await ask('Enter your name: ');
  let Telephone_number = await ask('Enter your Telephone_number: ');
  var record= new Object();
  record.ID=ID;
  record.name=name;
  record.Telephone_number=Telephone_number;
  console.log("\n"+'2.DISPLAY record');
  display(record);
  console.log("\n"+'3.SEARCH record');
  var n= await ask("Enter the record ID to search: ");
  if(n===record.ID){
    console.log("\n"+'Record found ! ');
    display(record);
  }
  console.log("\n"+'4.UPDATE record');

  let newID = await ask('Enter the ID to update: ');
  let newname = await ask('Enter your name to update: ');
  let newTelephone_number = await ask('Enter your Telephone_number to update: ');
  var record= new Object();
  record.ID=newID;
  record.name=newname;
  record.Telephone_number=newTelephone_number;
  console.log("\n"+'Details updated !');
  display(record);
  console.log("\n"+'5.DELETE record');;
  var a= await ask("Enter the record ID to delete: ")
  if(a===record.ID){
    del(record);
    console.log('Record deleted ! ');
  }



  process.exit();
}
