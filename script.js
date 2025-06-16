// Wait for the DOM to be fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Mobile menu toggle
  const menuToggle = document.querySelector(".menu-toggle")
  const nav = document.querySelector("nav")

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      nav.classList.toggle("active")
    })
  }

  // Close menu when clicking outside
  document.addEventListener("click", (event) => {
    if (!event.target.closest("nav") && !event.target.closest(".menu-toggle")) {
      if (nav.classList.contains("active")) {
        nav.classList.remove("active")
      }
    }
  })

  // Gallery filtering
  const filterBtns = document.querySelectorAll(".filter-btn")
  const galleryItems = document.querySelectorAll(".gallery-item")

  if (filterBtns.length > 0) {
    filterBtns.forEach((btn) => {
      btn.addEventListener("click", function () {
        // Remove active class from all buttons
        filterBtns.forEach((btn) => btn.classList.remove("active"))

        // Add active class to clicked button
        this.classList.add("active")

        const filter = this.getAttribute("data-filter")

        // Filter gallery items
        galleryItems.forEach((item) => {
          if (filter === "all" || item.classList.contains(filter)) {
            item.style.display = "block"

            // Add animation
            setTimeout(() => {
              item.style.opacity = "1"
              item.style.transform = "translateY(0)"
            }, 100)
          } else {
            item.style.opacity = "0"
            item.style.transform = "translateY(20px)"

            setTimeout(() => {
              item.style.display = "none"
            }, 300)
          }
        })
      })
    })
  }

  // Scroll animations
  const animateElements = document.querySelectorAll(".fade-in, .slide-up")

  function checkScroll() {
    animateElements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top
      const windowHeight = window.innerHeight

      if (elementTop < windowHeight - 100) {
        element.style.opacity = "1"
        element.style.transform = "translateY(0)"
      }
    })
  }

  // Initial check
  checkScroll()

  // Check on scroll
  window.addEventListener("scroll", checkScroll)

  // Preload images for better performance
  function preloadImages() {
    const images = document.querySelectorAll("img")
    images.forEach((img) => {
      const src = img.getAttribute("src")
      if (src) {
        const newImg = new Image()
        newImg.src = src
      }
    })
  }

  preloadImages()
})
