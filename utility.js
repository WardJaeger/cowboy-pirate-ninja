function glimpse() {
  const quizDiv = document.getElementById('quiz');
  quizDiv.innerHTML = '';
  document.title = "-";

  const message = document.createElement('p');
  message.innerHTML = "I DID NOT FIND IT I DID NOT FIND IT I DID NOT FIND <i class=\"blink\">.̶̢̪̲͈́̑̐́;̷͓͉͒̂̐_̴̤̂͂/̴͕͔̔͒̋̽\\̵̡͍͙̲͑̔^̵̬͎̏<̴͍̗̐̉̌͘,̷̰͑̃̽͠/̷͍͌:̴̢͔̦̉͗|̶̘̀</i>";
  quizDiv.appendChild(message);

  const picture = document.createElement('img');
  picture.src = "resources/test.jpg";
  quizDiv.appendChild(picture);

  const styler = document.createElement('style');
  styler.textContent = `
    body {
      background-color: #000;
      font-family: Arial, Helvetica, sans-serif;
      transform: rotate(180deg);
    }
    
    .container {
      background-color: #000;
    }

    .secret {
      display: none;
    }
  `;
  document.head.appendChild(styler);
}
