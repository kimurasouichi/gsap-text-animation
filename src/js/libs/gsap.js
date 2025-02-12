import gsap from "gsap";

export class GsapAnimation {
  constructor() {
    this.init();
  }
  init() {
    const tl = gsap.timeline();

    tl.from(".js-text-1 span", {
      opacity: 0,
      y: 10,
      delay: 1,
      stagger: 0.1,
      ease: "back.out(2.5)",
    })
      .from(
        ".js-text-2",
        {
          x: "-100%",
        },
        "<"
      )
      .to(
        ".js-text-2",
        {
          x: "100%",
        },
        "-=0.5"
      );
  }
}
