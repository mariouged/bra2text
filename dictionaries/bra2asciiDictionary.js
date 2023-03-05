
export const braNumbers2asciiDictionary = {
  35: 35, // # Number is prefix number, begin number
  44: 44, // , Comma
  46: 46, // . Period
  97: 49, // #a is 1 One
  98: 50, // #b is 2 Two
  99: 51, // #c is 3 Three
  100: 52, // #d is 4 Four
  101: 53, // #e is 5 Five
  102: 54, // #f is 6 Six
  103: 55, // #g is 7 Seven
  104: 56, // #h is 8 Eight
  105: 57, // #i is 9 Nine
  106: 48, // #j is 0 Zero
}

export const bra2asciiDictionary = {
  0: 0, // NUL Null
  1: 1, // SOH Start of Header
  2: 2, // STX Start of Text
  3: 3, // ETX End of Text
  4: 4, // EOT End of Transmission
  5: 5, // ENQ Enquiry
  6: 6, // ACK Acknowledge
  7: 7, // BEL Bell
  8: 8, // BS Backspace
  9: 9, // HT Horizontal Tab
  10: 10, // LF Line Feed
  11: 11, // VT Vertical Tab
  12: 12, // FF Form Feed
  13: 13, // CR Carriage Return
  14: 14, // SO Shift Out
  15: 15, // SI Shift In
  16: 16, // DLE Data Link Escape
  17: 17, // DC1 Device Control 1
  18: 18, // DC2 Device Control 2
  19: 19, // DC3 Device Control 3
  20: 20, // DC4 Device Control 4
  21: 21, // NAK Negative Acknowledge
  22: 22, // SYN Synchronize
  23: 23, // ETB End of Transmission Block
  24: 24, // CAN Cancel
  25: 25, // EM End of Medium
  26: 26, // SUB Substitute
  27: 27, // ESC Escape
  28: 28, // FS File Separator
  29: 29, // GS Group Separator
  30: 30, // RS Record Separator
  31: 31, // US Unit Separator
  32: 32, // space Space
  33: 33, // ! Exclamation mark
  34: 34, // " Double quote
  35: 35, // # Number is prefix number, begin number
  '35-97': 49, // #a is 1 One
  '35-98': 50, // #b is 2 Two
  '35-99': 51, // #c is 3 Three
  '35-100': 52, // #d is 4 Four
  '35-101': 53, // #e is 5 Five
  '35-102': 54, // #f is 6 Six
  '35-103': 55, // #g is 7 Seven
  '35-104': 56, // #h is 8 Eight
  '35-105': 57, // #i is 9 Nine
  '35-106': 48, // #j is 0 Zero
  36: 233, // $ Dollar sign is é small e acute
  37: 124, // % Percent is | Vertical bar
  '37-115': 36, // %s Percent with s small is $ Dollar sign
  '37-62': 37, // %> Percent with > Greater than is % Percent
  '37-101': 36, // %e Percent with e small is € euro
  '37-44': 125, // %, Percent with Comma is } Right curly bracket
  38: 231, // & Ampersand is ç small cedilla
  39: 39, // ' Single quote
  39: 39, // ' Single quote
  40: 225, // ( Left parenthesis is á small a acute
  // 40: 91, // ( Left parenthesis is [ Left square bracket
  41: 250, // ) Right parenthesis is ú small u acute
  42: 42, // * Asterisk
  43: 33, // + Plus is ! Exclamation mark
  44: 44, // , Comma
  45: 45, // - Minus
  46: 46, // . Period
  // 46: 39, // . Period is ' Single quote
  '46-111': 186, // .o dot small o is º ordinal male
  '46-97': 170, // .a dot small a is ª ordinal female
  47: 237, // / Slash is í small i acute
  48: 243, // 0 Zero is ó small o acute
  49: 226, // 1 One is â a circumflex
  50: 40, // 2 Two is ( Left parenthesis
  // 50: 234, // 2 Two is ê e circumflex
  51: 238, // 3 Three is î i circumflex
  52: 244, // 4 Four is ô o circumflex
  53: 251, // 5 Five is û u circumflex
  54: 54, // 6 Six
  55: 241, // 7 Seven is ñ small n tilde
  56: 252, // 8 Eight is ü small u with dieresis
  57: 60, // 9 Nine is < Less than
  58: 58, // : Colon
  59: 59, // ; Semicolon
  60: 34, // < Less than is " Double quote
  // 60: 42, // < Less than is * Asterisk
  61: 61, // = Equality sign
  62: 62, // > Greater than
  63: 63, // ? Question mark is ? Question mark
  //63: 191, // ? Question mark is ¿ open Question mark
  64: 64, // @ At sign
  '64-108': 123, // @l @ At sign and l Small l is { Left curly bracket
  65: 65, // A Capital A
  66: 66, // B Capital B
  67: 67, // C Capital C
  68: 68, // D Capital D
  69: 69, // E Capital E
  70: 70, // F Capital F
  71: 71, // G Capital G
  72: 72, // H Capital H
  73: 73, // I Capital I
  74: 74, // J Capital J
  75: 75, // K Capital K
  76: 76, // L Capital L
  77: 77, // M Capital M
  78: 78, // N Capital N
  79: 79, // O Capital O
  80: 80, // P Capital P
  81: 81, // Q Capital Q
  82: 82, // R Capital R
  83: 83, // S Capital S
  84: 84, // T Capital T
  85: 85, // U Capital U
  86: 86, // V Capital V
  87: 87, // W Capital W
  88: 88, // X Capital X
  89: 89, // Y Capital Y
  90: 90, // Z Capital Z
  91: 91, // [ Left square bracket
  92: 92, // \ Backslash
  93: 93, // ] Right square bracket
  94: 94, // ^ Caret / circumflex
  95: 95, // _ Underscore
  '95-38': 38, // _& Underscore with Ampersand is & Ampersand
  '95-44': 47, // _, Underscore with Comma is / Slash
  96: 96, // ` Grave / accent
  97: 97, // a Small a
  98: 98, // b Small b
  99: 99, // c Small c
  100: 100, // d Small d
  101: 101, // e Small e
  102: 102, // f Small f
  103: 103, // g Small g
  104: 104, // h Small h
  105: 105, // i Small i
  106: 106, // j Small j
  107: 107, // k Small k
  108: 108, // l Small l
  109: 109, // m Small m
  110: 110, // n Small n
  111: 111, // o Small o
  112: 112, // p Small p
  113: 113, // q Small q
  114: 114, // r Small r
  115: 115, // s Small s
  116: 116, // t Small t
  117: 117, // u Small u
  118: 118, // v Small v
  119: 119, // w Small w
  120: 120, // x Small x
  121: 121, // y Small y
  122: 122, // z Small z
  123: 123, // { Left curly bracket is prefix Capital
  '123-97': 65, // A Capital A
  '123-98': 66, // B Capital B
  '123-99': 67, // C Capital C
  '123-100': 68, // D Capital D
  '123-101': 69, // E Capital E
  '123-102': 70, // F Capital F
  '123-103': 71, // G Capital G
  '123-104': 72, // H Capital H
  '123-105': 73, // I Capital I
  '123-106': 74, // J Capital J
  '123-107': 75, // K Capital K
  '123-108': 76, // L Capital L
  '123-109': 77, // M Capital M
  '123-110': 78, // N Capital N
  '123-111': 79, // O Capital O
  '123-112': 80, // P Capital P
  '123-113': 81, // Q Capital Q
  '123-114': 82, // R Capital R
  '123-115': 83, // S Capital S
  '123-116': 84, // T Capital T
  '123-117': 85, // U Capital U
  '123-118': 86, // V Capital V
  '123-119': 87, // W Capital W
  '123-120': 88, // X Capital X
  '123-121': 89, // Y Capital Y
  '123-122': 90, // Z Capital Z
  '123-40': 193, // {( is Á Capital A acute
  '123-36': 201, // {$ is É Capital E acute
  '123-47': 205, // {/ is Í Capital I acute
  '123-48': 211, // {0 is Ó Capital O acute
  '123-41': 218, // {) is Ú Capital U acute
  '123-56': 220, // {8 is Ü Capital U dieresis
  '123-55': 209, // {7 Seven is Ñ Capital N tilde
  '123-38': 199, // {& Ampersand is Ç Capital cedilla
  '123-49': 194, // {1 One is Â A circumflex
  '123-50': 202, // {2 Two is Ê E circumflex
  '123-51': 206, // {3 Three is Î I circumflex
  '123-52': 212, // {4 Four is Ô O circumflex
  '123-53': 219, // {5 Five is Û U circumflex
  124: 41, // | Vertical bar is ) Right parenthesis
  125: 125, // } Right curly bracket
  126: 126, // ~ Tilde
  127: 127, // DEL Delete
}

