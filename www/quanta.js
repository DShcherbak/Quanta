import {compile_code, greet} from '../quanta-lang/pkg/quanta_lang.js'

export function check_good_text(text) {
    /**
    * /**
    * @typedef {Object} Field
    * @property {array[600][420]} x - all field pixels
    * maybe more props in the future
    * 
    * 
    * @param {string} text
    * @returns {Field}
    *  
    * Returns a Field object with state of every pixel in the canvas.
    */

    console.log("check_good_text: " + text);
    let message = compile_code(text);
    let color = 0xff0000;
    if (message == "0\n\n0000") {
        color = 0x00ff00;
    }

    var width = 600;
    var height = 420;
    
    // Create a new 2D array
    var array = [];
    
    // Fill the array with the green color value
    for (var i = 0; i < width; i++) {
      var row = [];
      for (var j = 0; j < height; j++) {

        row.push(color);
      }
      array.push(row);
    }
    return {
      error_code: 0,
      error_message: "",  
      field: array,
    };
}
