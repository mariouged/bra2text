# bra2text
Braille ASCII to text

## usage
See the `usage.js` full example

```javascript
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
```
