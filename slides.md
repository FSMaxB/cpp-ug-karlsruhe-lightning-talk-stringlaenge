class: center, middle

# Stringlänge

---

# Wie lange ist "hello"

--

## 5 ASCII Zeichen

--

## 5 Unicode Codepoints

--

## 5 UTF-8/ASCII/Latin-1 Bytes

--

## 10 UTF-16 Bytes

--

## 20 UTF-32 Bytes

--

## 45 Pixel (Font X, Größe Y)

---

# Wie lange ist "👩🏾‍💻"

--

## Einmal Backspace

--

* (hoffentlich)

--

## 4 Unicode Codepoints
* `U+1F469` 👩, `U+1F3FE` 🏾, `Ux200D` ZWJ, `U+1F4BB` 💻

--

## 15 Bytes UTF-8

--

## 14 Bytes UTF-16

--

## 32 Pixel (Font X, Größe Y)

---

# Wie lange ist "é"

--

## Einmal Backspace

--

## 1 Unicode Codepoint?

--

* `U+e9` é

--

## 2 Unicode Codepoints?

--

* `U+65` e, `U+301` ◌́

---

# Bonusfolien

---

# Sind diese zwei Strings gleich?
## "isocpp.org" und "iѕocpp.org"

--

## Nein!

--

### `U+455` i

---

## UTF-8

* 1 Byte: `0xxxxxxx` (ASCII)
* 2 Byte: `110xxxxx 10xxxxxx`
* 3 Byte: `1110xxxx 10xxxxxx 10xxxxxx`
* 2 Byte: `11110xxx 10xxxxxx 10xxxxxx 10xxxxxx`

---

## UTF-16

* **1 Code-Unit:** 1 zu 1 Abbildung **Codepoint -> Code-Unit**
* **2 Code-Units:** Sogenanntes **Surrogate Pair**
	* `U+10000` - `U+10FFFF`
	* Reservierte Codepoints für Surrogate Pairs: `U+D800` - `U+DFFF`
* **Surrogate Pair:**
	* `1101 10xx xxxx xxxx`
	* `1101 11xx xxxx xxxx`
