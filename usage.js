import { readFile, writeFileSync, readdirSync, statSync, existsSync, mkdirSync } from 'node:fs'
import path from 'node:path'
import { bytesBra2bytesAscii } from "./index.js"
//import { bytesBra2bytesAscii } from '@comoelagua.org/bra2text'

/**
 * Usage file braille to text utf8
 */
async function fileBra2textUtf8(sourceFile, destFile) {

  readFile(sourceFile, (err, bytesBra) => {
    if (err) throw err

    const bytesAscii = bytesBra2bytesAscii(bytesBra)

    let contentUtf8 = ''
    for (let i = 0; i < bytesAscii.length; i++) {
      const byte = bytesAscii[i]
      contentUtf8 += String.fromCharCode(byte)
    }

    try {
      writeFileSync(destFile, contentUtf8)
    } catch (err) {
      console.error(err)
      throw err
    }

  })
}

/**
 * Usage directory files braille to text utf8
 */
function dirBra2Text(sourceDir, destDir) {
  try {
    // read all files in dir, NOT recursive
    const sourceFilesNames = readdirSync(sourceDir).map(fileName => {
      return path.join(sourceDir, fileName);
    })

    // mkdir destination dir
    if (!existsSync(destDir)) {
      mkdirSync(destDir)
    }

    for (const sourceFileName of sourceFilesNames) {

      const stats = statSync(sourceFileName);
      if (!stats.isFile()) {
        continue
      }
      if ('.bra' !== path.extname(sourceFileName)) {
        continue
      }

      // destination name with extension txt
      const basename = path.basename(sourceFileName)
      const destName = basename.slice(0, -4) + '.txt'
      const destFileName = path.normalize(destDir + path.sep + destName)

      //console.log(path.normalize(sourceFileName))
      fileBra2textUtf8(sourceFileName, destFileName)

      console.log(path.normalize(destFileName))
    }
  } catch (err) {
    console.error(err)
  }
}

dirBra2Text('./examples/bra-files', './examples/text-files')
