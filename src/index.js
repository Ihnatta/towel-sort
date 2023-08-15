
// You should implement your task here.

module.exports = function towelSort (matrix) {
  const arr = matrix;
  
 if (String(arr).length === 0  || matrix === undefined){ return [];}
 if (String(arr).length !== 0)
  {
    arr.reduce((acc, cur, i) => {
      cur.sort((a, b) => !(i & 1) ? a - b : b - a).map(e => acc.push(e));
      
      return acc;
    }, []);return arr.flat();
 }
}