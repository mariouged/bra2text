import assert from 'node:assert';
import { readFile, writeFile, writeFileSync } from 'node:fs';
import { strBra2strAscii, bytesBra2bytesAscii } from "./index.js"

function simpleTest(Scenario, input, expected) {
  console.log(`Scenario ${Scenario}`)
  const actual = strBra2strAscii(input)
  assert.equal(actual, expected)
}

const dataProvider = [
  [
    'Small letters',
    'abcdefghijklmnopqrstuvwxyz',
    'abcdefghijklmnopqrstuvwxyz'
  ],
  [
    'Capital letters',
    '{a{b{c{d{e{f{g{h{i{j{k{l{m{n{o{p{q{r{s{t{u{v{w{x{y{z',
    'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  ],
  [
    'Fault tolerance bracket and Capital not convert',
    '{W{R{O{N{G {upper case',
    '{W{R{O{N{G Upper case'
  ],
  [
    'Numbers from one to zero',
    '#a #b #c #d #e #f #g #h #i #j',
    '1 2 3 4 5 6 7 8 9 0'
  ],
  [ 'Number simple', '#abc', '123' ],
  [ 'Number together from one to zero', '#abcdefghij', '1234567890' ],
  [ 'Number with repeats', '#iiihhhggg', '999888777' ],
  [ 'Number with decimals', '#be.gj', '25.70' ],
  [ 'Number with thousan separator', '#abc,def', '123,456' ],
  [ 'Number with thousan separator and decimals', '#def,ghi.ab', '456,789.12' ],
  [ 
    'Sentence with capital and spaces',
    '{louis {braille was a {french educator and the inventor of a reading and writing system',
    'Louis Braille was a French educator and the inventor of a reading and writing system'
  ],
  [
    'Sentence with words and numbers',
    '{braille numbers has a prefix #cdef braille {c{h{a{r and it is braille dots #jjaaaa',
    'Braille numbers has a prefix 3456 braille CHAR and it is braille dots 001111'
  ],
  [ 'Spanish accents in small chars, acute', '( $ / 0 ) 8', 'á é í ó ú ü'],
  [ 'Spanish accents in Capital chars, acute', '{( {$ {/ {0 {) {8', 'Á É Í Ó Ú Ü' ],
  [
    'Spanish sentence with capital, numbers and accents',
    '{volver(n los p(jaros entre el #d 0 #e de abril.',
    'Volverán los pájaros entre el 4 ó 5 de abril.'
  ],
  [ 'Spanish n tilde', '7 {7', 'ñ Ñ' ],
  [ 'Catalonia cedilla', '& {&', 'ç Ç' ],
  [
    'French accents circumflex. Without ê conflict with spanish á ( Left parenthesis',
    '1 3 4 5 {1 {2 {3 {4 {5',
    'â î ô û Â Ê Î Ô Û'
  ],
  ['Special char º ordinal male', '.o', 'º'],
  ['Special char ª ordinal female', '.a', 'ª'],
  ['Special char \ Backslash', '\\', '\\'],
  ['Special char ! Exclamation mark', '+', '!'],
  ['Special char | Vertical bar', '%', '|'],
  ['Special char " Double quote', '<', '"'],
  ['Special char @ At sign', '@', '@'],
  ['Special char $ Dollar sign', '%s', '$'],
  ['Special char % Percent', '%>', '%'],
  ['Special char & Ampersand', '_&', '&'],
  ['Special char ( Left parenthesis', '2', '('],
  ['Special char ) Right parenthesis', '|', ')'],
  ['Special char = Equality sign', '=', '='],
  ['Special char ? Question mark', '?', '?'],
  ['Special char ^ Caret / circumflex', '^', '^'],
  ['Special char < Less than', '9', '<'],
  ['Special char , Comma', ',', ','],
  ['Special char ; Semicolon', ';', ';'],
  ['Special char . Period', '.', '.'],
  ['Special char : Colon', ':', ':'],
  ['Special char - Minus', '-', '-'],
  ['Special char _ Underscore', '_', '_'],
  ['Special char { Left curly bracket', '@l', '{'],
  ['Special char } Right curly bracket', '%,', '}'],
  ['Special char / Slash', '_,', '/'],
]

/** run all test from data provider */
for (const test of dataProvider) {
  simpleTest(test[0], test[1], test[2])
}


/** Usage file braille to text ISO-8859 */
function fileBra2textIso8859(path) {

  readFile(path, (err, bytesBra) => {
    if (err) throw err
    
    const bytesAscii = bytesBra2bytesAscii(bytesBra)
    
    const fileDest = path.slice(0, -4)+'-8859.txt'
    const data = Buffer.from(bytesAscii)
    writeFile(fileDest, data, (err) => {
      if (err) throw err
    })
    
  })
}

fileBra2textIso8859('./debug/example-braille-ascii.bra')

/** Usage file braille to text utf8 */
async function fileBra2textUtf8(path) {

  readFile(path, (err, bytesBra) => {
    if (err) throw err
    
    const bytesAscii = bytesBra2bytesAscii(bytesBra)
    
    let strAscii = ''
    for(let i = 0; i < bytesAscii.length; i++) {
      const byte = bytesAscii[i]
      strAscii += String.fromCharCode(byte)
    }

    const fileDest = path.slice(0, -4)+'-utf8.txt'
    try {
      writeFileSync(fileDest, strAscii)
    } catch (err) {
      console.error(err)
      throw err
    }
    
  })
}

fileBra2textUtf8('./debug/example-braille-ascii.bra')

/** Real test */
fileBra2textUtf8('./examples/bra-files/0327499-001.bra')
