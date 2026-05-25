const SUPABASE_URL = "https://zyseorzqsidpwzubzgpp.supabase.co";

const SUPABASE_KEY = "sb_publishable_IJeHHEtF-cJxeFf6ktswLQ_uFGTVsOW";

const supabaseClient = supabase.createClient(
  SUPABASE_URL,
  SUPABASE_KEY
);

const circle = document.getElementById("circle");
const dialogue = document.getElementById("dialogue");
const choices = document.getElementById("choices");
const background = document.getElementById("background");
const envelope = document.getElementById("envelope");
const letter = document.getElementById("letter");
const flash = document.getElementById("flash");
const closeLetter = document.getElementById("closeLetter");
const talkNaibu = document.getElementById("talkNaibu");
const secretArea = document.getElementById("secretArea");
const starButton = document.getElementById("starButton");
const secretOptions = document.getElementById("secretOptions");
const messageNaibu = document.getElementById("messageNaibu");
const nameInputArea = document.getElementById("nameInputArea");
const nameInput = document.getElementById("nameInput");
const sendName = document.getElementById("sendName");

let playerName = "";
// setTimeout(() => {
//   circle.style.opacity = 1;

//   firstDialogue();

// }, 2500);

function setDialogue(text) {
  dialogue.innerHTML = text;
}

function setChoices(choicesArray) {

  choices.innerHTML = "";

  choicesArray.forEach(choice => {

    const button =
      document.createElement("button");

    button.innerText = choice.text;

    button.onclick = choice.action;

    // CLASSE
    button.classList.add("choice-btn");

    choices.appendChild(button);

  });

}

function firstDialogue() {

  setDialogue(`
  bem, até que enfim te conheci, ${playerName}!
  <br><br>
  Prazer em te conhecer.
`);

  setChoices([
    {
      text: "O prazer é meu! Mas… Quem é você?",
      action: scene11
    },

    {
      text: "Como você sabe o meu nome?",
      action: scene21
    }
  ]);
}

function scene11() {

  choices.innerHTML = "";


    setDialogue(`
     Oh, eu não me apresentei? foi mal!
    `);

  setTimeout(() => {

    setDialogue(`
     Eu sou Naibu.
    `);

  }, 3000);

  setTimeout(() => {

    setDialogue(`
     Aquele velho ranzinza falou muito sobre você!
    `);

  }, 6000);

  setTimeout(() => {

    neutralScene();

  }, 10000);

}

function scene21() {

    choices.innerHTML = "";

  setDialogue("Bobinha, o velho me falou muito sobre você!");

  setTimeout(() => {

    neutralScene();

  }, 5000);
}

function neutralScene() {

  setDialogue("Mas, antes de qualquer coisa… posso sentir sua energia?");

  setChoices([
    {
      text: "Claro!",
      action: scene12
    },

    {
      text: "Eu não sei se posso confiar minha energia a você.",
      action: scene22
    },

    {
      text: "Não.",
      action: scene22
    }
  ]);
}

function scene22() {

  setDialogue("Tudo bem… Mas… O velho vai ficar bem chateado comigo se eu não entregar a coisa...");

  setChoices([
    {
      text: "Que coisa?",
      action: scene221
    },

    {
      text: "INDEPENDENTE",
      action: badEnding
    }
  ]);
}

function scene221() {

  setDialogue("Você só vai saber se me deixar sentir sua energia! E então, aceita?");

  setChoices([
    {
      text: "Aff, tá bom!",
      action: scene12
    }
  ]);
}

function badEnding() {

  setDialogue("Naibu odeia você!");

  choices.innerHTML = "";

  const reset = document.createElement("button");

  reset.innerText = "Resetar pontos com a Naibu";

  reset.onclick = () => location.reload();

  const end = document.createElement("button");

  end.innerText = "Acabar com a experiência";

  end.classList.add("red");

  end.onclick = () => {

    document.body.innerHTML = `
      <h1>ERRO</h1>
    `;

  };

  choices.appendChild(reset);
  choices.appendChild(end);
}

function scene12() {

  setDialogue("Perfeito, me pressione por alguns segundos!");

  choices.innerHTML = "";

  let pressTimer;

  circle.addEventListener("mousedown", startPress);
  circle.addEventListener("touchstart", startPress);

  circle.addEventListener("mouseup", cancelPress);
  circle.addEventListener("touchend", cancelPress);

  function startPress() {

  pressTimer = setTimeout(() => {

    // limpa o texto imediatamente
    setDialogue("");

    energyScene();

  }, 3000);

}
  function cancelPress() {

    clearTimeout(pressTimer);

  }

}

function energyScene() {

  flash.classList.add("flash-animation");

  // luz branca forte
  setTimeout(() => {

    document.body.style.background = "#a00000";
    background.style.background = "#a00000";

  }, 1200);

  // círculo reage
  setTimeout(() => {

    circle.classList.add("shake");

  }, 1800);


  // PRIMEIRA FALA
setTimeout(() => {

  setDialogue(`
    Tenho que lhe dizer, ${playerName}...
  `);

}, 0);

// SEGUNDA FALA
setTimeout(() => {

  setDialogue(`
    Você tem uma energia muito bonita!
  `);

  // tremidinha feliz
  circle.classList.add("shake");

}, 4000);

// TERCEIRA FALA
setTimeout(() => {

  setDialogue(`
    Apesar que essa cor não combina tanto com sua energia...
  `);

  // reação surpresa
  circle.innerHTML = `
    <div id="emoji">?</div>
  `;

}, 9000);

// QUARTA FALA
setTimeout(() => {

    // MUDA COR
  document.body.style.background = "#8CBD8C";
  background.style.background = "#8CBD8C";

  setDialogue(`
    Imaginei que seria uma cor pastel...
  `);

}, 14000);

// QUINTA FALA
setTimeout(() => {
    // MUDA COR
  document.body.style.background = "#f9a056";
  background.style.background = "#f9a056";

  setDialogue(`
    Mais alegre...
  `);

}, 17000);

// SEXTA FALA
setTimeout(() => {
    // MUDA COR
  document.body.style.background = "black";
  background.style.background = "black";

  setDialogue(`
    Mas...
  `);

}, 19000);

// SÉTIMA FALA
setTimeout(() => {
    // VOLTA AO VERMELHO
  document.body.style.background = "#a00000";
  background.style.background = "#a00000";
  setDialogue(`
    Vermelho vibrante?
  `);

}, 22000);

// OITAVA FALA
setTimeout(() => {

  circle.innerHTML = `
    <div id="emoji">!</div>
  `;

  setDialogue(`
    Você deve ser muito intensa, certo?
  `);

}, 26000);

// NONA FALA
setTimeout(() => {

  setDialogue(`
    Sentir tudo com certa profundidade...
  `);

}, 30000);

// DÉCIMA FALA
setTimeout(() => {

  setDialogue(`
    Você é mais incrível do que eu pensava!
  `);

}, 34000);

  // quarta fala
  setTimeout(() => {

    circle.innerHTML = "";

    setDialogue(`
      Mas não estou aqui para isso!
    `);

  }, 37000);

  setTimeout(() => {

    circle.innerHTML = "";

    setDialogue(`
      O velho me deu a missão de lhe entregar isso.
    `);

  }, 40000);

  // envelope aparece
  setTimeout(() => {

    envelope.style.display = "flex";

  }, 40000);

}

envelope.onclick = () => {

  envelope.style.transform = "scale(0.8)";

  setTimeout(() => {

    envelope.style.display = "none";

    letter.style.display = "flex";

  }, 500);

};

closeLetter.onclick = () => {

  letter.style.display = "none";

  envelope.style.display = "none";

  setDialogue(`
    Espero que tenha gostado da coisa...
  `);

  setTimeout(() => {

    setDialogue(`
    Foi bom te conhecer, gostei da sua energia, ${playerName}.
  `);

  }, 4000);

  setTimeout(() => {

    setDialogue(`
    Se cuida.
  `);

  }, 6000);

  choices.innerHTML = "";

  setTimeout(() => {

    circle.style.opacity = "0";

    setTimeout(() => {

      setDialogue(`
        ...
      `);

    }, 3000);

  }, 9000);

};

talkNaibu.onclick = () => {

  letter.style.display = "none";

  envelope.style.display = "none";

  circle.style.opacity = "1";
   
  setDialogue(`
    Ah?!
  `);

    setTimeout(() => {

      setDialogue(`
        Você quer continuar falando comigo?
      `);

    }, 3000);

    setTimeout(() => {

      setDialogue(`
        Pensei que iria embora depois da carta...
      `);

    }, 6000);

    setTimeout(() => {

      setDialogue(`
        Hm...
      `);

    }, 9000);

    setTimeout(() => {

      setDialogue(`
        Você tem perguntas para mim?
      `);

    

  setChoices([

    {
      text: "Como você conheceu o velho?",
      action: oldManQuestion
    },

    {
      text: "O que exatamente você é?",
      action: naibuQuestion
    },

    {
      text: "Algum dia vamos conversar novamente?",
      action: seeAgainQuestion
    },

    {
      text: "Me despedir",
      action: goodbyeNaibu
    }

  ]);
  }, 11000);

};

function oldManQuestion() {

  setDialogue(`
    Hm...
  `);

  setTimeout(() => {

      setDialogue(`
        Aquele homem vive há anos no nosso mundo, muito mais do que você possa pensar...
      `);

    }, 3000);

    setTimeout(() => {

      setDialogue(`
        Mas a história é muito longa, as únicas coisas que posso dizer é que...
      `);

    }, 7000);

    setTimeout(() => {

      setDialogue(`
        Eu devo a ele e ele realmente gosta muito de você.
        `);
    }, 9000);

    setTimeout(() => {

      setDialogue(`
        ...
        `);
    }, 12000);

}

function naibuQuestion() {

  setDialogue(`
    Eu?
  `);

  setTimeout(() => {

      setDialogue(`
        Boa pergunta...
      `);

    }, 3000);

    setTimeout(() => {

      setDialogue(`
        Bem... É mais fácil eu dizer o que não sou! 
      `);

    }, 6000);

    setTimeout(() => {

      setDialogue(`
        Eu não sou um humano, mas já fui um. Também não sou uma alma. 
      `);

    }, 10000);

    setTimeout(() => {

      setDialogue(`
        Eu vivo entre os dois mundos.
      `);

    }, 14000);

    setTimeout(() => {

      setDialogue(`
        ...
        `);
    }, 17000);

}

function seeAgainQuestion() {

  setDialogue(`
    Talvez.
  `);

    setTimeout(() => {

      setDialogue(`
        Se o velho pedir...
      `);

    }, 3000);

    setTimeout(() => {

      setDialogue(`
        Eu apareço.
      `);

    }, 6000);

    setTimeout(() => {

      setDialogue(`
        ...
        `);
    }, 9000);
}

function goodbyeNaibu() {

  choices.innerHTML = "";

  setDialogue(`
    Certo...
  `);

  setTimeout(() => {

      setDialogue(`
        Então essa é nossa despedida.
      `);

    }, 3000);

    setTimeout(() => {

      setDialogue(`
         Se cuida, ${playerName}.
      `);

    }, 6000);

  setTimeout(() => {

    circle.style.opacity = "0";

    dialogue.innerHTML = "";

setTimeout(() => {

  secretArea.style.display = "flex";

}, 8000);

  }, 10000);

}

starButton.onclick = () => {

  secretOptions.style.display = "flex";

};
messageNaibu.onclick = () => {

  const message = prompt(
    "Escreva sua carta para Naibu:"
  );

  if(message && message.trim() !== "") {

  saveLetter(message);

}

   async function saveLetter(message) {

  const { data, error } = await supabaseClient
    .from("cartas")
    .insert([
      {
        mensagem: message
      }
    ]);

  if(error) {

    alert(error.message);

  } else {

    alert("Carta enviada!");

  }

}
};

startIntro();

function startIntro() {

  circle.style.opacity = "0";

  circle.classList.add("circle-intro");

  setTimeout(() => {

    setDialogue(`
      Oh, você chegou!
    `);

  }, 5000);

  setTimeout(() => {

    setDialogue(`
      Eu acho...
    `);

  }, 8000);

  setTimeout(() => {

    setDialogue(`
      Eu...
    `);

  }, 11000);

  setTimeout(() => {

    setDialogue(`
      Não enxergo.
    `);

  }, 15000);

  setTimeout(() => {

    setDialogue(`
      Ér... Deixando isso de lado...
    `);

  }, 17000);

  setTimeout(() => {

    setDialogue(`
      Você poderia me dizer o seu...
      nome?
    `);

    nameInputArea.style.display = "flex";

  }, 21000);

}

sendName.onclick = () => {

  const name = nameInput.value.trim().toLowerCase();
  playerName = nameInput.value.trim();

  if(name === "analice") {

    scene3();

  }

  else if(name === "muie") {

    scene31();

  }

  else if(name === "deusa") {

    scene32();

  }

  else if(name === "vampira") {

    scene33();

  }

  else {

    scene4();

  }

};

function scene3() {

  nameInputArea.style.display = "none";

  setDialogue(`
    Então seu nome é Analice mesmo...
  `);
  setTimeout(() => {

    setDialogue(`
      Que fofo.
    `);

  }, 4000);

  setTimeout(() => {

    setDialogue(`
      Eu achei que era “Muie”
      de tanto que o Velho fala
      “Minha Muie” para se referir a você!
    `);

  }, 7000);

  setTimeout(() => {

    resetCircle();

    startOriginalStory();

  }, 13000);

}

function scene31() {

  nameInputArea.style.display = "none";

  setDialogue(`
    Então seu nome é realmente “Muie”?
  `);

  setTimeout(() => {

    setDialogue(`
      hm...
    `);

  }, 4000);

  setTimeout(() => {

    setDialogue(`
      Eu não devia ter questionado o Velho...
    `);

  }, 6000);

  setTimeout(() => {

    resetCircle();

    startOriginalStory();

  }, 10000);

}

function scene32() {

  nameInputArea.style.display = "none";

  setDialogue(`
  Então você é realmente uma Deusa?
`);

setTimeout(() => {

  setDialogue(`
    Tipo aquelas que as pessoas cultuam?
  `);

}, 4000);

setTimeout(() => {

  setDialogue(`
    Estou lisonjeada em te conhecer.
  `);

}, 7000);

setTimeout(() => {

  setDialogue(`
    O próprio Velho diz lhe cultuar em segredo...
  `);

}, 12000);

  setTimeout(() => {

    setDialogue(`
      Apesar que agora não é mais segredo...
    `);

  }, 16000);

  setTimeout(() => {

    resetCircle();

    startOriginalStory();

  }, 20000);

}

function scene33() {

  nameInputArea.style.display = "none";

  setDialogue(`
    Você é realmente uma...
    Vampira?
  `);

  // círculo entra em pânico
  setTimeout(() => {

    circle.classList.add("hide-scared");

  }, 1500);

  // fala escondida
 setTimeout(() => {

  setDialogue(`
    Você não é má, certo?
  `);

}, 3500);

setTimeout(() => {

  setDialogue(`
    Creio que não...
  `);

}, 6500);

setTimeout(() => {

  setDialogue(`
    O Velho diz que você é gentil até demais...
  `);

}, 9500);

  // reaparece lentamente
  setTimeout(() => {

    circle.classList.remove("hide-scared");

    void circle.offsetWidth;

    circle.classList.add("return-circle");

  }, 9000);

  // volta ao normal
  setTimeout(() => {

  circle.classList.remove("return-circle");

  // reset visual completo
  circle.style.opacity = "1";

  circle.style.transform = "scale(1)";

    resetCircle();

    startOriginalStory();

}, 15000);

}

function scene4() {
  
  nameInputArea.style.display = "none";

  setDialogue(`
    Desculpe...
  `);

setTimeout(() => {

  setDialogue(`
    Mas não era para você estar aqui.
  `);

}, 4000);

  // FLASH
  setTimeout(() => {

    flash.classList.add("flash-animation");

  }, 6000);

  // CLÍMAX
  setTimeout(() => {

    // SOME TUDO
    dialogue.style.display = "none";
    circle.style.background = "none";
    circle.style.boxShadow = "none";

  }, 6500);

  setTimeout(() => {

    alerta();
    
  }, 8000);


  

}

function startOriginalStory() {
    circle.className = "circle";

  setDialogue(`
    Bem, até que enfim te conheci, ${playerName}!
    <br><br>
    Prazer em te conhecer.
  `);

  setChoices([

    {
      text: "O prazer é meu! Mas... Quem é você?",
      action: scene11
    },

    {
      text: "Como você sabe de tudo isso?",
      action: scene21
    }

  ]);

}

function resetCircle() {

  circle.className = "circle";

  circle.style.opacity = "1";

  circle.style.transform = "scale(1)";

  circle.style.animation = "none";

  void circle.offsetWidth;

  circle.style.animation = "";

}

function alerta()
{
alert("Sua memória foi apagada.");
}
