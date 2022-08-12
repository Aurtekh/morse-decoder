const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrMorz = [];
    let decode = [];
    let arrBin = [];
    let result = '';
    let i = 0;
    for (let i = 0; i < expr.length; i += 10) {
      arrBin.push(expr.slice(i, i + 10));
    }
     for (let i = 0; i < arrBin.length; i++) {
       for (let j = 0; j < arrBin[i].length; j +=2) {
          if (arrBin[i][j] === '1' && arrBin[i][j+1] === '0') {
        arrMorz += '.'
      }
          if (arrBin[i][j] === '1' && arrBin[i][j+1] === '1') {
        arrMorz += '-'
      }
         if (arrBin[i][j] === '*') {
           arrMorz += ' ';
  
         }
       }
       decode.push(arrMorz);
       arrMorz = [];
    }
    for (let i = 0; i < decode.length; i++) {
      if (decode[i] === '     ') {
        result += ' ';
      } else result += MORSE_TABLE[decode[i]];
    }
    return result
}

module.exports = {
    decode
}