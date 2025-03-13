import { RefObject } from 'react'

function scrollToRef(ref: RefObject<HTMLDivElement | null>) {
  const offset = 200;
  const elementPosition = ref.current?.getBoundingClientRect().top ?? 0;
  const offsetPosition = window.scrollY + elementPosition - offset;
  console.log(offsetPosition)

  window.scrollTo({
    top: offsetPosition,
    behavior: "smooth",
  });
}

export { scrollToRef }
