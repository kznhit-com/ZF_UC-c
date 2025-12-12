/* =========================
   الإعدادات العامة
========================= */

let soundEnabled = localStorage.getItem("sound") !== "off";

/* =========================
   أنميشن رسالة بنص الشاشة
========================= */

function showCenterMessage(text){
    const overlay = document.createElement("div");
    overlay.style.position = "fixed";
    overlay.style.inset = "0";
    overlay.style.background = "rgba(0,0,0,.6)";
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
    overlay.style.zIndex = "9999";
    overlay.style.animation = "fadeIn .4s ease";

    const box = document.createElement("div");
    box.style.background = "#f1faee";
    box.style.color = "#1d3557";
    box.style.padding = "30px 40px";
    box.style.borderRadius = "22px";
    box.style.fontSize = "28px";
    box.style.fontWeight = "bold";
    box.style.transform = "scale(.7)";
    box.style.animation = "popIn .4s ease forwards";
    box.innerText = text;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    setTimeout(()=>{
        overlay.style.animation = "fadeOut .5s ease forwards";
        setTimeout(()=>overlay.remove(),500);
    },3000);
}

/* =========================
   أنميشن CSS ديناميكي
========================= */
const style = document.createElement("style");
style.innerHTML = `
@keyframes popIn{to{transform:scale(1)}}
@keyframes fadeIn{from{opacity:0}to{opacity:1}}
@keyframes fadeOut{to{opacity:0}}
`;
document.head.appendChild(style);

/* =========================
   تنقّل ناعم
========================= */

function goTo(page){
    document.body.style.transition="opacity .25s ease";
    document.body.style.opacity="0";
    setTimeout(()=>location.href=page,250);
}

/* =========================
   الأصوات (جاهز)
========================= */

function playSound(audioId, volume=0.25){
    if(!soundEnabled) return;
    const a=document.getElementById(audioId);
    if(!a) return;
    a.currentTime=0;
    a.volume=volume;
    a.play();
}

function toggleSound(btn){
    soundEnabled=!soundEnabled;
    localStorage.setItem("sound",soundEnabled?"on":"off");
    if(btn) btn.innerText = soundEnabled ? "🔊 الصوت شغال" : "🔇 الصوت مقفول";
}

/* =========================
   حفظ الدرجات (موحّد)
========================= */

function saveScore({game, score, text}){
    localStorage.setItem("lastScore", score);

    if(game!=="memory"){
        let best = localStorage.getItem("bestScore");
        if(!best || score>best) localStorage.setItem("bestScore", score);
    }

    if(game==="memory"){
        let bestMem = localStorage.getItem("bestMemory");
        if(!bestMem || score<bestMem) localStorage.setItem("bestMemory", score);
    }

    localStorage.setItem(game+"Score", score);
    localStorage.setItem("tries", (Number(localStorage.getItem("tries"))||0)+1);

    let history = JSON.parse(localStorage.getItem("history")||"[]");
    history.push(text);
    localStorage.setItem("history", JSON.stringify(history));
}

/* =========================
   Reset شامل
========================= */

function resetAll(){
    if(!confirm("متأكد تبي تصفّر كل الدرجات؟")) return;
    localStorage.clear();
    location.reload();
}

/* =========================
   دخول الصفحة بسلاسة
========================= */

window.addEventListener("load",()=>{
    document.body.style.opacity="1";
});
