/* js for 1.Search Bar*/

function searchBar() {
  var input = searchInput.value;
  
  var content = input.toLowerCase();
  
  // this variable tells if the search item in our list or not.
  let value_in_list = false;
  for (let state of State) {
    //if content received from user in our product list, then return the link in a new paragraph
    if (state.name == content) {
      value_in_list = true;
      //change the value to display whatever we want to show our customers
      document.getElementById('result').innerHTML = state.url
    }
  }
  if (value_in_list == false) {
    document.getElementById('result').innerHTML = "State not found."
  }
 
}





/* js function for display or hide text (2. Collapsible Content)*/
function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less"; 
      moreText.style.display = "inline";
    }
  }

/*js function for display or hide text*/
function toggleText() {
  var text = document.getElementById("demo");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function text2() {
  var text = document.getElementById("demo2");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}
function text3() {
  var text = document.getElementById("demo3");
  if (text.style.display === "none") {
    text.style.display = "block";
  } else {
    text.style.display = "none";
  }
}



/* js for 3.Filtered Content*/


function filterSelection(state) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (state == "all") state = "";
  for (i = 0; i < x.length; i++) {
    RemoveClass(x[i], "show");
    if (x[i].className.indexOf(state) > -1){
      AddClass(x[i], "show");
    }
  }
}

function AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
      if (arr1.indexOf(arr2[i]) == -1) {
        element.className += " " + arr2[i];
      }
  }
}

function RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
        arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}



  /* js function for 4.Slideshow*/
  
  
  
  function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }

    slideIndex++;

    if (slideIndex > slides.length) {slideIndex = 1}    
        for (i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
      }

    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 2000); // Change image every 2 seconds
  }











