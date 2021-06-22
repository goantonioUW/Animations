var rotatingSquare = document.getElementById('web-animation').animate(
    [
        {backgroundColor: 'black', opacity: 1, transform: 'rotate(0deg) translate3D(0, 0, 0)'},
        {backgroundColor: 'red', opacity: .3},
        {backgroundColor: 'wheat', opacity: 1, transform: 'rotate(360deg) translate3D(0, 0, 0)'}
    ],
    {
        duration: 500,
        iterations: Infinity,
        easing: 'ease-in-out'
    }
);
