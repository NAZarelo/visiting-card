function startAnime () {
    anime({
        targets: '.header_left',
        keyframes: [
            { scale: 1 },
            { scale: 0.5 },
            { scale: 1.05 },
        ],
        duration: 1000,
        easing: 'linear'
    })
}

startAnime()