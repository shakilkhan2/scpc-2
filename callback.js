// Explain what a callback function is and provide a simple example?

function greetings(message) {
  message()
}

// const string = "Bangladesh";
// const number = 133
// const array = [1, 3, "array"]
// const object = {name: "robi", roll: 12, class: 9}
function message(){
    console.log("Hello");
}
greetings(function);
