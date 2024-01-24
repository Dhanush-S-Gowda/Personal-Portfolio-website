const nav = document.body.querySelector(".center-nav");
const hamburger = document.querySelector(".menu");
let i = 2;
hamburger.addEventListener("click", () => {
  if (i % 2 == 0) {
    nav.style.display = "flex";
  } else {
    nav.style.display = "none";
  }
  i++;
});

const terms = [
  "Developer.",
  "Data analyst.",
  "Front-end developer.",
  "Web designer.",
  "Data scientist.",
];
let index = 0;
let currentTerm = terms[index];
let charIndex = 0;

function type() {
  const typingElement = document.getElementById("typing-text");
  typingElement.innerText = currentTerm.slice(0, charIndex);
  charIndex++;

  if (charIndex > currentTerm.length) {
    charIndex = 0;
    index = (index + 1) % terms.length;
    currentTerm = terms[index];
    setTimeout(type, 1000);
  } else {
    setTimeout(type, 150);
  }
}
type();

let active = 3;
const mncircles = document.querySelectorAll(".mncircle");
const seconds = document.querySelectorAll(".second h3");
const images = document.querySelectorAll(".second img");

gsap.to(mncircles[active - 1], {
  backgroundColor: "rgb(253, 0, 68)",
});

gsap.to(seconds[active - 1], {
  color: "rgb(253, 0, 68)",
});

images[active - 1].addEventListener("mouseover", () => {
  images[active - 1].style.transform = "scale(2.2)";
});

images[active - 1].addEventListener("mouseout", () => {
  images[active - 1].style.transform = "scale(1)";
});

function coloroff() {
  gsap.to(mncircles, {
    backgroundColor: "rgb(255, 255, 255)",
  });
  gsap.to(seconds, {
    color: "rgb(255, 255, 255)",
  });
}

mncircles.forEach(function (val, index) {
  val.addEventListener("click", function () {
    gsap.to("#circle", {
      rotate: (3 - (index + 1)) * 20,
      ease: Expo.easeInOut,
      duration: 1,
    });
    coloroff();
    gsap.to(this, {
      backgroundColor: "rgb(253, 0, 68)",
    });
    gsap.to(seconds[index], {
      color: "rgb(253, 0, 68)",
    });

    images[index].addEventListener("mouseover", () => {
      images[index].style.transform = "scale(2.2)";
    });

    images[index].addEventListener("mouseout", () => {
      images[index].style.transform = "scale(1)";
    });
  });
});

gsap.to("#circle", {
  rotate: 0,
  ease: Expo.easeInOut,
  duration: 2,
});

// let screenWidth = window.screen.width || screen.width;

// const slider = document.querySelector(".slider");
// const sections = gsap.utils.toArray(".slider section");

// let t1 = gsap.timeline({
//   defaults: {
//     ease: "none",
//   },
//   scrollTrigger: {
//     trigger: slider,
//     pin: true,
//     scrub: 2,
//     end: () => "+=" + slider.offsetWidth,
//   },
// });

// t1.to(slider, {
//   xPercent: -66,
// });

// sections.forEach((stop, index) => {
//   t1.from(stop.querySelector(".content"), {
//     yPercent: 5,
//     opacity: 0,
//     scrollTrigger: {
//       trigger: stop.querySelector(".content"),
//       start: "-30% center",
//       end: "-20% center",
//       containerAnimation: t1,
//       scrub: true,
//       markers: false,
//     },
//   });
// });



// const lenis = new Lenis()

// function raf(time) {
//   lenis.raf(time)
//   requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)
