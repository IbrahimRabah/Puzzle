var rows = 5;
var columns = 5;
var currTile; //drag
var otherTile;//swapwith
var tries = 0;

//intialize
window.onload = function () {
  for (var r = 0; r < rows; r++) {
    for (var c = 0; c < columns; c++) {
      var tile = document.createElement("img");
      tile.src = "images/blank2.jpg";

      tile.addEventListener("dragstart", function dragStart() {
        currTile = this;
      });
      tile.addEventListener("dragover", function dragOver(e) {
        e.preventDefault();
      });
      tile.addEventListener("dragenter", function dragEnter(e) {
        e.preventDefault();
      });
      tile.addEventListener("dragleave", function dragLeave() {});
      tile.addEventListener("drop", function dragDrop() {
        otherTile = this;
      });
      tile.addEventListener("dragend", function dragEnd() {
        if (currTile.src.includes("blank")) {
          return;
        }
        var currImg = currTile.src;
        var otherImg = otherTile.src;
        currTile.src = otherImg;
        otherTile.src = currImg;

        tries += 1;
        document.getElementById("tries").innerText = tries;
      });

      document.getElementById("board").append(tile);
    }
  }

  var pieces = [];
  for (var i = 1; i <= rows * columns + 1; i++) {
    pieces.push(i.toString()); //put name of imges from 1 to 25  
  }
  pieces.reverse(); //swap
  for (var i = 0; i < pieces.length; i++) {
    var j = Math.floor(Math.random() * pieces.length);

    var tmp = pieces[i];
    pieces[i] = pieces[j];
    pieces[j] = tmp;
  }

  for (var i = 0; i < pieces.length; i++) {
    var tile = document.createElement("img");
    tile.src = "./images/" + pieces[i] + ".jpg";

    tile.addEventListener("dragstart", function dragStart() { //click on element to drag
      currTile = this;
    });
    tile.addEventListener("dragover", function dragOver(e) { // after click move with the img
      e.preventDefault();
    });
    tile.addEventListener("dragenter", function dragEnter(e) { // drag an img into anthor one 
      e.preventDefault();
    });
    tile.addEventListener("dragleave", function dragLeave() {}); // away from anthor one 
    tile.addEventListener("drop", function dragDrop() { //drop an img into another one 
      otherTile = this;
    });
    tile.addEventListener("dragend", function dragEnd() { //after all the process
      if (currTile.src.includes("blank")) {
        return;
      }
      var currImg = currTile.src;
      var otherImg = otherTile.src;
      currTile.src = otherImg;
      otherTile.src = currImg;

      tries += 1;
      document.getElementById("tries").innerText = tries;
    });

    document.getElementById("pieces").append(tile);
  }
};
