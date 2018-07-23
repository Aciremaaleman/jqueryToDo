alert('hola');

var $newItem;
var $arrayList = [];
var $sectionList = ("#new-list");
var $itemTemplate;
var $elementText;

$(document).ready(function() {
   $("#add-list").click(function() {
      $newItem = $("#input-list").val();
      $("#input-list").val('');
      $arrayList.push($newItem);
      storage($arrayList);
    });
});

function storage($arrayList) {
    localStorage.setItem('todos', JSON.stringify($arrayList));
    var $getItems = JSON.parse(localStorage.getItem('todos'));
    addToList($getItems)
}

function addToList($getItems) {
    $getItems.forEach(element => {
       $elementText = element;
    });
    
    var $divRow = $("<div />", {
        "class" : "row"});
    
    var $firstDiv = $("<div />", {
        "class": "col-sm-5 col-sm-offset-3 col-lg-5 col-lg-offset-3"});
    
    var $secondDiv = $("<div />", {
        "class" : "panel-body",});

    var $thirdDiv = $("<div />", {
        "class" : "pabel-body"});

    var $parragraph = $("<p />");
    $parragraph.text($elementText);

    $divRow.append($firstDiv);
    $firstDiv.append($secondDiv);
    $secondDiv.append($thirdDiv);
    $thirdDiv.append($parragraph);

    $("#new-list").prepend($firstDiv);
  };

 


