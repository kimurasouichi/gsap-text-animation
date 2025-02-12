export class TextSpanWrapper {
  // コンストラクタでは特に何もしないが、将来的に拡張することを想定している
  constructor() {}

  // 文字を<span>タグで囲むメソッド
  wrapCharacterWithSpan(char) {
    return `<span>${char}</span>`;
  }

  // 指定された要素内のテキストを1文字ずつ<span>タグで囲むメソッド
  wrapAllTextWithSpans(selector) {
    const elements = document.querySelectorAll(selector); // 指定された要素を全て取得
    elements.forEach((element) => {
      // 取得した要素全てに対してループ処理
      const texts = element.textContent // 要素内のテキストを取得
        .split("") // 1文字ずつ分割
        .map((char) => this.wrapCharacterWithSpan(char)) // 各文字を<span>タグで囲む
        .join(""); // 文字列に戻す

      element.innerHTML = texts; // 要素内に<span>タグで囲まれたテキストを表示
    });
  }
}



// const txt = gsap.timeline({ repeat: 3 });
// txt
//   .from(".js_1 > span", 1, {
//     y: "100%",
//     opacity: 0,
//     stagger: {
//       amount: 0.7,
//     },
//     ease: "back.out(2.5)",
//   })
//   .from(
//     ".js_1-2",
//     {
//       duration: 1.2,
//       ease: "cubic-bezier(0.22, 1, 0.36, 1)",
//       width: "0",
//     },
//     "<=0.6"
//   );
