let rounds = 10;
let current = 0;
let score = 0;

const instruction = document.getElementById("instruction");
const choicesBox = document.getElementById("choices");

const challenges = [
    // أكبر رقم
    () => {
        const nums = shuffle([rand(1,9), rand(1,9), rand(1,9)]);
        const correct = Math.max(...nums);
        instruction.innerText = "اضغط الرقم الأكبر";
        renderChoices(nums, correct);
    },

    // أصغر رقم
    () => {
        const nums = shuffle([rand(1,9), rand(1,9), rand(1,9)]);
        const correct = Math.min(...nums);
        instruction.innerText = "اضغط الرقم الأصغر";
        renderChoices(nums, correct);
    },

    // لون مختلف
    () => {
        const colors = ["red","blue","green"];
        const pick = colors[Math.floor(Math.random()*colors.length)];
        instruction.innerText = "اضغط اللون " + arabicColor(pick);
        const shuffled = shuffle([...colors]);
        renderColorChoices(shuffled, pick);
    }
];

function startRound(){
    choicesBox.innerHTML = "";
    challenges[Math.floor(Math.random()*challenges.length)]();
}

function renderChoices(arr, correct){
    arr.forEach(v=>{
        const b = document.createElement("button");
        b.className="option";
        b.innerText=v;
        b.onclick=()=>select(v===correct);
        choicesBox.appendChild(b);
    });
}

function renderColorChoices(arr, correct){
    arr.forEach(c=>{
        const b = document.createElement("button");
        b.className="option";
        b.innerText = arabicColor(c);
        b.style.background = c;
        b.style.color = "#fff";
        b.onclick=()=>select(c===correct);
        choicesBox.appendChild(b);
    });
}

function select(isCorrect){
    if(isCorrect) score++;
    current++;
    current < rounds ? startRound() : endGame();
}

function endGame(){
    document.getElementById("game").style.display="none";

    const msg =
        score>=7 ? "حي عينك كفو كفو" :
        score>=4 ? "مااااش" :
        "لا أحد يشوف درجتك بس";

    showCenterMessage(msg + "\nدرجتك: " + score + " / 10");

    saveScore({
        game:"challenge",
        score:score,
        text:"🎮 تحدي: "+score+"/10"
    });

    setTimeout(()=>{
        document.getElementById("actions").style.display="block";
    },3000);
}

/* أدوات */
function rand(min,max){return Math.floor(Math.random()*(max-min+1))+min;}
function shuffle(a){return a.sort(()=>Math.random()-0.5)}
function arabicColor(c){
    return c==="red"?"الأحمر":c==="blue"?"الأزرق":"الأخضر";
}

/* بدء */
startRound();
