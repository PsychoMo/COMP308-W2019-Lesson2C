
// self-executing anonymous function
// IIFE -- Immediately Invoked Function Expression
(function(){
    let myFunctionalVariable = 0;

    function Start() {
        let myLocalVariable = 0;
        console.log(`%c App Started...${myFunctionalVariable}`, "background: #222; color: #bada55");
    }

    window.addEventListener("load", Start);
})();