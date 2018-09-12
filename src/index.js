/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {

  let arrHelp = [];

  preferences.unshift("Пустота");

  for (let i = 1; i < preferences.length; i++) {
    if (i == preferences[preferences[preferences[i]]]) {	
      arrHelp = [...arrHelp,
                  preferences[i], 
                  preferences[preferences[i]], 
                  preferences[preferences[preferences[i]]]
                ];
    }
  };

  arrHelp = arrHelp.sort(function(a, b) {
    return a - b;
  })

  for (let k = 0; k < arrHelp.length; k++) {
    if (arrHelp[k] == arrHelp[k+1]) {
      arrHelp.splice(k, 1);
      k = -1;
    }
  };

  let count = Math.floor(arrHelp.length/3);
  return count;
};
