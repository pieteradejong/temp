function ticTacToe(board, move) {
  // check whether move i,j already made
  if (board[i][j]) {
    return null;
  }

  // calculate score board
  var scores = calcScores(board);

  
  // check row
  // check col
  // if diag, check

  
}

function calcScores(board) {
  var scores = {
    "row1": 0,
    "row2": 0,
    "row3": 0,
    "col1": 0,
    "col2": 0,
    "col3": 0,
    "diag_down": 0,
    "diag_up": 0
  };

  // sum rows
  scores.row1 = Math.sum(board[0]);
  scores.row2 = Math.sum(board[1]);
  scores.row3 = Math.sum(board[2]);

  // sum cols
  scores.col1 = Math.sum(selectCol(board, 0));
  scores.col2 = Math.sum(selectCol(board, 1));
  scores.col3 = Math.sum(selectCol(board, 2));

  function selectCol(board, colNum) {
    var col = [];
    for (var i = 0; i < board.length; i++) {
      var row = board[i];
      col.push(row[colNum]);
    }
    return col;
  }

  // sum diags
  var diag_down = [];
  for (var i = 0; i < board.length; i++) {
    diag_down.push(board[i][i]);
  }
  var diag_up = [];
  for (var j = board.length - 1, i = 0; j >= 0; j++, i--) {
    diag_up.push(board[j][j]);
  }



  return scores;
}

function checkWinner(seq) {
    var first = seq[0];
    for (var i = 1; i < seq.length; i++) {
      if (seq[i] !== seq[0]) {
        return false;
      }
    }
    return seq[0];
}

// -1 = o, 1 = x
var board = [
  [1, -1, 1],
  [1, 1, 1],
  [null, null, null]
];

var board2 = [
  [null, 1, 1],
  [null, null, null],
  [null, null, null]
];


/* tests */

// console.log(checkWinner(["x", "x", "x"])); // "x"
// console.log(checkWinner(["o", "o", "o"])); // "o"
// console.log(checkWinner(["x", null, "x"])); // false

console.log(ticTacToe(board2, 0, 0)); // true
