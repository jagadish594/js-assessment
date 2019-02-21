recursionAnswers = {
  /**
   * List the files in a given directory, of a filesystem described by data.
   * Data is an object that looks like this:
   * {
      dirName: 'app',
      files: ['index.html', 'page.html'],
      subDirs: [{...}]
      }
   *
   * Where ... is the same type of object
   * 
   * @param {fileSystemObject} data - a file system object as described above
   * @param {String} dirName - a directory name the files are desired to be listed from.
   * Note: This parameter is optional. If it is not provided, list ALL files.
   * 
   * @returns {Number[]} The files under the directory dirName, including subdiretories.
   */

  listFiles: function listFiles(data, dirName) {
    const fileNameArr = [];
    if(arguments[1]){
      let dataArr2 = [];
      if(!Array.isArray(data))
        dataArr2 = [data];
      else dataArr2 = data;
      function returnDir(dataArr2){
        dataArr2.forEach(function(e){
          if(e.dirName === dirName){
            fileNameArr.push(e.files);
            data = e.subDirs;
          } 
          else{
            returnDir(e.subDirs);
          }
        });
      }
      returnDir(dataArr2);
    } 

    function recur(data){
      let dataArr = [];
      if(!Array.isArray(data))
        dataArr = [data];
      else dataArr = data;
      dataArr.forEach(element =>{
        if(element.files){
          fileNameArr.push(element.files);
        }
        if(element.subDirs && !(element.subDirs === undefined || element.subDirs.length == 0)){
          recur(element.subDirs);
        }
      });
    }
    recur(data);
    return fileNameArr.flat();
  },

  /**
   * Determines the fibonacci number at position n.
   * https://en.wikipedia.org/wiki/Fibonacci_number
   * 
   * The first few fibonacci numbers are: 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
   * 
   * @param {Number} n - the index of the fibonacci number desired
   * @returns {Number} The nth fibonacci number
   */
  fibonacci: function fibonacci(n) {
    if(n===1 || n===2)
      return 1;
    else{
      return fibonacci(n-1) + fibonacci(n-2);  
    }
  },
};
