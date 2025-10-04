'use client'

import { useEffect } from 'react'

// Declare gtag global
declare global {
  interface Window {
    gtag: (...args: any[]) => void
    dataLayer: any[]
  }
}

export default function AdvancedAnalytics() {
  useEffect(() => {
    // Wait for gtag to be available
    const checkGtag = setInterval(() => {
      if (typeof window.gtag === 'function') {
        clearInterval(checkGtag)
        initializeAdvancedTracking()
      }
    }, 100)

    return () => clearInterval(checkGtag)
  }, [])

  const initializeAdvancedTracking = () => {
    // 1. Scroll Depth Tracking (25%, 50%, 75%, 100%)
    let scrollDepths = { 25: false, 50: false, 75: false, 100: false }

    const trackScrollDepth = () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      )

      Object.keys(scrollDepths).forEach((depth) => {
        const depthNum = parseInt(depth)
        if (scrollPercent >= depthNum && !scrollDepths[depthNum as keyof typeof scrollDepths]) {
          scrollDepths[depthNum as keyof typeof scrollDepths] = true
          window.gtag('event', 'scroll_depth', {
            event_category: 'engagement',
            event_label: `${depth}%`,
            value: depthNum,
            non_interaction: true,
          })
        }
      })
    }

    window.addEventListener('scroll', trackScrollDepth, { passive: true })

    // 2. Time on Page Tracking (15s, 30s, 60s, 120s, 300s)
    const timeIntervals = [15, 30, 60, 120, 300] // seconds

    timeIntervals.forEach((seconds) => {
      setTimeout(() => {
        window.gtag('event', 'time_on_page', {
          event_category: 'engagement',
          event_label: `${seconds}s`,
          value: seconds,
          non_interaction: true,
        })
      }, seconds * 1000)
    })

    // 3. WhatsApp Click Tracking (PRIMARY CONVERSION)
    const trackWhatsAppClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href*="wa.me"]')

      if (link) {
        window.gtag('event', 'conversion', {
          event_category: 'lead_generation',
          event_label: 'whatsapp_click',
          value: 1,
        })

        window.gtag('event', 'generate_lead', {
          currency: 'BRL',
          value: 500, // Estimated conversion value
        })
      }
    }

    document.addEventListener('click', trackWhatsAppClick)

    // 4. Phone Click Tracking
    const trackPhoneClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="tel:"]')

      if (link) {
        window.gtag('event', 'conversion', {
          event_category: 'lead_generation',
          event_label: 'phone_click',
          value: 1,
        })
      }
    }

    document.addEventListener('click', trackPhoneClick)

    // 5. Email Click Tracking
    const trackEmailClick = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a[href^="mailto:"]')

      if (link) {
        window.gtag('event', 'contact_attempt', {
          event_category: 'lead_generation',
          event_label: 'email_click',
          value: 1,
        })
      }
    }

    document.addEventListener('click', trackEmailClick)

    // 6. Section Visibility Tracking (for SEO - content engagement)
    const observeSections = () => {
      const sections = document.querySelectorAll('section[id]')

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              const sectionId = entry.target.id
              window.gtag('event', 'section_view', {
                event_category: 'content_engagement',
                event_label: sectionId,
                non_interaction: true,
              })
            }
          })
        },
        { threshold: 0.5 } // 50% visible
      )

      sections.forEach((section) => observer.observe(section))
    }

    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', observeSections)
    } else {
      observeSections()
    }

    // 7. Internal Link Clicks (navigation patterns for SEO)
    const trackInternalLinks = (e: Event) => {
      const target = e.target as HTMLElement
      const link = target.closest('a')

      if (link && link.hostname === window.location.hostname && !link.href.includes('wa.me')) {
        window.gtag('event', 'internal_navigation', {
          event_category: 'navigation',
          event_label: link.pathname,
          non_interaction: false,
        })
      }
    }

    document.addEventListener('click', trackInternalLinks)

    // 8. Form Focus Tracking (user intent)
    const trackFormFocus = (e: Event) => {
      const target = e.target as HTMLElement

      if (target.tagName === 'INPUT' || target.tagName === 'TEXTAREA') {
        window.gtag('event', 'form_start', {
          event_category: 'engagement',
          event_label: target.getAttribute('name') || 'unnamed_field',
        })
      }
    }

    document.addEventListener('focus', trackFormFocus, true)

    // 9. Rage Click Detection (UX issue indicator)
    let clickCount = 0
    let clickTimer: NodeJS.Timeout

    const detectRageClick = (e: Event) => {
      clickCount++

      clearTimeout(clickTimer)
      clickTimer = setTimeout(() => {
        if (clickCount >= 5) {
          const target = e.target as HTMLElement
          window.gtag('event', 'rage_click', {
            event_category: 'ux_issue',
            event_label: target.tagName,
            value: clickCount,
          })
        }
        clickCount = 0
      }, 1000)
    }

    document.addEventListener('click', detectRageClick)

    // 10. Copy Text Event (engagement indicator)
    const trackCopy = () => {
      const selection = window.getSelection()?.toString()
      if (selection && selection.length > 20) {
        window.gtag('event', 'text_copied', {
          event_category: 'engagement',
          event_label: 'content_copy',
          value: selection.length,
          non_interaction: true,
        })
      }
    }

    document.addEventListener('copy', trackCopy)

    // Cleanup
    return () => {
      window.removeEventListener('scroll', trackScrollDepth)
      document.removeEventListener('click', trackWhatsAppClick)
      document.removeEventListener('click', trackPhoneClick)
      document.removeEventListener('click', trackEmailClick)
      document.removeEventListener('click', trackInternalLinks)
      document.removeEventListener('focus', trackFormFocus, true)
      document.removeEventListener('click', detectRageClick)
      document.removeEventListener('copy', trackCopy)
    }
  }

  return null // This component doesn't render anything
}
