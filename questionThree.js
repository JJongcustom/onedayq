$(function () {
    // easy
    let easy_array =[{ question: " 2156469 + 9849419 =?", answer: "12005888"},
    { question: " 5163513 + 148181 =?", answer: "5311694"},
    { question: " 32413 + 95912951 =?", answer: "95945364"},
    { question: " 321434 + 6519615965 =?", answer: "6519937399"},
    { question: " 546546 + 1651651 =?", answer: "2198197"},
    { question: " 6548656 + 6595 =?", answer: "6555251"},
    { question: " 654498 + 9651651 =?", answer: "10306149"},
    { question: " 6866543 + 6516 =?", answer: "6873059"},
    { question: " 3567567 + 156515416 =?", answer: "160082983"},
    { question: " 3456456 + 51651 =?", answer: "3508107"},
    { question: " 543324583 + 6516516 =?", answer: "549841099"},
    { question: " 3452 + 51651481 =?", answer: "51654933"},
    { question: " 534523 + 8541651 =?", answer: "9076174"},
    { question: " 52345623 + 6516 =?", answer: "52352139"},
    { question: " 6516516 + 16516 =?", answer: "6533032"},
    { question: " 3568356477 + 6516516 =?", answer: "3574872993"},
    { question: " 35676573 + 1561895 =?", answer: "37238468"},
    { question: " 357357356 + 62925629 =?", answer: "420282985"},
    { question: " 3567 + 1984518 =?", answer: "1988085"},
    { question: " 356735673 + 5125919 =?", answer: "361861592"},
    { question: " 567356735 + 5129651 =?", answer: "572486386"},
    { question: " 67365 + 9519519 =?", answer: "9586884"},
    { question: " 3546634 + 6516 =?", answer: "3553150"},
    { question: " 54636543 + 198198 =?", answer: "54834741"},
    { question: " 54366345 + 951978 =?", answer: "55318323"},
    { question: " 35473465 + 981841 =?", answer: "36455306"},
    { question: " 342324 + 91651649 =?", answer: "91993973"},
    { question: " 3456 + 79819817 =?", answer: "79823273"},
    { question: " 345643526 + 891819781 =?", answer: "1237463307"},
    { question: " 23455 + 98178 =?", answer: "121633"},
    { question: " 564356 + 9618591 =?", answer: "10182947"},
    { question: " 734565764 + 9191 =?", answer: "734574955"},
    { question: " 45764756 + 9849781 =?", answer: "55614537"},
    { question: " 7564 + 96198 =?", answer: "103762"},
    { question: " 98416 + 9849819 =?", answer: "9948235"},
    { question: " 984984 + 5917899 =?", answer: "6902883"},
    { question: " 456745 + 65046 =?", answer: "521791"},
    { question: " 6754 + 984984 =?", answer: "991738"},
    { question: " 6574 + 1068106 =?", answer: "1074680"},
    { question: " 7564 + 68186416 =?", answer: "68193980"},
    { question: " 45887657 + 106501651 =?", answer: "152389308"},
    { question: " 56895467 + 65465046 =?", answer: "122360513"},
    { question: " 574645236 + 5641064 =?", answer: "580286300"},
    { question: " 5436 + 741781 =?", answer: "747217"},
    { question: " 4563 + 78147841 =?", answer: "78152404"},
    { question: " 6543 + 18418741 =?", answer: "18425284"},
    { question: " 563 + 48978 =?", answer: "49541"},
    { question: " 456736 + 45645 =?", answer: "502381"},
    { question: " 543 - 123156456 =?", answer: "-123155913"},
    { question: " 54364 - 65046015 =?", answer: "-64991651"},
    { question: " 56345 - 478974 =?", answer: "-422629"},
    { question: " 74653 - 65106510 =?", answer: "-65031857"},
    { question: " 634 - 456485498 =?", answer: "-456484864"},
    { question: " 357563 - 65106 =?", answer: "292457"},
    { question: " 5657 - 714841 =?", answer: "-709184"},
    { question: " 32452532 - 84181 =?", answer: "32368351"},
    { question: " 562546234 - 541985189 =?", answer: "20561045"},
    { question: " 4768 - 98486514 =?", answer: "-98481746"},
    { question: " 2345 - 9818941 =?", answer: "-9816596"},
    { question: " 5234524 - 894984 =?", answer: "4339540"},
    { question: " 2345234 - 8941984 =?", answer: "-6596750"},
    { question: " 24356 - 651654 =?", answer: "-627298"},
    { question: " 546 - 85649864 =?", answer: "-85649318"},
    { question: " 54654624 - 8645161 =?", answer: "46009463"},
    { question: " 354675 - 864561 =?", answer: "-509886"},
    { question: " 3546245 - 516516 =?", answer: "3029729"},
    { question: " 23462 - 156 =?", answer: "23306"},
    { question: " 4567574 - 5498 =?", answer: "4562076"},
    { question: " 736547546 - 65165468 =?", answer: "671382078"},
    { question: " 4536 - 423531 =?", answer: "-418995"},
    { question: " 43557346 - 5637 =?", answer: "43551709"},
    { question: " 36546 - 42342 =?", answer: "-5796"},
    { question: " 35468764 - 435223 =?", answer: "35033541"},
    { question: " 43634 - 312313 =?", answer: "-268679"},
    { question: " 563456345 - 21564 =?", answer: "563434781"},
    { question: " 7536 - 8498 =?", answer: "-962"},
    { question: " 565461423 - 49846541 =?", answer: "515614882"},
    { question: " 624 - 51654 =?", answer: "-51030"},
    { question: " 425 - 894 =?", answer: "-469"},
    { question: " 245653678 - 456864 =?", answer: "245196814"},
    { question: " 435264357 - 9879845 =?", answer: "425384512"},
    { question: " 536 - 6541 =?", answer: "-6005"},
    { question: " 753735 - 948961 =?", answer: "-195226"},
    { question: " 735735 - 64648 =?", answer: "671087"},
    { question: " 67357 - 5416541897 =?", answer: "-5416474540"},
    { question: " 3568675 - 86465 =?", answer: "3482210"},
    { question: " 85436543 - 516 =?", answer: "85436027"},
    { question: " 6367567 - 54264 =?", answer: "6313303"},
    { question: " 674567 - 325234532 =?", answer: "-324559965"},
    { question: " 457547 - 2456 =?", answer: "455091"},
    { question: " 45674 - 2456 =?", answer: "43218"},
    { question: " 58674 - 456 =?", answer: "58218"},
    { question: " 456784 - 65243 =?", answer: "391541"},
    { question: " 356737 - 736524 =?", answer: "-379787"},
    { question: " 3567567 - 7356 =?", answer: "3560211"},
    { question: " 35673567 - 57869 =?", answer: "35615698"},
    ]

    // hard
    let hard_array = [{ question: " 15512 ?? 12452 =?", answer: "193155424"},
    { question: " 4516 ?? 78278 =?", answer: "353503448"},
    { question: " 15616 ?? 27782 =?", answer: "433843712"},
    { question: " 32165 ?? 6778 =?", answer: "218014370"},
    { question: " 31351 ?? 3434 =?", answer: "107659334"},
    { question: " 98431 ?? 568568 =?", answer: "55964716808"},
    { question: " 6546 ?? 7654 =?", answer: "50103084"},
    { question: " 56465 ?? 459 =?", answer: "25917435"},
    { question: " 98798 ?? 3737 =?", answer: "369208126"},
    { question: " 4948 ?? 38357 =?", answer: "189790436"},
    { question: " 849 ?? 76949 =?", answer: "65329701"},
    { question: " 89498 ?? 4679467 =?", answer: "418802937566"},
    { question: " 9684 ?? 124142 =?", answer: "1202191128"},
    { question: " 89649 ?? 5678 =?", answer: "509027022"},
    { question: " 51968 ?? 46468 =?", answer: "2414849024"},
    { question: " 546156 ?? 65483 =?", answer: "35763933348"},
    { question: " 48619 ?? 2654 =?", answer: "129034826"},
    { question: " 56418 ?? 5789 =?", answer: "326603802"},
    { question: " 916 ?? 34586 =?", answer: "31680776"},
    { question: " 15321 ?? 3568 =?", answer: "54665328"},
    { question: " 891 ?? 3416 =?", answer: "3043656"},
    { question: " 89489 ?? 6897 =?", answer: "617205633"},
    { question: " 15161 ?? 5426 =?", answer: "82263586"},
    { question: " 812541 ?? 2431 =?", answer: "1975287171"},
    { question: " 91284 ?? 5673 =?", answer: "517854132"},
    { question: " 862269 ?? 7859 =?", answer: "6776572071"},
    { question: " 72668 ?? 8970 =?", answer: "651831960"},
    { question: " 9876 ?? 56785746 =?", answer: "560816027496"},
    { question: " 891817 ?? 5423 =?", answer: "4836323591"},
    { question: " 65431 ?? 37456 =?", answer: "2450783536"},
    { question: " 3213141 ?? 2456 =?", answer: "7891474296"},
    { question: " 341561 ?? 67584 =?", answer: "23084058624"},
    { question: " 3146498 ?? 89765 =?", answer: "282445392970"},
    { question: " 89756 ?? 67854 =?", answer: "6090303624"},
    { question: " 3681615 ?? 78569 =?", answer: "289260808935"},
    { question: " 313163 ?? 90877 =?", answer: "28459313951"},
    { question: " 63811 ?? 675 =?", answer: "43072425"},
    { question: " 31561 ?? 7568 =?", answer: "238853648"},
    { question: " 631461 ?? 7685 =?", answer: "4852777785"},
    { question: " 6146 ?? 6758 =?", answer: "41534668"},
    { question: " 6318486 ?? 25563 =?", answer: "161519457618"},
    { question: " 639 ?? 6566 =?", answer: "4195674"},
    { question: " 9934193 ?? 47 =?", answer: "466907071"},
    { question: " 6154416 ?? 54354 =?", answer: "334517127264"},
    { question: " 14534 ?? 5451 =?", answer: "79224834"},
    { question: " 6341 ?? 35638 =?", answer: "225980558"},
    { question: " 336841 ?? 638368 =?", answer: "215028515488"},
    { question: " 531463 ?? 74 =?", answer: "39328262"},
    { question: "61536??457=?", answer: "134.65208"},
{ question: "3641??745=?", answer: "4.88725"},
{ question: "361??661=?", answer: "0.54614"},
{ question: "4614986??1313=?", answer: "3514.84082"},
{ question: "6179??1313=?", answer: "4.70602"},
{ question: "897??475=?", answer: "1.88842"},
{ question: "98456??74=?", answer: "1330.48649"},
{ question: "465465??4=?", answer: "116366.25"},
{ question: "56189??628426=?", answer: "0.08941"},
{ question: "1836846??47=?", answer: "39081.82979"},
{ question: "49874??52252=?", answer: "0.95449"},
{ question: "4796??626=?", answer: "7.66134"},
{ question: "56749??47=?", answer: "1207.42553"},
{ question: "987436??58225=?", answer: "16.95897"},
{ question: "8946??52858=?", answer: "0.16925"},
{ question: "14654??258852=?", answer: "0.05661"},
{ question: "4887??58=?", answer: "84.25862"},
{ question: "963??47=?", answer: "20.48936"},
{ question: "696??852=?", answer: "0.8169"},
{ question: "636??5858=?", answer: "0.10857"},
{ question: "61589??62=?", answer: "993.37097"},
{ question: "65419??285=?", answer: "229.54035"},
{ question: "4768??7=?", answer: "681.14286"},
{ question: "694??85=?", answer: "8.16471"},
{ question: "5159??47=?", answer: "109.76596"},
{ question: "8949??58=?", answer: "154.2931"},
{ question: "987498??528528=?", answer: "1.86839"},
{ question: "9846??7=?", answer: "1406.57143"},
{ question: "651496??7=?", answer: "93070.85714"},
{ question: "5165??47=?", answer: "109.89362"},
{ question: "54651??528=?", answer: "103.50568"},
{ question: "651489??58=?", answer: "11232.56897"},
{ question: "2846??5=?", answer: "569.2"},
{ question: "23??58=?", answer: "0.39655"},
{ question: "23865??58=?", answer: "411.46552"},
{ question: "3683??2=?", answer: "1841.5"},
{ question: "368??6=?", answer: "61.33333"},
{ question: "35683658??8552=?", answer: "4172.55122"},
{ question: "3568??68698=?", answer: "0.05194"},
{ question: "3568??6556=?", answer: "0.54423"},
{ question: "35683568??5858=?", answer: "6091.42506"},
{ question: "6538??9699=?", answer: "0.67409"},
{ question: "3563685??88696=?", answer: "40.17864"},
{ question: "356358358??8642=?", answer: "41235.63504"},
{ question: "515??25=?", answer: "20"},
{ question: "1543513??7=?", answer: "220501.85714"},
{ question: "45513451??54=?", answer: "842841.68519"},
{ question: "3145??54=?", answer: "58.24074"},

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
