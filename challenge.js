/* ===== أدوات ===== */
function shuffle(a){
    return a.sort(()=>Math.random()-0.5);
}

/* ===== بنك الألوان ===== */
const colors = [
    {name:"أحمر", color:"red"},
    {name:"أزرق", color:"blue"},
    {name:"أخضر", color:"green"},
    {name:"أصفر", color:"gold"},
    {name:"بنفسجي", color:"purple"},
    {name:"برتقالي", color:"orange"}
];

/* ===== توليد 50 سؤال ===== */
const allQuestions = Array.from({length:50}, ()=>{
    const word = colors[Math.floor(Math.random()*colors.length)];
    const ink  = colors[Math.floor(Math.random()*colors.length)];
    return {
        text: word.name,
        color: ink.color,
        choices: shuffle(colors.map(c=>c.name)),
        answer: ink.name
    };
});

/* ===== اختيار 10 عشوائي ===== */
let questions = shuffle([...allQuestions]).slice(0,10);
let index = 0;
let score = 0;
let log = [];
let timer;

/* ===== عرض السؤال ===== */
function showQuestion(){
    clearTimeout(timer);

    const q = questions[index];
    const questionBox = document.getElementById("question");
    const answersBox  = document.getElementById("answers");

    questionBox.innerHTML = `
        اختر لون الخط:
        <br>
        <span style="color:${q.color}; font-size:36px;">
            ${q.text}
        </span>
    `;

    answersBox.innerHTML = "";
    shuffle([...q.choices]).forEach(choice=>{
        const btn = document.createElement("button");
        btn.innerText = choice;

        btn.style.background =
            choice==="أحمر"?"red":
            choice==="أزرق"?"blue":
            choice==="أخضر"?"green":
            choice==="أصفر"?"gold":
            choice==="بنفسجي"?"purple":
            "orange";

        btn.onclick = ()=>selectAnswer(choice);
        answersBox.appendChild(btn);
    });

    timer = setTimeout(()=>selectAnswer(null),5000);
}

/* ===== اختيار ===== */
function selectAnswer(selected){
    clearTimeout(timer);

    const q = questions[index];
    log.push({
        question: `${q.text} (${q.color})`,
        selected,
        correct: q.answer
    });

    if(selected === q.answer) score++;
    index++;

    if(index < questions.length){
        showQuestion();
    }else{
        endGame();
    }
}

/* ===== نهاية اللعبة ===== */
function endGame(){
    localStorage.setItem("challengeScore", score+"/10");

    let msg =
        score >= 7 ? "حي عينك كفو كفو!" :
        score >= 4 ? "مااااش!" :
        "لا حد يشوف درجتك بس";

    const overlay = document.createElement("div");
    overlay.className = "center";
    overlay.innerHTML = `<div>${msg}<br>درجتك: ${score}/10</div>`;
    document.body.appendChild(overlay);

    setTimeout(()=>{
        overlay.remove();

        const answersBox = document.getElementById("answers");
        const questionBox = document.getElementById("question");

        questionBox.innerText = "تفصيل الإجابات:";
        answersBox.innerHTML = "";

        log.forEach(r=>{
            const d = document.createElement("div");
            d.className = "result";
            d.innerHTML = `
                ${r.question}<br>
                <span class="${r.selected===r.correct ? "correct":"incorrect"}">
                    اختيارك: ${r.selected ?? "⏱️"}
                </span><br>
                <span class="correct">الصحيح: ${r.correct}</span>
            `;
            answersBox.appendChild(d);
        });
    },3000);
}

/* ===== بدء ===== */
showQuestion();
