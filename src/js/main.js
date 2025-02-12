import { TextSpanWrapper } from "./libs/script";
import { GsapAnimation } from "./libs/gsap";

export class Main {
  constructor() {
    this._init();
  }
  _init() {
    const textWrapper = new TextSpanWrapper();
    textWrapper.wrapAllTextWithSpans(".addSpan");
    new GsapAnimation();
  }
}
new Main();
