// Variables for table body search
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#date");
var $cityInput = document.querySelector("#city");
var $stateInput = document.querySelector("#state");
var $countryInput = document.querySelector("#country");
var $shapeInput = document.querySelector("#shape");
var $searchBtn = document.querySelector("#search");
$searchBtn.addEventListener("click", handleSearchButtonClick);
// Filter data
var filteredData = dataSet;
function renderTable() {
  $tbody.innerHTML = "";
  for (var i = 0; i < filteredData.length; i++) {
    var ufodata = filteredData[i];
    var fields = Object.keys(ufodata);
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {
      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = ufodata[field];
    }
  }
}
// Search button
function handleSearchButtonClick() {
  var filterDate = $dateInput.value.trim();
  if (filterDate != "") {
    filteredData = dataSet.filter(function (ufodata) {
      var sightingDate = ufodata.datetime;
      return sightingDate.includes(filterDate);
    });
  };
  var filterCity = $cityInput.value.trim().toLowerCase();
  if (filterCity != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var sightingCity = ufodata.city;
      return sightingCity === filterCity;
    });
  };
  var filterState = $stateInput.value.trim().toLowerCase();
  if (filterState != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var sightingState = ufodata.state;
      return sightingState === filterState;
    });
  };
  var filterCountry = $countryInput.value.trim().toLowerCase();
  if (filterCountry != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var sightingCountry = ufodata.country;
      return sightingCountry === filterCountry;
    });
  };
  var filterShape = $shapeInput.value.trim().toLowerCase();
  if (filterShape != "") {
    filteredData = filteredData.filter(function (ufodata) {
      var sightingShape = ufodata.shape;
      return sightingShape === filterShape;
    });
  };
  renderTable();
};
renderTable();