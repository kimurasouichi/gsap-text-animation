import gsap from "gsap";

export class GsapAnimation {
  constructor() {
    this.initText();
    this.initCover();
  }
  initText() {
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
        "-=0.3"
      );
  }

  initCover() {
    const cover = gsap.timeline();
    cover
      .from(".js-cover-1", {
        x: "-110%",
        delay: 2,
        stagger: 0.1,
      })
      .to(".js-cover-2", {
        visibility: "visible",
      })
      .to(
        ".js-cover-3",
        {
          visibility: "visible",
        },
        "<"
      )
      .to(".js-cover-3", {
        x: "110%",
      });
  }
}
