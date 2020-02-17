window.onload = () =>{
    anime({
        targets: '#abarth-image',
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
        targets: '#abarth-text',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }
        ],
        delay: 1000
    });
    anime({
        targets: '#abarth-article',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }],
    });
};

function animate_content(clicked_id){
    if(clicked_id === "abarth"){
        var title = document.getElementById('abarth-text');
        var article = document.getElementById('abarth-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#abarth-image',
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
            targets: '#abarth-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#abarth-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }],
        });
    }
    if(clicked_id === 'suzuki') {
        title = document.getElementById('suzuki-text');
        article = document.getElementById('suzuki-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#suzuki-image',
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
            targets: '#suzuki-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#suzuki-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
    if(clicked_id === 'tcross'){
        title = document.getElementById('tcross-text');
        article = document.getElementById('tcross-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#tcross-image',
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
            targets: '#tcross-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#tcross-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
}
