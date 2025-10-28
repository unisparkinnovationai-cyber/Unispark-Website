'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView } from 'react-intersection-observer'

interface UseAnimationOptions {
  threshold?: number
  triggerOnce?: boolean
  rootMargin?: string
  delay?: number
}

export function useScrollAnimation(options: UseAnimationOptions = {}) {
  const {
    threshold = 0.1,
    triggerOnce = true,
    rootMargin = '0px 0px -50px 0px',
    delay = 0
  } = options

  const [isVisible, setIsVisible] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const elementRef = useRef<HTMLElement>(null)

  const { ref, inView } = useInView({
    threshold,
    rootMargin,
    triggerOnce
  })

  useEffect(() => {
    if (inView && !hasAnimated) {
      if (delay > 0) {
        setTimeout(() => {
          setIsVisible(true)
          setHasAnimated(true)
        }, delay)
      } else {
        setIsVisible(true)
        setHasAnimated(true)
      }
    }
  }, [inView, hasAnimated, delay])

  return {
    ref: (node: HTMLElement | null) => {
      ref(node)
      elementRef.current = node
    },
    isVisible,
    hasAnimated
  }
}

export function useStaggeredAnimation(
  itemCount: number,
  staggerDelay: number = 100
) {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView) {
      for (let i = 0; i < itemCount; i++) {
        setTimeout(() => {
          setVisibleItems(prev => [...prev, i])
        }, i * staggerDelay)
      }
    }
  }, [inView, itemCount, staggerDelay])

  return {
    ref,
    visibleItems,
    isItemVisible: (index: number) => visibleItems.includes(index)
  }
}

export function useCounterAnimation(
  end: number,
  duration: number = 2000,
  start: number = 0
) {
  const [count, setCount] = useState(start)
  const [isAnimating, setIsAnimating] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true)
      const startTime = Date.now()
      
      const updateCount = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        const currentCount = Math.floor(start + (end - start) * easeOutQuart)
        
        setCount(currentCount)
        
        if (progress < 1) {
          requestAnimationFrame(updateCount)
        }
      }
      
      requestAnimationFrame(updateCount)
    }
  }, [inView, end, duration, start, isAnimating])

  return {
    ref,
    count,
    isAnimating
  }
}

export function useParallaxScroll(speed: number = 0.5) {
  const [offsetY, setOffsetY] = useState(0)
  const elementRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const rect = elementRef.current.getBoundingClientRect()
        const scrolled = window.pageYOffset
        const rate = scrolled * -speed
        setOffsetY(rate)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [speed])

  return {
    ref: elementRef,
    offsetY
  }
}

export function useTypingAnimation(
  text: string,
  speed: number = 50,
  delay: number = 0
) {
  const [displayText, setDisplayText] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true
  })

  useEffect(() => {
    if (inView && !isTyping) {
      setIsTyping(true)
      let currentIndex = 0
      
      const typeText = () => {
        if (currentIndex < text.length) {
          setDisplayText(text.slice(0, currentIndex + 1))
          currentIndex++
          setTimeout(typeText, speed)
        } else {
          setIsTyping(false)
        }
      }

      setTimeout(typeText, delay)
    }
  }, [inView, text, speed, delay, isTyping])

  return {
    ref,
    displayText,
    isTyping
  }
}
