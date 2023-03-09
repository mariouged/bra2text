import { bra2asciiDictionary, braNumbers2asciiDictionary } from './dictionaries/bra2asciiDictionary.js'

export function bytesBra2bytesAscii(bytesBra) {
  const bytesAscii = []
  
  for(let i = 0; i < bytesBra.length; i++) {
    let currentByteBra = bytesBra[i]
    const nextBraByte = bytesBra[1 + i]

    if (currentByteBra > 127) {
      // non ASCII, is UTF-8, same byte
      bytesAscii.push(currentByteBra)
    } else if (35 === currentByteBra && braNumbers2asciiDictionary[nextBraByte]) {
      // # Number is prefix number, begin number
      // convert next to Number
      currentByteBra = bytesBra[++i]
      while(braNumbers2asciiDictionary[currentByteBra]) {
        bytesAscii.push(braNumbers2asciiDictionary[currentByteBra] || currentByteBra)
        currentByteBra = bytesBra[++i]
      }
      if (currentByteBra) {
        bytesAscii.push(bra2asciiDictionary[currentByteBra] || currentByteBra)
      }
    } else if (40 === currentByteBra && 35 === nextBraByte) {
      // ( Left parenthesis and # Number
      bytesAscii.push(currentByteBra)
    } else if (
      123 === currentByteBra
      && nextBraByte
      && bra2asciiDictionary[currentByteBra+'-'+nextBraByte]) {
      // { Left curly bracket is prefix Capital letters
      // convert to Capital
      bytesAscii.push(bra2asciiDictionary[currentByteBra+'-'+nextBraByte])
      i++
    } else if (
      ( 
        37 === currentByteBra || // % Percent could be prefix modificator
        46 === currentByteBra || // . Period could be prefix modificator
        95 === currentByteBra || // _ Underscore could be prefix modificator
        64 === currentByteBra    // @ At sign could be prefix modificator
      ) && 32 !== nextBraByte // space Space
        && bra2asciiDictionary[currentByteBra+'-'+nextBraByte]
    ) {
      bytesAscii.push(bra2asciiDictionary[currentByteBra+'-'+nextBraByte])
      i++
    } else {
      // default
      bytesAscii.push(bra2asciiDictionary[currentByteBra] || currentByteBra)
    }

  }

  return bytesAscii
}

export function strBra2strAscii(strBra) {
  let strAscii = ''
  const bytesBra = []
  for(let i = 0; i < strBra.length; i++) {
    bytesBra.push(strBra.charCodeAt(i))
  }
  const bytesAscii = bytesBra2bytesAscii(bytesBra)
  for(let i = 0; i < bytesAscii.length; i++) {
    const byte = bytesAscii[i]
    strAscii += String.fromCharCode(byte)
  }

  return strAscii
}
