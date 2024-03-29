
/////////////////////////////////////////////////////////////////
// const user = document.getElementById("uname");
// const start = document.getElementById("start");
// const warn = document.getElementById("warn");
// const disp = document.getElementById("usr");
// const first = document.getElementById("cred");
// const second = document.getElementById("page");

// user.addEventListener("input", function() {
//   if (user.value === "") {
//     warn.textContent = "Please enter your name!";
//     warn.style.color = "red";
//   } else {
//     warn.textContent = "";
//   }
// });

// start.addEventListener("click", function() {
//   if (user.value === "") {
//     warn.textContent = "Please enter your name!";
//     warn.style.color = "red";
//   } else {
//     warn.textContent = "";
//     second.style.display = "block";
//     first.style.display = "none";
//     disp.textContent = "Hello, " + user.value;
//     user.style.color = "#8DD736"
//   }
// });

// document.addEventListener("DOMContentLoaded", function() {
//   const foodSearchInput = document.getElementById("foodSearch");
//   const searchIcon = document.getElementById("searchIcon");
  
//   searchIcon.addEventListener("click", function() {
//     performSearch();
//   });

//   foodSearchInput.addEventListener("keydown", function(event) {
//     if (event.key === "Enter") {
//       performSearch();
//     }
//   });

//   function performSearch() {
//     const query = foodSearchInput.value.trim();
//     if (query !== "") {
//       fetchNutrition(query);
//     }
//   }

//   function fetchNutrition(query) {
//     const xhr = new XMLHttpRequest();
//     const url = `https://api.spoonacular.com/recipes/guessNutrition?title=${query}&apiKey=3c708297acf345a4b6f65bd94cfb0f13`;

//     xhr.open('GET', url, true);
//     xhr.setRequestHeader('Content-Type', 'application/json');

//     xhr.onload = function() {
//       if (xhr.status >= 200 && xhr.status < 300) {
//         const response = JSON.parse(xhr.responseText);
//         updateUI(response);
//       } else {
//         console.error('Error:', xhr.responseText);
//       }
//     };

//     xhr.onerror = function() {
//       console.error('Request failed');
//     };

//     xhr.send();
//   }

//   function updateUI(data) {
//     console.log(data);
//     if (data.calories && data.fat && data.protein && data.carbs) {
//       const calorieElement = document.getElementById("cal");
//       const proteinElement = document.getElementById("prot");
//       const fatElement = document.getElementById("fat");
//       const carbElement = document.getElementById("carbs");
  
//       calorieElement.textContent = data.calories.value.toFixed(1);
//       proteinElement.textContent = data.protein.value.toFixed(1);
//       fatElement.textContent = data.fat.value.toFixed(1); 
//       carbElement.textContent = data.carbs.value.toFixed(1); 
//     } else {
//       console.error('No items found in the response');
//     }
//   }
// });
///////////////////////////////////////////////////////////////////////////
// let search = document.getElementById('searchIcon');
// search.addEventListener("click",()=>{
//   // console.log("Button");
//   let xhr = new XMLHttpRequest();
//   xhr.open('GET','https://api.calorieninjas.com/v1/nutrition?query=',true);
//   xhr.onprogress=function(){
//     console.log("working");
//   }
//   xhr.send();
// })
/////////////////////////////////////////////////////////////////////////
const user = document.getElementById("uname");
const start = document.getElementById("start");
const warn = document.getElementById("warn");
const disp = document.getElementById("usr");
const first = document.getElementById("cred");
const second = document.getElementById("page");
const info = document.getElementById('info');

user.addEventListener("input", function() {
  if (user.value === "") {
    warn.textContent = "Please enter your name!";
    warn.style.color = "red";
  } else {
    warn.textContent = "";
  }
});

start.addEventListener("click", function() {
  if (user.value === "") {
    warn.textContent = "Please enter your name!";
    warn.style.color = "red";
  } else {
    warn.textContent = "";
    first.classList.remove("flex");
    first.classList.add("none");
    second.classList.remove("none");
    disp.textContent = "Hello, " + user.value;
    disp.style.color = "#8DD736"
  }
});

document.addEventListener("DOMContentLoaded", function() {
  const foodSearchInput = document.getElementById("foodSearch");
  const searchIcon = document.getElementById("searchIcon");
  searchIcon.addEventListener("click", function() {
    performSearch();
  });
  foodSearchInput.addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
      performSearch();
    }
  });

  function performSearch() {
    const query = foodSearchInput.value.trim();
    if (query !== "") {
      fetchNutrition(query);
    }
  }

  function fetchNutrition(query) {
    const xhr = new XMLHttpRequest();
    const url = 'https://api.calorieninjas.com/v1/nutrition?query=' + query;

    xhr.open('GET', url, true);
    xhr.setRequestHeader('X-Api-Key', 'UeqS6lvTCaNGsWEDwbpWDA==3IrUq4VQWkPHJj34');
    xhr.setRequestHeader('Content-Type', 'application/json');

    xhr.onload = function() {
      if (xhr.status >= 200 && xhr.status < 300) {
        const response = JSON.parse(xhr.responseText);
        updateUI(response);
      } else {
        console.error('Error:', xhr.responseText);
      }
    };

    xhr.onerror = function() {
      console.error('Request failed');
    };

    xhr.send();
  }

  function updateUI(data) {
    console.log(data);
    if (data.items && data.items.length > 0) {
      const item = data.items[0]; 
      const calorieElement = document.getElementById("cal");
      const proteinElement = document.getElementById("prot");
      const fatElement = document.getElementById("fat");
      const carbElement = document.getElementById("carbs");
      const quantity = document.getElementById("quant");

      calorieElement.textContent = item.calories.toFixed(1);
      proteinElement.textContent = item.protein_g.toFixed(1);
      fatElement.textContent = item.fat_total_g.toFixed(1); 
      carbElement.textContent = item.carbohydrates_total_g.toFixed(1); 
      quantity.textContent=item.serving_size_g+"g";
        info.style.display="block";

    } 
    else {
      console.error('No items found in the response');
    }
  }
});

// ///////////////////////////////////////////////////////////////////////////////////////////////////
