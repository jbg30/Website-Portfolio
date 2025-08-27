document.addEventListener('DOMContentLoaded', function() {
    const typewriterText = document.querySelector('.typewriter-text');
    const words = ['Game Designer ', 'Web Developer '];
    let i = 0; // Word index
    let j = 0; // Character index
    let isDeleting = false;
    let typingSpeed = 150;
    let backspaceSpeed = 100;
    let pauseBeforeBackspace = 500;

    function typeWriter() {
        const currentWord = words[i];
        
        if (isDeleting) {
            // Backspace the word
            typewriterText.innerHTML = currentWord.substring(0, j);
            j--;
            if (j === 0) {
                isDeleting = false; // Switch to typing the next word
                i = (i + 1) % words.length; // Move to the next word in the array (looping)
                setTimeout(typeWriter, pauseBeforeBackspace);
            } else {
                setTimeout(typeWriter, backspaceSpeed);
            }
        } else {
            // Type the word
            typewriterText.innerHTML = currentWord.substring(0, j);
            j++;
            if (j === currentWord.length) {
                isDeleting = true; // Start backspacing after the word is fully typed
                setTimeout(typeWriter, pauseBeforeBackspace);
            } else {
                setTimeout(typeWriter, typingSpeed);
            }
        }
    }

    typeWriter();
});

