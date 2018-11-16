// Пример использования привязки контекста с помощью apply
var uzer1 = {firstName: 'Ivan', lastName: 'Ivanov'};
var uzer2 = {firstName: 'John', lastName: 'Smith'};

function say(greeting) {
  console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
}

say.apply(uzer1, ['Hello']); 
say.apply(uzer2, ['Hello']); 


// Пример использования привязки контекста с помощью bind
function bind(func, context) {
    return function() {
      return func.apply(context, arguments);
    };
  }
  
  var user3 = {
    firstName1: "Вася",
    sayHi: function(who) {
      console.log( this.firstName1 + ": Привет, " + who );
    }
  };
  
  var sayHi = bind(user3.sayHi, user3);

  sayHi("Петя"); 
  sayHi("Маша"); 


// Пример использования привязки контекста с помощью call
function showFullName() {
    console.log( this.firstName2 + " " + this.lastName2 );
  }
  
  var user4 = {
    firstName2: "Вася",
    lastName2: "Иванов"
  };
  
  showFullName.call(user4) 