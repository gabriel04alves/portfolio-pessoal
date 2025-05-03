import Typewriter from "typewriter-effect/dist/core";

export function useTypewriter(elements) {
  elements.forEach(({ ref, strings, options }) => {
    const element = ref.value;
    if (!element) return;

    const typewriter = new Typewriter(element, {
      loop: options.loop || false,
      delay: options.delay || 75,
      ...options,
    });

    strings.forEach(({ text, pause }) => {
      typewriter.pauseFor(pause || 0).typeString(text);
    });

    typewriter.start();
  });
}
