/* تنقل */
function goTo(p){location.href=p}

/* دارك مود */
(function(){
    if(localStorage.getItem("dark")==="on")
        document.body.classList.add("dark");
})();

function toggleDark(){
    document.body.classList.toggle("dark");
    localStorage.setItem("dark",
        document.body.classList.contains("dark")?"on":"off"
    );
}

/* منيو */
function toggleMenu(){
    const m=document.getElementById("menu");
    m.style.display=m.style.display==="block"?"none":"block";
}

/* تحميل الدرجات */
function loadScores(){
    lastScore.innerText = localStorage.getItem("lastScore")||"-";
    tries.innerText = localStorage.getItem("tries")||0;
    mathScore.innerText = localStorage.getItem("mathScore")||"-";
    logicScore.innerText = localStorage.getItem("logicScore")||"-";
    memoryScore.innerText = localStorage.getItem("memoryScore")||"-";
}
loadScores();

/* حفظ نتيجة (تستعمل داخل الألعاب) */
function saveScore(game,score,text){
    localStorage.setItem(game+"Score",score);
    localStorage.setItem("lastScore",text);
    localStorage.setItem("tries",(+(localStorage.getItem("tries")||0))+1);
}

/* تصفير */
function resetAll(){
    localStorage.clear();
    location.reload();
}

/* رسالة وسط الشاشة */
function showCenterMessage(t){
    const d=document.createElement("div");
    d.innerText=t;
    d.style.cssText=`
        position:fixed;
        top:50%;left:50%;
        transform:translate(-50%,-50%);
        background:#000c;
        color:#fff;
        padding:25px 35px;
        border-radius:18px;
        font-size:24px;
        z-index:9999;
    `;
    document.body.appendChild(d);
    setTimeout(()=>d.remove(),3000);
}
