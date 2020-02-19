window.onload = () =>{
    anime({
        targets: '#g-image',
        translateX:[
            {
                value: 1000,
                duration: 100,
            },
            {
                value: 0,
                duration: 2000,
            }
        ]
    });
    anime({
        targets: '#g-text',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }
        ],
        delay: 1000
    });
    anime({
        targets: '#g-article',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }],
    });
};

function animate_content(clicked_id){
    if(clicked_id === "g"){
        var title = document.getElementById('g-text');
        var article = document.getElementById('g-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#g-image',
            translateX:[
                {
                    value: 1000,
                    duration: 100,
                },
                {
                    value: 0,
                    duration: 2000,
                }
            ]
        });
        anime({
            targets: '#g-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#g-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }],
        });
    }
    if(clicked_id === 'q8') {
        title = document.getElementById('q8-text');
        article = document.getElementById('q8-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#q8-image',
            translateX:[
                {
                    value: 1000,
                    duration: 100,
                },
                {
                    value: 0,
                    duration: 2000,
                }
            ]
        });
        anime({
            targets: '#q8-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#q8-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
    if(clicked_id === 'stelvio'){
        title = document.getElementById('stelvio-text');
        article = document.getElementById('stelvio-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#stelvio-image',
            translateX:[
                {
                    value: 1000,
                    duration: 100,
                },
                {
                    value: 0,
                    duration: 2000,
                }
            ]
        });
        anime({
            targets: '#stelvio-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#stelvio-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
}
