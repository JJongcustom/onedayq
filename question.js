$(function () {
    // easy
    let easy_array =[{ question: "12+453=?", answer: "465"},
    { question: "53+73=?", answer: "126"},
    { question: "60+94=?", answer: "154"},
    { question: "53+12=?", answer: "65"},
    { question: "62+48=?", answer: "110"},
    { question: "537+45=?", answer: "582"},
    { question: "64+37=?", answer: "101"},
    { question: "65+121=?", answer: "186"},
    { question: "73+60=?", answer: "133"},
    { question: "67+101=?", answer: "168"},
    { question: "68+73=?", answer: "141"},
    { question: "735+3=?", answer: "738"},
    { question: "70+2=?", answer: "72"},
    { question: "64+573=?", answer: "637"},
    { question: "72+475=?", answer: "547"},
    { question: "41+107=?", answer: "148"},
    { question: "94+74=?", answer: "168"},
    { question: "75+634=?", answer: "709"},
    { question: "512+110=?", answer: "622"},
    { question: "41+53=?", answer: "94"},
    { question: "52+37=?", answer: "89"},
    { question: "543+113=?", answer: "656"},
    { question: "12+12=?", answer: "24"},
    { question: "21+115=?", answer: "136"},
    { question: "82+45=?", answer: "127"},
    { question: "45+117=?", answer: "162"},
    { question: "84+118=?", answer: "202"},
    { question: "85+453=?", answer: "538"},
    { question: "453+482=?", answer: "935"},
    { question: "87+121=?", answer: "208"},
    { question: "88+453=?", answer: "541"},
    { question: "12+52=?", answer: "64"},
    { question: "90+124=?", answer: "214"},
    { question: "91+125=?", answer: "216"},
    { question: "92+126=?", answer: "218"},
    { question: "93+127=?", answer: "220"},
    { question: "94+528=?", answer: "622"},
    { question: "95+129=?", answer: "224"},
    { question: "784+130=?", answer: "914"},
    { question: "97+131=?", answer: "228"},
    { question: "98+346=?", answer: "444"},
    { question: "99+133=?", answer: "232"},
    { question: "100+134=?", answer: "234"},
    { question: "101+135=?", answer: "236"},
    { question: "102+46=?", answer: "148"},
    { question: "124+137=?", answer: "261"},
    { question: "36+138=?", answer: "174"},
    { question: "105+139=?", answer: "244"},
    { question: "56-81=?", answer: "-25"},
    { question: "107-141=?", answer: "-34"},
    { question: "108-142=?", answer: "-34"},
    { question: "109-59=?", answer: "50"},
    { question: "48-44=?", answer: "4"},
    { question: "111-145=?", answer: "-34"},
    { question: "124-146=?", answer: "-22"},
    { question: "113-147=?", answer: "-34"},
    { question: "14-33=?", answer: "-19"},
    { question: "15-19=?", answer: "-4"},
    { question: "12-150=?", answer: "-138"},
    { question: "117-151=?", answer: "-34"},
    { question: "18-152=?", answer: "-134"},
    { question: "119-51=?", answer: "68"},
    { question: "12-121=?", answer: "-109"},
    { question: "126-155=?", answer: "-29"},
    { question: "122-156=?", answer: "-34"},
    { question: "567-157=?", answer: "410"},
    { question: "99-158=?", answer: "-59"},
    { question: "125-159=?", answer: "-34"},
    { question: "126-5=?", answer: "121"},
    { question: "17-16=?", answer: "1"},
    { question: "18-16=?", answer: "2"},
    { question: "66-63=?", answer: "3"},
    { question: "130-64=?", answer: "66"},
    { question: "131-65=?", answer: "66"},
    { question: "33-83=?", answer: "-50"},
    { question: "13-67=?", answer: "-54"},
    { question: "52-46=?", answer: "6"},
    { question: "57-19=?", answer: "38"},
    { question: "36-234=?", answer: "-198"},
    { question: "17-171=?", answer: "-154"},
    { question: "56-12=?", answer: "44"},
    { question: "39-78=?", answer: "-39"},
    { question: "14-14=?", answer: "0"},
    { question: "86-78=?", answer: "8"},
    { question: "42-76=?", answer: "-34"},
    { question: "62-72=?", answer: "-10"},
    { question: "44-62=?", answer: "-18"},
    { question: "78-79=?", answer: "-1"},
    { question: "46-78=?", answer: "-32"},
    { question: "78-81=?", answer: "-3"},
    { question: "48-64=?", answer: "-16"},
    { question: "19-78=?", answer: "-59"},
    { question: "78-76=?", answer: "2"},
    { question: "57-87=?", answer: "-30"},
    { question: "44-4=?", answer: "40"},
    { question: "53-48=?", answer: "5"},
    ]

    // hard
    let hard_array = [{ question: "12×53=?", answer: "636"},
    { question: "53×73=?", answer: "3869"},
    { question: "60×94=?", answer: "5640"},
    { question: "53×12=?", answer: "636"},
    { question: "62×48=?", answer: "2976"},
    { question: "37×45=?", answer: "1665"},
    { question: "64×37=?", answer: "2368"},
    { question: "65×26=?", answer: "1690"},
    { question: "73×10=?", answer: "730"},
    { question: "67×1=?", answer: "67"},
    { question: "68×73=?", answer: "4964"},
    { question: "35×3=?", answer: "105"},
    { question: "70×2=?", answer: "140"},
    { question: "64×73=?", answer: "4672"},
    { question: "72×47=?", answer: "3384"},
    { question: "41×107=?", answer: "4387"},
    { question: "94×74=?", answer: "6956"},
    { question: "75×34=?", answer: "2550"},
    { question: "51×10=?", answer: "510"},
    { question: "41×53=?", answer: "2173"},
    { question: "52×37=?", answer: "1924"},
    { question: "54×11=?", answer: "594"},
    { question: "12×12=?", answer: "144"},
    { question: "21×15=?", answer: "315"},
    { question: "82×45=?", answer: "3690"},
    { question: "345×17=?", answer: "5865"},
    { question: "84×118=?", answer: "9912"},
    { question: "85×453=?", answer: "38505"},
    { question: "453×82=?", answer: "37146"},
    { question: "87×121=?", answer: "10527"},
    { question: "88×453=?", answer: "39864"},
    { question: "12×52=?", answer: "624"},
    { question: "90×124=?", answer: "11160"},
    { question: "91×125=?", answer: "11375"},
    { question: "92×126=?", answer: "11592"},
    { question: "93×127=?", answer: "11811"},
    { question: "94×528=?", answer: "49632"},
    { question: "95×129=?", answer: "12255"},
    { question: "74×130=?", answer: "9620"},
    { question: "97×131=?", answer: "12707"},
    { question: "98×346=?", answer: "33908"},
    { question: "99×133=?", answer: "13167"},
    { question: "10×134=?", answer: "1340"},
    { question: "101×135=?", answer: "13635"},
    { question: "102×7346=?", answer: "749292"},
    { question: "124×137=?", answer: "16988"},
    { question: "36×138=?", answer: "4968"},
    { question: "105×39=?", answer: "4095"},
    { question: "356÷812=?", answer: "0.4"},
    { question: "107÷141=?", answer: "0.8"},
    { question: "108÷142=?", answer: "0.8"},
    { question: "109÷59=?", answer: "1.8"},
    { question: "48÷144=?", answer: "0.3"},
    { question: "111÷145=?", answer: "0.8"},
    { question: "124÷146=?", answer: "0.8"},
    { question: "113÷147=?", answer: "0.8"},
    { question: "114÷34=?", answer: "3.4"},
    { question: "115÷149=?", answer: "0.8"},
    { question: "12÷15=?", answer: "0.8"},
    { question: "117÷151=?", answer: "0.8"},
    { question: "12÷152=?", answer: "0.1"},
    { question: "119÷51=?", answer: "2.3"},
    { question: "50÷21=?", answer: "2.4"},
    { question: "6÷155=?", answer: "0"},
    { question: "122÷156=?", answer: "0.8"},
    { question: "67÷157=?", answer: "0.4"},
    { question: "9÷158=?", answer: "0.1"},
    { question: "125÷159=?", answer: "0.8"},
    { question: "126÷37=?", answer: "3.4"},
    { question: "127÷161=?", answer: "0.8"},
    { question: "128÷162=?", answer: "0.8"},
    { question: "46÷63=?", answer: "0.7"},
    { question: "130÷164=?", answer: "0.8"},
    { question: "11÷165=?", answer: "0.1"},
    { question: "63÷63=?", answer: "1"},
    { question: "133÷67=?", answer: "2"},
    { question: "52÷6=?", answer: "8.7"},
    { question: "47÷9=?", answer: "5.2"},
    { question: "136÷4=?", answer: "34"},
    { question: "37÷71=?", answer: "0.5"},
    { question: "56÷2=?", answer: "28"},
    { question: "39÷78=?", answer: "0.5"},
    { question: "14÷4=?", answer: "3.5"},
    { question: "71÷78=?", answer: "0.9"},
    { question: "12÷76=?", answer: "0.2"},
    { question: "52÷2=?", answer: "26"},
    { question: "44÷72=?", answer: "0.6"},
    { question: "78÷79=?", answer: "1"},
    { question: "46÷78=?", answer: "0.6"},
    { question: "48÷1=?", answer: "48"},
    { question: "48÷64=?", answer: "0.8"},
    { question: "49÷86=?", answer: "0.6"},
    { question: "78÷36=?", answer: "2.2"},
    { question: "83÷7=?", answer: "11.9"},
    { question: "64÷6=?", answer: "10.7"},
    { question: "53÷8=?", answer: "6.6"},
    
]



    let randomNumber1 = Math.floor(Math.random() * (easy_array.length))// easy
    let randomNumber2 = Math.floor(Math.random() * (hard_array.length)) // hard
    // while (randomNumber1 === randomNumber2) {
    //     randomNumber2 = Math.floor(Math.random() * (hard.length)) //hard
    // }   문제가 다르기 때문에 없어도 됨.


    $("#question1").append(easy_array[randomNumber1].question)  //Math.Random 써야됨.
    $("#question2").append(hard_array[randomNumber2].question)
    $("#checkbtn").click(
        function() {
            if($("#answer1").val()!=easy_array[randomNumber1].answer && $("#answer2").val()!=hard_array[randomNumber2].answer) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '1번, 2번 모두 틀렸어요~! 다시!'
                });
            } else if($("#answer1").val()!=easy_array[randomNumber1].answer){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '1번 문제가 틀렸어요~! 다시!'
                });
            } else if($("#answer2").val()!=hard_array[randomNumber2].answer) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '2번 문제가 틀렸어요~! 다시!'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Wow!!!'+'\n'+'남은 시간은!?',
                    text: min+'분' + ' ' + sec + '초 입니다!'
                })
                .then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        location.href="mp3/mulcamday.mp3"; 
                    }
                })
            }
            // window.close(); // 사운드 재생 후 브라우저 종료되야하는데 실행이 안됨;
        }
    );
    
});
