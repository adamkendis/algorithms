

var spiralTraversal = function(matrix) {

  var result = [];
  var minRow = 0;
  var maxRow = matrix.length - 1;
  var minCol = 0;
  var maxCol = matrix[0].length - 1;

  while (minRow <= maxRow && minCol <= maxCol) {

    for (var i = minCol; i <= maxCol; i++) {
      result.push(matrix[minRow][i]);
    }
    minRow++;

    for (var j = minRow; j <= maxRow; j++) {
      result.push(matrix[j][maxCol]);
    }
    maxCol--;

    if (minRow <= maxRow) {
      for (var k = maxCol; k >= minCol; k--) {
        result.push(matrix[maxRow][k]);
      }
      maxRow--;
    }

    if (minCol <= maxCol) {
      for (var l = maxRow; l >= minRow; l--) {
        result.push(matrix[l][minCol]);
      }
    }
    minCol++;
  }

  return result;
};