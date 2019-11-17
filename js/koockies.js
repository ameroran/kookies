'use strict'
// Domain model for Seattle
var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Seattle ={
name: "Seattle Salmon",

max: 65,
min: 23,
avgCoockies: 6.3,
cookiesPerHoursArr: [],
totalArr: 0,


randomCustomer: function(){
    var random = Math.random() * (this.max - this.min + 1) + this.min;
   
    return Math.floor(random);

},

cookiesPerHours: function(){

    for (var j = 0; j < 15; j++) {
var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
      this.cookiesPerHoursArr.push(cookies);
      this.totalArr= this.cookiesPerHoursArr[j] + this.totalArr ;


      console.log(cookies)
    
    }
},




// console.table(Seattle);


render : function() {
    var container = document.getElementById("cookies");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);

    var h1El = document.createElement("h1");
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] +''+ this.cookiesPerHoursArr[i] + 'cookies' ;
    }
    var totalLi = document.createElement("li");
    ulEl.appendChild(totalLi);
    totalLi.textContent =  'Total is:' + this.totalArr + 'cookies' ;

  }
};

Seattle.randomCustomer();
Seattle.cookiesPerHours();
Seattle.render();

// cookiesPerHoursArr[j];
// RanCustomer: function(min, max) {
//     this.RanCustomer = randCustomer(min, max);


// },
// function randomCookiesPerHours (randCustomer,avgCoockies){
// randomCookiesPerHours: function(randCustomer,avgCoockies) {
// for (let j = 0; j < hourSeattle.length ; j++) {

//       this.cookies= Math.ceil(this.randCustomer * this.avgCoockies);
//       this.cookiesPerHoursArr.push(cookies);
// } 

//     return cookiesPerHoursArr;
// }

// }
// function randCustomer(min,max) {
//        return Math.floor(Math.random() * (max - min + 1)) + min;

// }


// Seattle.RanCustomer(0,100);
// console.table(Seattle);

// randomCookiesPerHours(randCustomer,avgCoockies);


// Domain model for Dubai
var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Dubai ={
name: "Dubai Salmon",

max: 38, 
min: 11,
avgCoockies: 3.7,
cookiesPerHoursArr: [],
totalArr: 0,


randomCustomer: function(){
    var random = Math.random() * (this.max - this.min + 1) + this.min;
   
    return Math.floor(random);

},

cookiesPerHours: function(){

    for (var j = 0; j < 15; j++) {
var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
      this.cookiesPerHoursArr.push(cookies);
      this.totalArr= this.cookiesPerHoursArr[j] + this.totalArr ;


      console.log(cookies)
    
    }
},




// console.table(Dubai);


render : function() {
    var container = document.getElementById("cookies");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);

    var h1El = document.createElement("h1");
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] +''+ this.cookiesPerHoursArr[i] + 'cookies' ;
    }
    var totalLi = document.createElement("li");
    ulEl.appendChild(totalLi);
    totalLi.textContent =  'Total is:' + this.totalArr + 'cookies' ;

  }
};

Dubai.randomCustomer();
Dubai.cookiesPerHours();
Dubai.render();



// Domain model for Tokyo
var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Tokyo ={
name: "Tokyo Salmon",

max: 24,
min: 3,
avgCoockies: 1.2,
cookiesPerHoursArr: [],
totalArr: 0,


randomCustomer: function(){
    var random = Math.random() * (this.max - this.min + 1) + this.min;
   
    return Math.floor(random);

},

cookiesPerHours: function(){

    for (var j = 0; j < 15; j++) {
var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
      this.cookiesPerHoursArr.push(cookies);
      this.totalArr= this.cookiesPerHoursArr[j] + this.totalArr ;


      console.log(cookies)
    
    }
},




// console.table(Seattle);


render : function() {
    var container = document.getElementById("cookies");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);

    var h1El = document.createElement("h1");
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] +''+ this.cookiesPerHoursArr[i] + 'cookies' ;
    }
    var totalLi = document.createElement("li");
    ulEl.appendChild(totalLi);
    totalLi.textContent =  'Total is:' + this.totalArr + 'cookies' ;

  }
};

Tokyo.randomCustomer();
Tokyo.cookiesPerHours();
Tokyo.render();



// Domain model for Lima
var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Lima ={
name: "Lima Salmon",

max: 16,
min: 2,
avgCoockies: 4.6,
cookiesPerHoursArr: [],
totalArr: 0,


randomCustomer: function(){
    var random = Math.random() * (this.max - this.min + 1) + this.min;
   
    return Math.floor(random);

},

cookiesPerHours: function(){

    for (var j = 0; j < 15; j++) {
var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
      this.cookiesPerHoursArr.push(cookies);
      this.totalArr= this.cookiesPerHoursArr[j] + this.totalArr ;


      console.log(cookies)
    
    }
},

// console.table(Lima);

render : function() {
    var container = document.getElementById("cookies");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);

    var h1El = document.createElement("h1");
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] +''+ this.cookiesPerHoursArr[i] + 'cookies' ;
    }
    var totalLi = document.createElement("li");
    ulEl.appendChild(totalLi);
    totalLi.textContent =  'Total is:' + this.totalArr + 'cookies' ;

  }
};

Lima.randomCustomer();
Lima.cookiesPerHours();
Lima.render();



// Domain model for Paris
var hours =['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm'];

var Paris ={
name: "Paris Salmon",

max: 38,
min: 20,
avgCoockies: 2.3,
cookiesPerHoursArr: [],
totalArr: 0,


randomCustomer: function(){
    var random = Math.random() * (this.max - this.min + 1) + this.min;
   
    return Math.floor(random);

},

cookiesPerHours: function(){

    for (var j = 0; j < 15; j++) {
var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
      this.cookiesPerHoursArr.push(cookies);
      this.totalArr= this.cookiesPerHoursArr[j] + this.totalArr ;


      console.log(cookies)
    
    }
},




// console.table(Paris);


render : function() {
    var container = document.getElementById("cookies");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);

    var h1El = document.createElement("h1");
    articleEl.appendChild(h1El);
    h1El.textContent = this.name;

    var ulEl = document.createElement("ul");
    articleEl.appendChild(ulEl);

    for (let i = 0; i < hours.length; i++) {
      var liEl = document.createElement("li");
      ulEl.appendChild(liEl);
      liEl.textContent = hours[i] +''+ this.cookiesPerHoursArr[i] + 'cookies' ;
    }
    var totalLi = document.createElement("li");
    ulEl.appendChild(totalLi);
    totalLi.textContent =  'Total is:' + this.totalArr + 'cookies' ;

  }
};

Paris.randomCustomer();
Paris.cookiesPerHours();
Paris.render();
