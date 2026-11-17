const hands = ["✊ グー", "✌️ チョキ", "✋ パー"];
const resultEl = document.querySelector("#result");
const scoreEl = document.querySelector("#score");
let win = 0, lose = 0, draw = 0;
 
document.querySelectorAll(".hand").forEach((btn) => {
  btn.addEventListener("click", () => {
    const player = Number(btn.dataset.hand);              // 0=グー 1=チョキ 2=パー
    const computer = Math.floor(Math.random() * 3);       // 0〜2の乱数
 
    let message = "";
    if (player === computer) {
      draw = draw + 1;
      message = "あいこ！";
      resultEl.style.color = "gray";
    } else if ((player + 1) % 3 === computer) {           // 自分の番号+1（3で一周）が相手なら勝ち（解説参照）
      win = win + 1;
      message = "勝ち！";
      resultEl.style.color = "green";
    } else {
      lose = lose + 1;
      message = "負け...";
      resultEl.style.color = "red";
    }
 
    resultEl.textContent = `あなた: ${hands[player]} ／ 相手: ${hands[computer]} → ${message}`;
    scoreEl.textContent = `${win}勝 ${lose}敗 ${draw}あいこ`;
  });
});
