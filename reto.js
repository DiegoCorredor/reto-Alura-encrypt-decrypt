function encryptValue() {
    const text = document.getElementById("txtMessage")
    const result = encrypt(text.value)
    const response = document.getElementById("txtResponse")
    response.value = result
    text.value = ""
}

function decryptValue() {
    const text = document.getElementById("txtResponse")
    const result = decrypt(text.value)
    const response = document.getElementById("txtMessage")
    response.value = result
    text.value = ""
}

function encrypt(input) {
    const divider = input.split('')
    const letterToWord = {
        "a": "ai",
        "e": "enter",
        "i": "imes",
        "o": "ober",
        "u": "ufat"
    }

    for (var i = 0; i < divider.length; i++) {
        if (letterToWord[divider[i]]) {
            divider[i] = letterToWord[divider[i]]
        }
    }
    const result = divider.join('')
    return result
}

function decrypt(input) {
    const wordToLetter = {
        "ai": "a",
        "enter": "e",
        "imes": "i",
        "ober": "o",
        "ufat": "u"
    }
    let decrypted = ""
    let i = 0
    while (i < input.length) {
        let foundMatch = false
        for (let word in wordToLetter) {
            if (input.startsWith(word, i)) {
                decrypted += wordToLetter[word]
                i += word.length
                foundMatch = true
                break
            }
        }
        if (!foundMatch) {
            decrypted += input[i]
            i++
        }
    }
    return decrypted
}

function reset() {
    window.location.reload()
}