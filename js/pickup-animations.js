window.onload = () =>{
    anime({
        targets: '#hilux-image',
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
        targets: '#hilux-text',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }
        ],
        delay: 1000
    });
    anime({
        targets: '#hilux-article',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }],
    });
};

function animate_content(clicked_id){
    if(clicked_id === "hilux"){
        var title = document.getElementById('hilux-text');
        var article = document.getElementById('hilux-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#hilux-image',
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
            targets: '#hilux-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#hilux-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }],
        });
    }
    if(clicked_id === 'ranger') {
        title = document.getElementById('ranger-text');
        article = document.getElementById('ranger-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#ranger-image',
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
            targets: '#ranger-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#ranger-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
    if(clicked_id === 'xclass'){
        title = document.getElementById('xclass-text');
        article = document.getElementById('xclass-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#xclass-image',
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
            targets: '#xclass-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#xclass-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
}
