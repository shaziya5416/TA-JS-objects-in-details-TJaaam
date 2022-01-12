/*Data:
- `title` (title of the question)
- `options` (array of options)
- `correctAnswerIndex` (index of the correct option)
- Methods:
- `isAnswerCorrect` (will accept the index and returns `true` or `false` based on the answer is correct or not)
- `getCorrectAnswer` (will return the correct answer of the quiz when the function is called)

### Create the object using the following ways

For each different ways of creating object write different solutions.

- Without Object
- Organize using object
- Use a function to create object
- Convert the function to use `this` keyword
- Write test by creating two objects also test both methods.
*/

let title= 'Where is the capital of Jordan';
let options =['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'];
let correctAnswerIndex= 1;
function correctAnswerIndex(index){
    return index==correctAnswerIndex;
}
function getCorrectAnswer(){
    return options[correctAnswerIndex];
}

let question={
    title: 'Where is the capital of Jordan',
  options: ['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],
  correctAnswerIndex: 1,
  isAnswerCorrect(index){
    return index==question.correctAnswerIndex;
},
getCorrectAnswer(){
    return question.options[question.correctAnswerIndex];
}

};


function createQuizApp(title,options,correctAnswerIndex){
    let question={};
    question.title=title;
    question.options=options;
    question.correctAnswerIndex=correctAnswerIndex;
    question.isAnswerCorrect=function(index){
        return index==question.correctAnswerIndex;
    }
    question.getCorrectAnswer=function(){
        return question.options[question.correctAnswerIndex];
    }
    return question;
}

const firstQuestion= createQuizApp("where is the capital of joradn",['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);


function createQuizApp(title,options,correctAnswerIndex){
    let question={};
    question.title=title;
    question.options=options;
    question.correctAnswerIndex=correctAnswerIndex;
    question.isAnswerCorrect=function(index){
        return index==this.correctAnswerIndex;
    }
    question.getCorrectAnswer=function(){
        return this.options[this.correctAnswerIndex];
    }
    return question;
}

const firstQuestion= createQuizApp("where is the capital of joradn",['Tashkent', 'Amaan', 'Kuwait City', 'Nairobi'],1);