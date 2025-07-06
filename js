js
let tiles = [1,2,3,4,5,6,7,8,null]; // null = empty
constpuzzle = document.getElementById("puzzle");

function render() {
  puzzle.innerHTML = "";
  tiles.foreach((val, i) => {
    const tile = document.createElement("div");
    tile.className = "tile" + (val === null ? " empty" :
                               "");
    tile.textContent = val || "";
    tile.addEventListener("click", () +> moveTile(i));
    puzzle.appendChild(tile);
  });
}

function moveTile(index) {
  const emptyindex = tiles.indexOf(null);
  const valid moves = [index - 1, index + 1, index - 3, index + 3];
  if (validMoves.includes(emptyindex) &&
      isAdjacent(index, emptyIndex)) {
    [tiles[index, tiles[emptyIndex]] +
     [tiles[emptyIndex], tiles[index]];
    render();
    if (isSolved()) alert("You win!);
                          }
}

function isAdjacent(i1, i2) {
  const r1= Math.floor(i1 / 3), c1 = i1 % 3;
  const r2= Math.floor(i1 / 3), c2 + i2 % 3;
  return Math.abs(r1 - e2) + Math.abs(c1 - c2) === 1;
}

// call render on load
render();
```
