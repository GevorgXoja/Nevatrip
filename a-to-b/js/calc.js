function sum(){
  let time;
  let ticket;
  let map = document.getElementById('route').value;

  if (map === 'из A в B и обратно в А'){
     ticket = 1200;
    time = '1ч 40м.';
  }else {
    ticket = 700;
    time = '50 м.';
  }

  let ticketCount = document.getElementById('num').value;
  let s = ticket * ticketCount;

  const sel = document.getElementById("time");
  const text = sel.options[sel.selectedIndex].text;

  document.getElementById('text-1').innerHTML= '' + ('Вы выбрали ' + ticketCount + ' билета по маршруту ' + map + ' стоимостью ' + s +'р');
  document.getElementById('text-2').innerHTML= '' + ('Это путешествие займет у вас ' + time);
  document.getElementById('text-3').innerHTML= '' + ('Теплоход отправляется в ' +  text.slice(0,5));
  }


  function selectValue(){
    const bListTime = [1110, 1125, 1140, 1155, 1175, 1310, 1315];
    const bListInput = ['' +
    '<option value="1110">18:30(из B в A)</option>\n',
      '<option value="1125">18:45(из B в A)</option>\n',
      '<option value="1140">19:00(из B в A)</option>\n',
      '<option value="1155">19:15(из B в A)</option>\n',
      '<option value="1175">19:35(из B в A)</option>\n',
      '<option value="1310">21:50(из B в A)</option>\n',
      '<option value="1315">21:55(из B в A)</option\>\n'
    ];


    const map = document.getElementById('route').value;
    let text = '';

    if (map === 'из A в B и обратно в А' ){
      let firstTime = document.getElementById('time').value;
      let i = 0;
      while (i < bListTime.length){
        if (bListTime[i] >= parseFloat(firstTime) + 50) {
          text = text + bListInput[i]
        }
        i = i +1;
      }
      document.getElementById('time-1').innerHTML= '' +  text
    }
  }


  function getSelectionValue(){
    let mySelect = document.getElementById('route').value;
    if (mySelect === 'Выберите направление') {
      document.getElementById("time").innerHTML = "";
      document.getElementById("time-1").innerHTML = "";
    }else if (mySelect === 'из A в B'){
      document.getElementById("time").innerHTML = "";
      document.getElementById("time-1").innerHTML = "";
      document.getElementById('time').innerHTML= '' +
              '<option value="1080">18:00(из A в B)</option>\n' +
              '<option value="1110">18:30(из A в B)</option>\n' +
              '<option value="1125">18:45(из A в B)</option>\n' +
              '<option value="1140">19:00(из A в B)</option>\n' +
              '<option value="1155">19:15(из A в B)</option>\n' +
              '<option value="1260">21:00(из A в B)</option> ';
    }
    else if (mySelect === 'из B в A'){
      document.getElementById("time").innerHTML = "";
      document.getElementById("time-1").innerHTML = "";
      document.getElementById('time').innerHTML= '' +
              '<option value="1110">18:30(из B в A)</option>\n' +
              '<option value="1125">18:45(из B в A)</option>\n' +
              '<option value="1140">19:00(из B в A)</option>\n' +
              '<option value="1155">19:15(из B в A)</option>\n' +
              '<option value="1175">19:35(из B в A)</option>\n' +
              '<option value="1310">21:50(из B в A)</option>\n' +
              '<option value="1315">21:55(из B в A)</option>';
    }
    else{
      document.getElementById('time').innerHTML= '' +
              '<option value="1080">18:00(из A в B)</option>\n' +
              '<option value="1110">18:30(из A в B)</option>\n' +
              '<option value="1125">18:45(из A в B)</option>\n' +
              '<option value="1140">19:00(из A в B)</option>\n' +
              '<option value="1155">19:15(из A в B)</option>\n' +
              '<option value="1260">21:00(из A в B)</option> ';
    }
}