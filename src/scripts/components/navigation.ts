import { ForEach } from "../helpers/dom"

const linkClick = (e: Event) => {
  const target: HTMLLinkElement = e.currentTarget as HTMLLinkElement
  target.classList.toggle("main-navigation__link--clicked")
}

const nav: HTMLElement = document.querySelector(".main-navigation")
if (nav) {
  ForEach(nav.querySelectorAll(".main-navigation__link"), (link: HTMLLinkElement) => {
    link.addEventListener("click", linkClick)
  })
}

