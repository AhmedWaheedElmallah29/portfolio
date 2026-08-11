import { useEffect, useRef } from 'react'

/**
 * Animates a number counter from 0 → target when element enters viewport.
 * @param {number} target  - Final number value
 * @param {number} duration - Animation duration in ms
 * @returns {React.RefObject} - Attach to the element displaying the count
 */
export function useCounter(target, duration = 1800) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        observer.unobserve(el)

        let current = 0
        const step = 16
        const increment = target / (duration / step)

        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            current = target
            clearInterval(timer)
          }
          el.textContent = Math.round(current)
        }, step)
      },
      { threshold: 0.5 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [target, duration])

  return ref
}
