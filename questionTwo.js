$(function () {
    // easy
    let easy_array =[{ question: "41+76=?", answer: "117" },
    { question: "52+41=?", answer: "393" },
    { question: "13+39=?", answer: "52" },
    { question: "27+46=?", answer: "73" },
    { question: "69+55=?", answer: "124" },
    { question: "212+453=?", answer: "665"},
{ question: "53+73=?", answer: "126"},
{ question: "60+94=?", answer: "154"},
{ question: "453+12=?", answer: "465"},
{ question: "62+648=?", answer: "710"},
{ question: "53+45=?", answer: "582"},
{ question: "64+37=?", answer: "101"},
{ question: "65+12621=?", answer: "12686"},
{ question: "7345+100=?", answer: "7445"},
{ question: "67+101=?", answer: "168"},
{ question: "68+73=?", answer: "141"},
{ question: "735+103=?", answer: "838"},
{ question: "70+2=?", answer: "72"},
{ question: "64+573=?", answer: "637"},
{ question: "72+475=?", answer: "547"},
{ question: "41+107=?", answer: "148"},
{ question: "904+74=?", answer: "978"},
{ question: "75+634=?", answer: "709"},
{ question: "512+110=?", answer: "622"},
{ question: "41+53=?", answer: "94"},
{ question: "52+37=?", answer: "89"},
{ question: "543+113=?", answer: "656"},
{ question: "12+12=?", answer: "24"},
{ question: "21+115=?", answer: "136"},
{ question: "82+45=?", answer: "127"},
{ question: "345+117=?", answer: "462"},
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
{ question: "102+7346=?", answer: "7448"},
{ question: "124+137=?", answer: "261"},
{ question: "36+138=?", answer: "174"},
{ question: "105+139=?", answer: "244"},
{ question: "5356+812=?", answer: "6168"},
{ question: "107+141=?", answer: "248"},
{ question: "108+142=?", answer: "250"},
{ question: "109+59=?", answer: "168"},
{ question: "5548+144=?", answer: "5692"},
{ question: "111+145=?", answer: "256"},
{ question: "124+146=?", answer: "270"},
{ question: "113+147=?", answer: "260"},
{ question: "114+3463=?", answer: "3577"},
{ question: "115+149=?", answer: "264"},
{ question: "1244+150=?", answer: "1394"},
{ question: "117+151=?", answer: "268"},
{ question: "1278+152=?", answer: "1430"},
{ question: "119+51=?", answer: "170"},
{ question: "120+1421=?", answer: "1541"},
{ question: "126+155=?", answer: "281"},
{ question: "122+156=?", answer: "278"},
{ question: "567+157=?", answer: "724"},
{ question: "989+158=?", answer: "1147"},
{ question: "125+159=?", answer: "284"},
{ question: "126+5=?", answer: "131"},
{ question: "127+161=?", answer: "288"},
{ question: "128+162=?", answer: "290"},
{ question: "6346+163=?", answer: "6509"},
{ question: "130+164=?", answer: "294"},
{ question: "131+165=?", answer: "296"},
{ question: "363+6883=?", answer: "7246"},
{ question: "133+167=?", answer: "300"},
{ question: "2352+346=?", answer: "2698"},
{ question: "457+169=?", answer: "626"},
{ question: "136+234=?", answer: "370"},
{ question: "137+171=?", answer: "308"},
{ question: "856+172=?", answer: "1028"},
{ question: "139+78=?", answer: "217"},
{ question: "140+174=?", answer: "314"},
{ question: "786+7878=?", answer: "8664"},
{ question: "142+176=?", answer: "318"},
{ question: "7862+472=?", answer: "8334"},
{ question: "144+7862=?", answer: "8006"},
{ question: "78+179=?", answer: "257"},
{ question: "146+78=?", answer: "224"},
{ question: "4878+181=?", answer: "5059"},
{ question: "148+64=?", answer: "212"},
{ question: "149+786=?", answer: "935"},
{ question: "78+786=?", answer: "864"},
{ question: "57+867=?", answer: "924"},
{ question: "654+48=?", answer: "702"},
{ question: "153+458=?", answer: "611"},
    { question: "98+68=?", answer: "166" }]

    // hard
    let hard_array = [{ question: "8??2(2+2)=?", answer: "16" },
    { question: "212??453=?", answer: "96036"},
{ question: "53??73=?", answer: "3869"},
{ question: "60??94=?", answer: "5640"},
{ question: "453??12=?", answer: "5436"},
{ question: "62??648=?", answer: "40176"},
{ question: "537??45=?", answer: "24165"},
{ question: "64??37=?", answer: "2368"},
{ question: "65??12621=?", answer: "820365"},
{ question: "7345??100=?", answer: "734500"},
{ question: "67??101=?", answer: "6767"},
{ question: "68??73=?", answer: "4964"},
{ question: "735??103=?", answer: "75705"},
{ question: "70??2=?", answer: "140"},
{ question: "64??573=?", answer: "36672"},
{ question: "72??475=?", answer: "34200"},
{ question: "41??107=?", answer: "4387"},
{ question: "904??74=?", answer: "66896"},
{ question: "75??634=?", answer: "47550"},
{ question: "512??110=?", answer: "56320"},
{ question: "41??53=?", answer: "2173"},
{ question: "52??37=?", answer: "1924"},
{ question: "543??113=?", answer: "61359"},
{ question: "12??12=?", answer: "144"},
{ question: "21??115=?", answer: "2415"},
{ question: "82??45=?", answer: "3690"},
{ question: "345??117=?", answer: "40365"},
{ question: "84??118=?", answer: "9912"},
{ question: "85??453=?", answer: "38505"},
{ question: "453??482=?", answer: "218346"},
{ question: "87??121=?", answer: "10527"},
{ question: "88??453=?", answer: "39864"},
{ question: "12??52=?", answer: "624"},
{ question: "90??124=?", answer: "11160"},
{ question: "91??125=?", answer: "11375"},
{ question: "92??126=?", answer: "11592"},
{ question: "93??127=?", answer: "11811"},
{ question: "94??528=?", answer: "49632"},
{ question: "95??129=?", answer: "12255"},
{ question: "784??130=?", answer: "101920"},
{ question: "97??131=?", answer: "12707"},
{ question: "98??346=?", answer: "33908"},
{ question: "99??133=?", answer: "13167"},
{ question: "100??134=?", answer: "13400"},
{ question: "101??135=?", answer: "13635"},
{ question: "102??7346=?", answer: "749292"},
{ question: "124??137=?", answer: "16988"},
{ question: "36??138=?", answer: "4968"},
{ question: "105??139=?", answer: "14595"},
{ question: "5356??812=?", answer: "6.596"},
{ question: "107??141=?", answer: "0.759"},
{ question: "108??142=?", answer: "0.761"},
{ question: "109??59=?", answer: "1.847"},
{ question: "5548??144=?", answer: "38.528"},
{ question: "111??145=?", answer: "0.766"},
{ question: "124??146=?", answer: "0.849"},
{ question: "113??147=?", answer: "0.769"},
{ question: "114??3463=?", answer: "0.033"},
{ question: "115??149=?", answer: "0.772"},
{ question: "1244??150=?", answer: "8.293"},
{ question: "117??151=?", answer: "0.775"},
{ question: "1278??152=?", answer: "8.408"},
{ question: "119??51=?", answer: "2.333"},
{ question: "120??1421=?", answer: "0.084"},
{ question: "126??155=?", answer: "0.813"},
{ question: "122??156=?", answer: "0.782"},
{ question: "567??157=?", answer: "3.611"},
{ question: "989??158=?", answer: "6.259"},
{ question: "125??159=?", answer: "0.786"},
{ question: "126??37=?", answer: "3.405"},
{ question: "127??161=?", answer: "0.789"},
{ question: "128??162=?", answer: "0.79"},
{ question: "6346??163=?", answer: "38.933"},
{ question: "130??164=?", answer: "0.793"},
{ question: "131??165=?", answer: "0.794"},
{ question: "363??6883=?", answer: "0.053"},
{ question: "133??167=?", answer: "0.796"},
{ question: "2352??346=?", answer: "6.798"},
{ question: "457??169=?", answer: "2.704"},
{ question: "136??234=?", answer: "0.581"},
{ question: "137??171=?", answer: "0.801"},
{ question: "856??172=?", answer: "4.977"},
{ question: "139??78=?", answer: "1.782"},
{ question: "140??174=?", answer: "0.805"},
{ question: "786??7878=?", answer: "0.1"},
{ question: "142??176=?", answer: "0.807"},
{ question: "7862??472=?", answer: "16.657"},
{ question: "144??7862=?", answer: "0.018"},
{ question: "78??179=?", answer: "0.436"},
{ question: "146??78=?", answer: "1.872"},
{ question: "4878??181=?", answer: "26.95"},
{ question: "148??64=?", answer: "2.313"},
{ question: "149??786=?", answer: "0.19"},
{ question: "78??36=?", answer: "2.167"},
{ question: "83??867=?", answer: "0.096"},
{ question: "654??3366=?", answer: "0.194"},
{ question: "153??458=?", answer: "0.334"},

]



    let randomNumber1 = Math.floor(Math.random() * (easy_array.length))// easy
    let randomNumber2 = Math.floor(Math.random() * (hard_array.length)) // hard
    // while (randomNumber1 === randomNumber2) {
    //     randomNumber2 = Math.floor(Math.random() * (hard.length)) //hard
    // }   ????????? ????????? ????????? ????????? ???.


    $("#question1").append(easy_array[randomNumber1].question)  //Math.Random ?????????.
    $("#question2").append(hard_array[randomNumber2].question)
    $("#checkbtn").click(
        function() {
            if($("#answer1").val()!=easy_array[randomNumber1].answer && $("#answer2").val()!=hard_array[randomNumber2].answer) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '1???, 2??? ?????? ????????????~! ??????!'
                });
            } else if($("#answer1").val()!=easy_array[randomNumber1].answer){
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '1??? ????????? ????????????~! ??????!'
                });
            } else if($("#answer2").val()!=hard_array[randomNumber2].answer) {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: '2??? ????????? ????????????~! ??????!'
                });
            } else {
                Swal.fire({
                    icon: 'success',
                    title: 'Wow!!!'+'\n'+'?????? ?????????!?',
                    text: min+'???' + ' ' + sec + '??? ?????????!'
                })
                .then((result) => {
                    /* Read more about isConfirmed, isDenied below */
                    if (result.isConfirmed) {
                        location.href="mp3/mulcamday.mp3"; 
                    }
                })
            }
            // window.close(); // ????????? ?????? ??? ???????????? ????????????????????? ????????? ??????;
        }
    );
    
});
