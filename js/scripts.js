window.onload = function() {
  const form = document.getElementById("quiz");
  form.addEventListener("submit", function(event){
    event.preventDefault();
    document.getElementById("firstChar").setAttribute("class","hidden");
    document.getElementById("secondChar").setAttribute("class","hidden");
    document.getElementById("thirdChar").setAttribute("class","hidden");
    document.getElementById("fourthChar").setAttribute("class","hidden");

    let fn = document.getElementById("firstName").value.toLowerCase();
    let age = parseInt(document.getElementById("age").value);
    let color = document.querySelector("select").value.toLowerCase();
    console.log(fn.charAt(0) + " test");
    console.log(color + " test");
    
    if(fn.charAt(0) === "j" && age >= 59 && color === "blonde") {
      document.getElementById("firstChar").removeAttribute("class","hidden");
    }
    else if(fn.charAt(0) != "j" && age > 15 && age < 59 && color === "red") {
      document.getElementById("secondChar").removeAttribute("class","hidden");
    }
    else if(fn.charAt(0) === "a" && age > 18 && age <=36 && color === "black") {
      document.getElementById("thirdChar").removeAttribute("class","hidden");
    }
    else {
      document.getElementById("fourthChar").removeAttribute("class","hidden");
    }
   }
  );
};
