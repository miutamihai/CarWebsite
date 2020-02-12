let animation = anime({
    targets: '.front-image',
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
   targets: '.centered',
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

function myScroll(){
    const val = document.getElementById("bottom");
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
                targets: '.right-picture',
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
                rotate:{
                    value: '2turn',
                    easing: 'easeInOutSine',
                    delay: 100
                }
            });
            anime({
                targets: '.left-picture',
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
                rotate:{
                    value: '2turn',
                    easing: 'easeInOutSine',
                    delay: 100
                }
            });
            counter++; // increment the counter by 1, new value = 1
        }
    }
}
