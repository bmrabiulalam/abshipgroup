/* Typing text start */
const typingEffect = () => {
    var i = 0;
    var typingTextArea = document.getElementById("typing-effect-text");
    var txt = typingTextArea.innerHTML; /* The text */
    var speed = 60; /* The speed/duration of the effect in milliseconds */
    typingTextArea.innerHTML = ''; // clear the text area

    function typeWriter() {
        if (i < txt.length) {
            typingTextArea.innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

setInterval(() => {
    typingEffect();
}, 12*1000);
/* Typing text end */


/* Goto Top Button start */
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    //Get the button
    var mybutton = document.getElementById("myBtn");

    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
/* Goto Top Button end */
