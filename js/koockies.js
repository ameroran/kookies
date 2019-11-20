'use strict'

var stores = [];
var form = document.getElementById("Storesform");

var container = document.getElementById("cookies");
var tableEl = document.createElement("table");
container.appendChild(tableEl);

// var totals =[];
var hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

function Store(name, min, max, avgCoockies) {
    this.name = name;
    this.max = max;
    this.min = min;
    this.avgCoockies = avgCoockies;
    this.cookiesPerHoursArr = [];
    this.total = 0;

    this.cookiesPerHours();

    stores.push(this);

}



Store.prototype.randomCustomer = function () {

    return Math.ceil(Math.random() * (this.max - this.min + 1)) + this.min;

}


Store.prototype.cookiesPerHours = function () {

    for (var j = 0; j < hours.length; j++) {
        this.cookiesPerHoursArr.push(Math.ceil(this.randomCustomer() * this.avgCoockies));
        this.total = this.cookiesPerHoursArr[j] + this.total;
    };

}
function handleSubmit(event){
    event.preventDefault();
    var name= event.target.name.value;
    var min= parseInt(event.target.min.value);
    var max= parseInt(event.target.max.value);
    var avg= parseFloat(event.target.avg.value);
    var newstore= new Store(name,min,max,avg);
    
    // stores.push(newstore);
    
    var rowCount = tableEl.rows.length;
    tableEl.deleteRow(rowCount -1);
    

    newstore.render();
    renderFooter();
    form.reset();
}


form.addEventListener('submit', handleSubmit);
// renderFooter();

function renderHeader() {

    var trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = " ";
    for (let i = 0; i < hours.length; i++) {
        var thEl = document.createElement("th");
        trEl.appendChild(thEl);
        thEl.textContent = hours[i];

    }
    var thEl = document.createElement("th");
    trEl.appendChild(thEl);
    thEl.textContent = "Totals";

}

Store.prototype.render = function() {

    var trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = this.name;

    for (var i = 0; i < hours.length; i++) {
        var tdEl = document.createElement("td");
        tdEl.textContent = this.cookiesPerHoursArr[i];
        trEl.appendChild(tdEl);
    }
    var totalTdEl = document.createElement("td");
    trEl.appendChild(totalTdEl);
    totalTdEl.textContent = this.total;
};

var seattle = new Store("Seattle", 23, 65, 6.3);
var tokyo = new Store("Tokyo", 3, 24, 1.2);
var dubai = new Store("Dubai", 11, 38, 3.7);
var paris = new Store("Paris", 20, 38, 2.3);
var lima = new Store("Lima", 2, 16, 4.6);




  function renderFooter() {
    var trEl = document.createElement("tr");
    tableEl.appendChild(trEl);
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = "Total";

    var megaTotal = 0;
    for (let i = 0; i < hours.length; i++) {
      var sum = 0;
      for (let j = 0; j < stores.length; j++) {
        sum += stores[j].cookiesPerHoursArr[i];
      }
      megaTotal += sum;
      var tdEl = document.createElement("td");
      trEl.appendChild(tdEl);
      tdEl.textContent = sum;
    }
    var tdEl = document.createElement("td");
    trEl.appendChild(tdEl);
    tdEl.textContent = megaTotal;
  }

renderHeader();


seattle.render();
tokyo.render();
paris.render();
lima.render();
dubai.render();

renderFooter();

