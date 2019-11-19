'use strict'
// Domain model for Seattle
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

var totals =[];
var stores =[];
function store(name, min, max, avgCoockies)
{
    this.name = name;
    this.max = max;
    this.min = min;
    this.avgCoockies = avgCoockies;
    this.cookiesPerHoursArr = [];
    this.totalArr = 0;
    this.cookiesPerHours(),

    store.push(this);

}


store.prototype.randomCustomer = function() {

        return Math.random() * (this.max - this.min + 1) + this.min;    
    }

    store.prototype.cookiesPerHours = function () {

        for (var j = 0; j < hours.length; j++) {

            this.cookiesPerHoursArr[j]= Math.ceil(this.randomCustomer() * this.avgCoockies);
            this.cookiesPerHoursArr.push(cookies);
            this.totalArr = this.cookiesPerHoursArr[j] + this.totalArr;
        };

    }

store.prototype.render =function(){
     var container = document.getElementById("cookies");
    var articleEl = document.createElement("article");
    container.appendChild(articleEl);
    var tableEl = document.createElement("table");
    articleEl.appendChild(tableEl);
    var headerRowEl = document.createElement("tr");
    table.appendChild(headerRowEl);
    for (let a = 0; a< hours.length; a++) {

        var td1El = document.createElement("td");
        headerRowEl.appendChild(td1El);
        td1El.textContent = this.hours[a];

    }
}

var dataRowEl = document.createElement("tr");
table.appendChild(dataRowEl);
var tdEl = document.createElement("td");
tdEl.textContent = this.name;
dataRowEl.appendChild(tdEl);
for (let b = 0; b < hours.length; b++) {
    var tdEl = document.createElement("td");
    tdEl.textContent = this.cookiesPerHoursArr[b];
    dataRowEl.appendChild(tdEl);

}
 
var seattle= new store( "Seattle", 23, 65, 6.3);
var tokyo= new store("Tokyo", 3, 24, 1.2);
var dubai = new store("Dubai", 11, 38, 3.7);
var paris= new store("Paris", 20, 38, 2.3);
var lima= new store("Lima", 2, 16, 4.6);


for (let i = 0; i < store.length; i++) {
    store[i].randomCustomer();
    Store[i].cookiesPerHours();
    Store[i].render();
}


var footerRowEl = document.createElement("tr");
table.appendChild(footerRowEl);
var tdEl = document.createElement("td");
tdEl.textContent = this.totalArr;
footerRowEl.appendChild(tdEl);
for (let c = 0; c < hours.length; c++) {
    var tdEl = document.createElement("td");
    footerRowEl.appendChild(tdEl);
    tdEl.textContent = this.totals[c];


}

// // var Seattle = {
// //     name: "Seattle Salmon",

// //     max: 65,
// //     min: 23,
// //     avgCoockies: 6.3,
// //     cookiesPerHoursArr: [],
// //     totalArr: 0,


    // this.randomCustomer: function () {
    //     var random = Math.random() * (this.max - this.min + 1) + this.min;

    //     return Math.floor(random);

    // },

// //     cookiesPerHours: function () {

// //         for (var j = 0; j < 15; j++) {
// //             var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
// //             this.cookiesPerHoursArr.push(cookies);
// //             this.totalArr = this.cookiesPerHoursArr[j] + this.totalArr;


// //             console.log(cookies)

// //         }
// //     },




// //     // console.table(Seattle);


// //     render: function () {
// //         var container = document.getElementById("cookies");
// //         var articleEl = document.createElement("article");
// //         container.appendChild(articleEl);

// //         var h1El = document.createElement("h1");
// //         articleEl.appendChild(h1El);
// //         h1El.textContent = this.name;

// //         var ulEl = document.createElement("ul");
// //         articleEl.appendChild(ulEl);

// //         for (let i = 0; i < hours.length; i++) {
// //             var liEl = document.createElement("li");
// //             ulEl.appendChild(liEl);
// //             liEl.textContent = hours[i] + '  :' + this.cookiesPerHoursArr[i] + ' ~ cookies';
// //         }
// //         var totalLi = document.createElement("li");
// //         ulEl.appendChild(totalLi);
// //         totalLi.textContent = 'Total is:  ' + this.totalArr + ' ~  cookies';

// //     }
// // };

// // Seattle.randomCustomer();
// // Seattle.cookiesPerHours();
// // Seattle.render();



// Seattle.randomCustomer();
// Seattle.cookiesPerHours();
// Seattle.render();

// // Domain model for Dubai
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var Dubai = {
//     name: "Dubai Salmon",

//     max: 38,
//     min: 11,
//     avgCoockies: 3.7,
//     cookiesPerHoursArr: [],
//     totalArr: 0,


//     randomCustomer: function () {
//         var random = Math.random() * (this.max - this.min + 1) + this.min;

//         return Math.floor(random);

//     },

//     cookiesPerHours: function () {

//         for (var j = 0; j < 15; j++) {
//             var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
//             this.cookiesPerHoursArr.push(cookies);
//             this.totalArr = this.cookiesPerHoursArr[j] + this.totalArr;


//             console.log(cookies)

//         }
//     },




//     // console.table(Dubai);


//     render: function () {
//         var container = document.getElementById("cookies");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);

//         var h1El = document.createElement("h1");
//         articleEl.appendChild(h1El);
//         h1El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);

//         for (let i = 0; i < hours.length; i++) {
//             var liEl = document.createElement("li");
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i] + '  : ' + this.cookiesPerHoursArr[i] + ' ~ cookies';
//         }
//         var totalLi = document.createElement("li");
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = 'Total is: ' + this.totalArr + ' ~  cookies';

//     }
// };

// Dubai.randomCustomer();
// Dubai.cookiesPerHours();
// Dubai.render();



// // Domain model for Tokyo
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var Tokyo = {
//     name: "Tokyo Salmon",

//     max: 24,
//     min: 3,
//     avgCoockies: 1.2,
//     cookiesPerHoursArr: [],
//     totalArr: 0,


//     randomCustomer: function () {
//         var random = Math.random() * (this.max - this.min + 1) + this.min;

//         return Math.floor(random);

//     },

//     cookiesPerHours: function () {

//         for (var j = 0; j < 15; j++) {
//             var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
//             this.cookiesPerHoursArr.push(cookies);
//             this.totalArr = this.cookiesPerHoursArr[j] + this.totalArr;


//             console.log(cookies)

//         }
//     },




//     // console.table(Seattle);


//     render: function () {
//         var container = document.getElementById("cookies");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);

//         var h1El = document.createElement("h1");
//         articleEl.appendChild(h1El);
//         h1El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);

//         for (let i = 0; i < hours.length; i++) {
//             var liEl = document.createElement("li");
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i] + '   :' + this.cookiesPerHoursArr[i] + ' ~ cookies';
//         }
//         var totalLi = document.createElement("li");
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = 'Total is: ' + this.totalArr + ' ~ cookies';

//     }
// };

// Tokyo.randomCustomer();
// Tokyo.cookiesPerHours();
// Tokyo.render();



// // Domain model for Lima
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var Lima = {
//     name: "Lima Salmon",

//     max: 16,
//     min: 2,
//     avgCoockies: 4.6,
//     cookiesPerHoursArr: [],
//     totalArr: 0,


//     randomCustomer: function () {
//         var random = Math.random() * (this.max - this.min + 1) + this.min;

//         return Math.floor(random);

//     },

//     cookiesPerHours: function () {

//         for (var j = 0; j < 15; j++) {
//             var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
//             this.cookiesPerHoursArr.push(cookies);
//             this.totalArr = this.cookiesPerHoursArr[j] + this.totalArr;


//             console.log(cookies)

//         }
//     },

//     // console.table(Lima);

//     render: function () {
//         var container = document.getElementById("cookies");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);

//         var h1El = document.createElement("h1");
//         articleEl.appendChild(h1El);
//         h1El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);

//         for (let i = 0; i < hours.length; i++) {
//             var liEl = document.createElement("li");
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i] + '  : ' + this.cookiesPerHoursArr[i] + ' ~ cookies';
//         }
//         var totalLi = document.createElement("li");
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = 'Total is:  ' + this.totalArr + ' ~ cookies';

//     }
// };

// Lima.randomCustomer();
// Lima.cookiesPerHours();
// Lima.render();



// // Domain model for Paris
// var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

// var Paris = {
//     name: "Paris Salmon",

//     max: 38,
//     min: 20,
//     avgCoockies: 2.3,
//     cookiesPerHoursArr: [],
//     totalArr: 0,


//     randomCustomer: function () {
//         var random = Math.random() * (this.max - this.min + 1) + this.min;

//         return Math.floor(random);

//     },

//     cookiesPerHours: function () {

//         for (var j = 0; j < 15; j++) {
//             var cookies = Math.ceil(this.randomCustomer() * this.avgCoockies);
//             this.cookiesPerHoursArr.push(cookies);
//             this.totalArr = this.cookiesPerHoursArr[j] + this.totalArr;


//             console.log(cookies)

//         }
//     },




//     // console.table(Paris);


//     render: function () {
//         var container = document.getElementById("cookies");
//         var articleEl = document.createElement("article");
//         container.appendChild(articleEl);

//         var h1El = document.createElement("h1");
//         articleEl.appendChild(h1El);
//         h1El.textContent = this.name;

//         var ulEl = document.createElement("ul");
//         articleEl.appendChild(ulEl);

//         for (let i = 0; i < hours.length; i++) {
//             var liEl = document.createElement("li");
//             ulEl.appendChild(liEl);
//             liEl.textContent = hours[i] + '  :' + this.cookiesPerHoursArr[i] + ' ~ cookies';
//         }
//         var totalLi = document.createElement("li");
//         ulEl.appendChild(totalLi);
//         totalLi.textContent = 'Total is: ' + this.totalArr + ' ~ cookies';

//     }
// };

// Paris.randomCustomer();
// Paris.cookiesPerHours();
// Paris.render();
