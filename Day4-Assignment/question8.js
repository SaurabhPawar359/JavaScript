console.log("Question 8");

let ask = (question, yes, no) => {
    if (confirm(question)) yes();
    else no();
}

ask("Do you agree?",
    function() {
        alert("You agreed");
    },
    function() { alert("You Canceled") });