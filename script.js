/* ===== إعدادات عامة ===== */
*{
    box-sizing:border-box;
    font-family: Arial, sans-serif;
}

body{
    margin:0;
    min-height:100vh;
    background: linear-gradient(135deg,#1b2b2e,#0f1c1f);
    display:flex;
    justify-content:center;
    align-items:center;
    color:#fff;
}

/* ===== الحاوية ===== */
.game-container{
    background:#1f2f33;
    width:90%;
    max-width:560px;
    padding:40px 35px;
    border-radius:24px;
    box-shadow:0 30px 70px rgba(0,0,0,.7);
    text-align:center;
}

/* ===== زر الرجوع ===== */
.back{
    position:absolute;
    top:20px;
    left:20px;
    background:#eee;
    color:#111;
    border:none;
    border-radius:12px;
    padding:8px 14px;
    cursor:pointer;
}

/* ===== السؤال (بطاقة بيضاء) ===== */
.question{
    background:#fff;
    color:#111;
    padding:20px;
    border-radius:16px;
    font-size:30px;
    font-weight:bold;
    margin-bottom:30px;
}

/* ===== الخيارات (قوائم سوداء) ===== */
.answers{
    display:flex;
    flex-direction:column;
    gap:15px;
}

.answers button{
    background:#000;
    color:#fff;
    border:none;
    padding:18px;
    font-size:22px;
    border-radius:14px;
    cursor:pointer;
    transition:.2s;
}

.answers button:hover{
    background:#222;
    transform:scale(1.03);
}

/* ===== رسالة المنتصف ===== */
.center{
    position:fixed;
    inset:0;
    background:rgba(0,0,0,.8);
    display:flex;
    justify-content:center;
    align-items:center;
    z-index:1000;
}

.center div{
    background:#fff;
    color:#111;
    padding:30px 40px;
    border-radius:20px;
    font-size:26px;
    font-weight:bold;
}

/* ===== النتائج ===== */
.results{
    margin-top:25px;
    text-align:right;
}

.result{
    background:#fff;
    color:#111;
    padding:14px;
    border-radius:14px;
    margin-bottom:12px;
    font-size:15px;
}

.correct{
    color:green;
    font-weight:bold;
}

.incorrect{
    color:red;
    font-weight:bold;
}

/* ===== زر إعادة اللعب ===== */
.actions{
    margin-top:25px;
}

.actions button{
    width:100%;
    padding:16px;
    border:none;
    border-radius:16px;
    background:#e63946;
    color:#fff;
    font-size:20px;
    cursor:pointer;
}

.actions button:hover{
    background:#ff4d5a;
}
