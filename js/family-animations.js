window.onload = () =>{
    anime({
        targets: '#a6-image',
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
        targets: '#a6-text',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }
        ],
        delay: 1000
    });
    anime({
        targets: '#a6-article',
        opacity:[
            {
                value: 1,
                easing: 'linear',
            }],
    });
};

function animate_content(clicked_id){
    if(clicked_id === "a6"){
        var title = document.getElementById('a6-text');
        var article = document.getElementById('a6-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#a6-image',
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
            targets: '#a6-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#a6-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }],
        });
    }
    if(clicked_id === 'arteon') {
        title = document.getElementById('arteon-text');
        article = document.getElementById('arteon-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#arteon-image',
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
            targets: '#arteon-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#arteon-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
    if(clicked_id === 'eclass'){
        title = document.getElementById('eclass-text');
        article = document.getElementById('eclass-article');
        title.style.opacity = '0';
        article.style.opacity = '0';
        anime({
            targets: '#eclass-image',
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
            targets: '#eclass-text',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
            delay: 1000
        });
        anime({
            targets: '#eclass-article',
            opacity:[
                {
                    value: 1,
                    easing: 'linear',
                }
            ],
        });
    }
}
