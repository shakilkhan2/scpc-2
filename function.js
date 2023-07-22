function getValue (message, name){
    message(name)
}

// const string = "Bangladesh";
// const number = 100;
// const array = ['bd', 'ind', 12]
// const object = {name: "Abid", age: 20, rol: 12}
function message(name){
    console.log("Good Morning", name)
}
function messageNight(name){
    console.log("Good Night", name)
}

getValue(messageNight, "Abid");
getValue(message, "Abid");