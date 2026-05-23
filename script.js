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

function setChoices(options) {

  choices.innerHTML = "";

  options.forEach(option => {

    const btn = document.createElement("button");

    btn.innerText = option.text;

    btn.onclick = () => {

      // remove apenas o botão clicado
      btn.remove();

      // executa a ação
      option.action();

    };

    choices.appendChild(btn);

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
    Oh, eu não me apresentei ainda, foi mal!
    <br><br>
    Eu sou Naibu.
    <br><br>
    Aquele velho ranzinza falou muito sobre você!
  `);

  setTimeout(() => {

    neutralScene();

  }, 8000);

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

  // primeira fala
  setTimeout(() => {

    setDialogue(`
      Tenho que lhe dizer, ${playerName}...
      <br><br>
      Você tem uma energia muito bonita!
    `);

  }, 3000);

  setDialogue(`
    Tenho que lhe dizer, ${playerName}...
    <br><br>
    Você tem uma energia muito bonita!
  `);

  // tremidinha feliz
  setTimeout(() => {

    circle.classList.add("shake");

  }, 1000);

  // segunda fala
  setTimeout(() => {

    setDialogue(`
      Apesar que essa cor não combina tanto com sua energia...
      <br><br>
      Imaginei que seria uma cor pastel...
      <br><br>
      Mais alegre...
      <br><br>
      Mas...
      <br><br>
      Vermelho vibrante?
    `);
    

    // reação surpresa
    circle.innerHTML = `
      <div id="emoji">?</div>
    `;

  }, 6000);

  // terceira fala
  setTimeout(() => {

    circle.innerHTML = `
      <div id="emoji">!</div>
    `;

    setDialogue(`
      Você deve ser muito intensa, certo?
      <br><br>
      Sentir tudo com certa profundidade...
      <br><br>
      Você é mais incrível do que eu pensava!
    `);

  }, 13000);

  // quarta fala
  setTimeout(() => {

    circle.innerHTML = "";

    setDialogue(`
      Mas não estou aqui para isso!
      <br><br>
      O velho me deu a missão de lhe entregar isso.
    `);

  }, 19000);

  // envelope aparece
  setTimeout(() => {

    envelope.style.display = "flex";

    setDialogue(`
      Pode abrir!
    `);

  }, 24000);

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
    <br><br>
    Foi bom te conhecer, gostei da sua energia, ${playerName}.
    <br><br>
    Se cuida.
  `);

  choices.innerHTML = "";

  setTimeout(() => {

    circle.style.opacity = "0";

    setTimeout(() => {

      setDialogue(`
        ...
      `);

    }, 2000);

  }, 5000);

};

talkNaibu.onclick = () => {

  letter.style.display = "none";

  envelope.style.display = "none";

  circle.style.opacity = "1";

  setDialogue(`
    Ah?!
    <br><br>
    Você quer continuar falando comigo?
    <br><br>
    Pensei que iria embora depois da carta...
    <br><br>
    Hm...
    <br><br>
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

};

function oldManQuestion() {

  setDialogue(`
    Hm...
    <br><br>
    Aquele homem vive há anos no nosso mundo, muito mais do que você possa pensar...
    <br><br>
    Mas a história é muito longa, as únicas coisas que posso dizer é que...
    <br><br>
    Eu devo a ele e ele realmente gosta muito de você.
  `);

}

function naibuQuestion() {

  setDialogue(`
    Eu?
    <br><br>
    Boa pergunta...
    <br><br>
    É mais fácil eu dizer o que não sou! 
    <br><br>
    Eu não sou um humano, mas já fui um. Também não sou uma alma. 
    <br><br>
    Eu vivo entre os dois mundos.
  `);

}

function seeAgainQuestion() {

  setDialogue(`
    Talvez.
    <br><br>
    Se o velho pedir...
    <br><br>
    Eu apareço.
  `);

}

function goodbyeNaibu() {

  choices.innerHTML = "";

  setDialogue(`
    Certo...
    <br><br>
    Então essa é nossa despedida.
    <br><br>
    Se cuida, ${playerName}.
  `);

  setTimeout(() => {

    circle.style.opacity = "0";

    dialogue.innerHTML = "";

setTimeout(() => {

  secretArea.style.display = "flex";

}, 1000);

  }, 3000);

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
      <br><br>
      Eu acho...
    `);

  }, 5000);

  setTimeout(() => {

    setDialogue(`
      Eu...
      <br><br>
      Não enxergo.
      <br><br>
      Você poderia me dizer o seu...
      nome?
    `);

    nameInputArea.style.display = "flex";

  }, 9000);

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
    <br><br>
    Que fofo.
  `);

  setTimeout(() => {

    setDialogue(`
      Eu achei que era “Muie”
      de tanto que o Velho fala
      “Minha Muie” para se referir a você!
    `);

  }, 5000);

  setTimeout(() => {

    resetCircle();

startOriginalStory();

  }, 11000);

}

function scene31() {

  nameInputArea.style.display = "none";

  setDialogue(`
    Então seu nome é realmente “Muie”?
    <br><br>
    hm...
    <br><br>
    Eu não devia ter questionado o Velho...
  `);

  setTimeout(() => {

    resetCircle();

    startOriginalStory();

  }, 9000);

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

}, 3000);

setTimeout(() => {

  setDialogue(`
    Estou lisonjeada em te conhecer.
  `);

}, 6000);

setTimeout(() => {

  setDialogue(`
    O próprio Velho diz lhe cultuar em segredo...
  `);

}, 9000);

  setTimeout(() => {

    setDialogue(`
      Apesar que agora não é mais segredo...
    `);

  }, 12000);

  setTimeout(() => {

    resetCircle();

    startOriginalStory();

  }, 15000);

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

  startOriginalStory();

}, 15000);

}

function scene4() {

  nameInputArea.style.display = "none";

  setDialogue(`
    Desculpe...
    <br><br>
    Não era para você estar aqui.
  `);

  setTimeout(() => {

    flash.classList.add("flash-animation");

  }, 3000);

  setTimeout(() => {

    circle.style.opacity = "0";

    dialogue.innerHTML = `
      <div class="memory-error">
        SUA MEMÓRIA FOI APAGADA
      </div>
    `;

  }, 5000);

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

