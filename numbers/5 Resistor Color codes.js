function encodeResistorColors(ohmsString) {
  let codes = {
    0: 'black',
    1: 'brown',
    2: 'red',
    3: 'orange',
    4: 'yellow',
    5: 'green',
    6: 'blue',
    7: 'violet',
    8: 'gray',
    9: 'white'
  }
  let value = ohmsString.split(" ")[0];
  
  let numValue;
  if(value.includes('k')) {
    numValue = parseFloat(value) * 1000;
  } else if(value.includes('M')) {
    numValue = parseFloat(value) * 1000000;
  } else {
    numValue = parseFloat(value);
  }
  let strValue = numValue.toString();
  let firstWord = codes[parseInt(strValue[0])];
  let secondWord = codes[parseInt(strValue[1])];
  
  let divisor = parseInt(strValue.substr(0,2));

  let ending = codes[parseInt(Math.log10(numValue/divisor))]
  return `${firstWord} ${secondWord} ${ending} gold`
}