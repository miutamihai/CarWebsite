window.onload = () =>{
    anime({
        targets: '#golf-image',
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
        targets: '#golf-text',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }
        ],
        delay: 1000
    });
    anime({
        targets: '#golf8article',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }],
    });
};

function animate_content(clicked_id){
    if(clicked_id === "golf"){
        var title = document.getElementById('golf-text');
        var article = document.getElementById('golf8article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#golf-image',
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
            targets: '#golf-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#golf8article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }],
        });
    }
    if(clicked_id === 'clio') {
        title = document.getElementById('clio-text');
        article = document.getElementById('clioarticle');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#clio-image',
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
            targets: '#clio-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#clioarticle',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
    if(clicked_id === 'mercedes'){
        title = document.getElementById('mercedes-text');
        article = document.getElementById('mercedes-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#mercedes-image',
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
            targets: '#mercedes-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#mercedes-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
}
