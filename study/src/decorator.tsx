function WithTemplate(template: string, hookId: string) {
  return function (_: Function) {
    const hookEl = document.getElementById(hookId)!;
    if (hookEl) {
      hookEl.innerHTML = template;
    }
  };
}

//@Logger("引数を渡す")
@WithTemplate("<h1>やったぜ</h1>", "App")
class Person {
  name = "Max";

  constructor() {
    console.log("Personオブジェクト作成中...");
  }
}
