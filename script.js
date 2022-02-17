$("#icon_switch").click(function() {
   $('.icon').toggleClass('hide')

})

// 로그인 index
$("#login-button").click(function (event) {
    event.preventDefault();
  
    $('form').fadeOut(500);
    $('.wrapper').addClass('form-success');
  });


//hintpopup
$(document).ready(function () {
    $('.modaloc').on('click', function () {
        $('.modal-wrapper').toggleClass('open');
        // $('.page-wrapper').toggleClass('blur-it');
        return false;
    });
    $('.modal').on('click',function() {
        $('.modal-wrapper').removeClass('open');
        return false;
    });
});


//Switch
    
    document.querySelectorAll('.switch').forEach(elem => {
    elem.addEventListener('click', e => {
        let active = elem.classList.contains('active')
        gsap.to(elem, {
            '--c-background-top': active ? '#75757D' : '#F0F0F0',
            '--c-background-bottom': active ? '#45454C' : '#E9E9E9',
            '--c-background-top-shadow': active ? 'rgba(255, 255, 255, .45)' : '#fff',
            '--c-background-bottom-shadow': active ? 'rgba(0, 0, 0, .3)' : 'rgba(0, 0, 0, .18)',
            '--c-stroke-top': active ? '#262626' : '#E7E7E7',
            '--c-stroke-bottom': active ? '#3D3D43' : '#D0D0D0',
            '--c-inner': active ? '#6D6D6D' : '#EAEAEA',
            '--c-inner-top-shadow': active ? 'rgba(0, 0, 0, .3)' : 'rgba(156, 56, 0, .42)',
            '--c-inner-bottom-shadow': active ? 'rgba(255, 255, 255, .18)' : '#FFF3E5',
            '--c-inner-inset-shadow': active ? 'rgba(0, 0, 0, .14)' : 'rgba(0, 0, 0, .2)',
            '--c-knob-stroke-top': active ? '#515151' : '#cc4528',
            '--c-knob-stroke-bottom': active ? '#acacac' : '#f05f21',
            '--c-knob-inner-top': active ? '#8A8A8A' : '#E94714',
            '--c-knob-inner-middle-top': active ? '#A1A1A1' : '#E85617',
            '--c-knob-inner-middle-bottom': active ? '#B4B4B4' : '#FF7324',
            '--c-knob-inner-bottom': active ? '#BABABA' : '#FF844F',
            '--c-knob-inner-shadow-top': active ? 'rgba(255, 255, 255, .25)' : 'rgba(255, 170, 109, .44)',
            '--c-knob-inner-shadow-bottom': active ? 'rgba(0, 0, 0, .3)' : 'rgba(244, 44, 0, .9)',
            '--c-knob-shadow-1': active ? 'rgba( 7, 7, 37, .16)' : 'rgba(255, 180, 175, .7)',

            '--shine-top-y': active ? '-5px' : '0px',
            '--shine-bottom-y': active ? '0px' : '5px',
            '--knob-inner-shadow-top-y': active ? '2.5px' : '5.5px',
            '--knob-inner-shadow-bottom-y': active ? '-5.5px' : '-1.5px',
            '--knob-shadow-1-y': active ? '20px' : '0px',
            '--knob-shadow-1-blur': active ? '20px' : '2px',
            '--knob-shadow-1-spread': active ? '0px' : '5px',
            '--knob-shadow-2-y': active ? '12.5px' : '6.5px',
            '--knob-shadow-2-blur': active ? '8.5px' : '4.5px',
            '--knob-shadow-3-y': active ? '6.5px' : '3.5px',
            '--knob-shadow-3-blur': active ? '4.5px' : '2.5px',
            '--knob-shadow-4-y': active ? '4px' : '2px',
            '--knob-shadow-4-blur': active ? '2.5px' : '1.5px',
            '--knob-shadow-7-y': active ? '15px' : '5px',
            '--top-shadow-blur': active ? '5px' : '3px',
            '--inner-bottom-shadow-blur': active ? '1.25px' : '1px',
            '--shine-top-opacity': active ? 0 : 1,
            '--shine-bottom-opacity': active ? 1 : 0,
            duration: .15,
            ease: 'power1.in',
            onStart() {
                (new Audio('https://assets.codepen.io/165585/switch.mp3')).play()
                elem.dataset.c = (parseInt(elem.dataset.c) || 0) + 1
                if (parseInt(elem.dataset.c) == 7) {
                    let hint = document.createElement('div')
                    // hint.innerHTML = 'You can’t get enough?<br>Follow our journey on <a href="https://twitter.com/joincheck" target="_top">Twitter<svg viewBox="0 0 70 36"><path d="M6.9739 30.8153H63.0244C65.5269 30.8152 75.5358 -3.68471 35.4998 2.81531C-16.1598 11.2025 0.894099 33.9766 26.9922 34.3153C104.062 35.3153 54.5169 -6.68469 23.489 9.31527" /></svg></a>'
                    hint.classList.add('hint')
                    document.querySelector('body').appendChild(hint)
                }
            },
            onComplete() {
                elem.classList.toggle('active')
            }
        })
        document.querySelector('body').classList.toggle('active')
    })
    });



// 타이머  @@@@@@@@@@
let time = 120; //기준시간 작성
let min = ""; //분
let sec = ""; //초
setTimeout(function () {

    //setInterval(함수, 시간) : 주기적인 실행
    let x = setInterval(function () {
        //parseInt() : 정수를 반환
        min = parseInt(time / 60); //몫을 계산
        sec = time % 60; //나머지를 계산

        document.getElementById("demo").innerHTML = min + "분" + ' ' + sec + "초";
        time--;

        //타임아웃 시
        if (time < 0) {
            clearInterval(x); //setInterval() 실행을 끝냄
            document.getElementById("demo").innerHTML = "시간초과";
            setTimeout(function () {
                Swal.fire({
                    icon: 'error',
                    title: '다시 해볼까요?',
                    text: '',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: '확인',
                    cancelButtonText: '취소',
                    input:'select',
                    inputOptions:{
                        level1:'1단계',
                        level2:'2단계',
                        level3:'3단계',
                    }
                })
                    .then((result) => {
                        console.log(result.value)
                        switch (result.value) {
                            case 'level1':
                            location.href = "oneDay.html";
                                break;
                            case 'level2':
                            location.href = "oneDayTwo.html";
                                break;
                            case 'level3':
                            location.href = "oneDayThree.html";
                                break;
                            
                            default:
                                break;
                        }
                    })
            }, 500);
        }
        // //타임아웃 시
        // if (time < 0) {
        //     clearInterval(x); //setInterval() 실행을 끝냄
        //     document.getElementById("demo").innerHTML = "시간초과";
        //     setTimeout(function () {
        //         alert("시간이 초과되었습니다.\n다시 게임을 시작해주세요.")
        //         window.location.href = window.location.href;
        //     }, 500);
        // }
    }, 1000);
}, 1000);

// 기본  ㅇㅇ
jQuery(function ($) {
    $("body").css("display", "none");
    $("body").fadeIn(2000);
    $("a.transition").click(function (event) {
        event.preventDefault();
        linkLocation = this.href;
        $("body").fadeOut(1000, redirectPage);
    });
    function redirectPage() {
        window.location = linkLocation;
    }
});



$('.error-page').hide(0);

$('.login-button , .no-access').click(function () {
    $('.login').slideUp(500);
    $('.error-page').slideDown(1000);
});

$('.try-again').click(function () {
    $('.error-page').hide(0);
    $('.login').slideDown(1000);
});

// function play() {

//     let audio = document.getElementById("audio");
//     // alert(audio);
//     // audio.play();
//     // play();
// }


// let sValue = ["one", "two", "three", "four", "five"];
// let sPick = Math.floor(Math.random() * sValue.length);
// console.log(sPick);
// 5개의 값 중 랜덤으로 하나 출력됨

// window.onpopstate = function(event) {
// 	alert("location: " + document.location + ", state: " + JSON.stringify(event.state)); 
// }   //뒤로가기 막기



// function being called at the end of main timeline
function addMouseEvent() {
    const safeToAnimate = window.matchMedia(
        "(prefers-reduced-motion: no-preference)"
    ).matches;

    if (safeToAnimate) {
        window.addEventListener("mousemove", updateScreenCoords);

        // gsap's RAF, falls back to set timeout
        gsap.ticker.add(animateFace);

        blink.play();
    }
}

// update if browser resizes
function updateWindowSize() {
    height = window.innerHeight;
    width = window.innerWidth;
}
updateWindowSize();
window.addEventListener("resize", updateWindowSize);

const SocialApp = props => React.createElement(SocialLinks, null);
// 뭐였는지 모름...'')

//계산기 새창으로 띄우기 (계산기)
function calculator(){
    
window.open("calculator.html","_blank","width=420, height=750'",)
}


