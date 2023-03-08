# bra2text
Braille ASCII to text

## usage
```
/** Usage file braille to text ISO-8859 */
function fileBra2textIso8859(path) {

  readFile(path, (err, bytesBra) => {
    if (err) throw err

    const bytesAscii = bytesBra2bytesAscii(bytesBra)

    const fileDest = path.slice(0, -4) + '-8859.txt'
    const data = Buffer.from(bytesAscii)
    writeFile(fileDest, data, (err) => {
      if (err) throw err
    })

  })
}

fileBra2textIso8859('./debug/example-braille-ascii.bra')

```
