import { useEffect } from 'react'

/**
 * Observes elements with .reveal class and adds .visible when they enter the viewport.
 * Should be called once at the app level or per-section.
 */
export function useReveal() {
  useEffect(() => {
    const elements = document.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const siblings = [
              ...entry.target.parentElement.querySelectorAll('.reveal:not(.visible)'),
            ]
            const idx = siblings.indexOf(entry.target)
            setTimeout(() => {
              entry.target.classList.add('visible')
            }, idx * 80)
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12 }
    )
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}
