//using selectors inside the element
//So, first off we grab the questions in a variable
const questions = document.querySelectorAll(".question");


//now let's go through each question with a for each, which executes a function
questions.forEach(function (question) {

  // In another variable, within the scope of the forEach, we grab the question buttons  
  const btn = question.querySelector(".question-btn");

  //Now we add an event to that button (That button only has 1 element since we are in for each)
  btn.addEventListener("click", function () {

    // Now we go trough the questions again to close any other opened question
    questions.forEach(function (item) {
      if (item !== question) {
        item.classList.remove("show-text");
      }
    });
    
    // Now we just toggle the class for showing the text
    question.classList.toggle("show-text");
  });
});

// traversing the dom
// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function (btn) {
//   btn.addEventListener("click", function (e) {
//     const question = e.currentTarget.parentElement.parentElement;

//     question.classList.toggle("show-text");
//   });
// });