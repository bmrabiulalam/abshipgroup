const typingEffect = () => {
    var i = 0;
    var txt = document.getElementById("typing-effect-text").innerHTML; /* The text */
    var speed = 60; /* The speed/duration of the effect in milliseconds */
    document.getElementById("typing-effect-text").innerHTML = '';

    function typeWriter() {
        if (i < txt.length) {
            document.getElementById("typing-effect-text").innerHTML += txt.charAt(i);
            i++;
            setTimeout(typeWriter, speed);
        }
    }

    typeWriter();
}

setInterval(() => {
    typingEffect();
}, 12*1000);