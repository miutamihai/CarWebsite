let animation = anime({
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

animation = anime({
   targets: '#golf-text',
   opacity:[
       {
           value: 1,
           easing: 'linear',
       }
   ],
    delay: 1000
});


window.onscroll = myScroll;
var counter = 0; // Global Variable
var counter1 = 0;
var counter2 = 0;

function myScroll(){
    const val = document.getElementById("bottom2");
    //val.innerHTML = 'pageYOffset = ' + window.pageYOffset;
    if(counter === 0){ // if counter is 1, it will not execute
        if(window.pageYOffset > 100){
            anime({
                targets: '#golf8article',
                opacity:[
                    {
                        value: 1,
                        easing: 'linear',
                    }
                ],
            });
        }
        if(window.pageYOffset > 500){
            anime({
                targets: '#right-picture-golf',
                translateX:[
                    {
                        value: 1000,
                        duration: 100,
                    },
                    {
                        value: 0,
                        duration: 2000,
                    }
                ],
            });
            anime({
                targets: '#left-picture-golf',
                translateX:[
                    {
                        value: -1000,
                        duration: 100,
                    },
                    {
                        value: 0,
                        duration: 2000,
                    }
                ],
            });
            counter++; // increment the counter by 1, new value = 1
        }
    }
    if(counter1 === 0){
        if(window.pageYOffset > 1100){
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
            counter1++;
        }
    }
    if(counter1 === 1) {
        if(window.pageYOffset > 1700) {
            anime({
                targets: '#right-picture-clio',
                translateX: [
                    {
                        value: 1000,
                        duration: 100,
                    },
                    {
                        value: 0,
                        duration: 2000,
                    }
                ],
            });
            anime({
                targets: '#left-picture-clio',
                translateX: [
                    {
                        value: -1000,
                        duration: 100,
                    },
                    {
                        value: 0,
                        duration: 2000,
                    }
                ],
            });
            counter1++;
        }
    }
    if(counter2 === 0){
        if(window.pageYOffset > 2000){
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
            counter2 ++;
        }
        if(counter2 === 1){
            if(window.pageYOffset > 2800) {
                anime({
                    targets: '#right-picture-mercedes',
                    translateX: [
                        {
                            value: 1000,
                            duration: 100,
                        },
                        {
                            value: 0,
                            duration: 2000,
                        }
                    ],
                });
                anime({
                    targets: '#left-picture-mercedes',
                    translateX: [
                        {
                            value: -1000,
                            duration: 100,
                        },
                        {
                            value: 0,
                            duration: 2000,
                        }
                    ],
                });
                counter2++;
            }
        }
    }
}
