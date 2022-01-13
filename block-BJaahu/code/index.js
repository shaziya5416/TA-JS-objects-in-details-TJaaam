/*
- Data:
  - `title` (title of the question)
  - `options` (array of options)
  - `correctAnswerIndex` (index of the correct option)
- Methods:
  - `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
  - `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Prototypal pattern of object creation (Put methods inside an object and create object using Object.create)
- Pseudoclassical Pattern (Put methods inside F.prototype and use `new` to call function)
- Create using class
- Write test by creating two objects also test both methods.

### To test use the following data

You can use the data given below. You will also have to change the name of the function while calling them.

```js
let firstQuestion = newQuestion(
  'Where is the capital of Jordan',
  ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  1
);
let secondQuestion = newQuestion(
  'Where is the capital of Jamaica',
  ['Tashkent', 'Amaan', 'Kingston', 'Nairobi'],
  2
);
*/

//Factory Pattern

function newQuestion(title,options,correctAnswerIndex){
    let user={};
    user.title=title;
    user.options=options;
    user.correctAnswerIndex=correctAnswerIndex;
    user.isAnswerCorrect=function(index){
        return (user.correctAnswerIndex==index);
    };
    user.getCorrectAnswer=function(){
        return user.options[user.correctAnswerIndex];
    };
    return user;
}

//Prototypal pattern

let methods={
    isAnswerCorrect:function(index){
        return (this.correctAnswerIndex==index);
    },
    getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    }
}


function newQuestion(title,options,correctAnswerIndex){
    let user=Object.create(methods)
    user.title=title;
    user.options=options;
    user.correctAnswerIndex=correctAnswerIndex;
    return user;
}

//new

function newQuestion(title,options,correctAnswerIndex){
    this.title=title;
    this.options=options;
    this.correctAnswerIndex=correctAnswerIndex;
}

newQuestion.prototype={
    isAnswerCorrect:function(index){
        return (this.correctAnswerIndex==index);
    },
    getCorrectAnswer:function(){
        return this.options[this.correctAnswerIndex];
    }   
}