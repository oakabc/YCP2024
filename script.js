document.getElementById('colorButton').addEventListener('click', function() {
    const colors = ['#f0f8ff', '#faebd7', '#ffe4c4', '#ffebcd', '#ffefd5'];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});


