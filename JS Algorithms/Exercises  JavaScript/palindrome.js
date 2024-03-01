// prende il norme, lo scompone, lo inverte, lo ricompone, se risulta uguale al nome iniziale, riportare true, sennò false


function checkPalindrome(name) {
    let reversedName = name.split('').reverse().join('');
    if (reversedName === name) {
        console.log('Palindrome');
    } else {
        console.log('Non palindrome');
    }
}

let name = prompt('Inserisci una parola:');
checkPalindrome(name);