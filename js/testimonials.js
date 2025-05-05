document.addEventListener('DOMContentLoaded', function() {
    const testimonials = [
      {
        quote: "The purchasing process was seamless and efficient. I received my limited item promptly and without any complications.",
        name: "Ethan Carter",
        role: "Verified Buyer",
        src: "images/avatars/customer1.jpg"
      },
      {
        quote: "Customer support was highly responsive and addressed all my queries in a timely manner. The account I acquired matched the description perfectly.",
        name: "Sophia Lee",
        role: "Roblox Trader",
        src: "images/avatars/customer2.jpg"
      },
      {
        quote: "Initially, I was hesitant, but Robux Palace delivered 100,000 Robux securely and efficiently. I will certainly purchase again.",
        name: "Liam Turner",
        role: "Returning Customer",
        src: "images/avatars/customer3.jpg"
      },
      {
        quote: "The transaction was transparent and secure. My account included full email access and the promised bonus Robux.",
        name: "Ava Martinez",
        role: "Premium Account Buyer",
        src: "images/avatars/customer4.jpg"
      },
      {
        quote: "Service quality was exceptional. Delivery was prompt, and payment methods were flexible and convenient.",
        name: "Noah Kim",
        role: "Limiteds Collector",
        src: "images/avatars/customer5.jpg"
      },
      {
        quote: "All items were authentic and as advertised. I appreciate the professionalism and attention to detail throughout the process.",
        name: "Olivia Brown",
        role: "Satisfied Customer",
        src: "images/avatars/customer6.jpg"
      }
    ];
  
    const testimonialsContainer = document.getElementById('testimonials');
    const dotsContainer = document.querySelector('.testimonial-dots');
    let currentTestimonial = 0;
    let testimonialInterval;
  
    // Create dots
    testimonials.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('testimonial-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showTestimonial(index));
      dotsContainer.appendChild(dot);
    });
  
    // Create testimonials
    testimonials.forEach((testimonial, index) => {
      const div = document.createElement('div');
      div.className = 'testimonial';
      if (index === 0) div.classList.add('active');
      
      div.innerHTML = `
        <div class="testimonial-quote">${testimonial.quote}</div>
        <div class="testimonial-user">
          <img class="testimonial-avatar" src="${testimonial.src}" alt="${testimonial.name}">
          <div class="testimonial-info">
            <div class="testimonial-name">${testimonial.name}</div>
            <div class="testimonial-role">${testimonial.role}</div>
          </div>
        </div>
      `;
      
      testimonialsContainer.appendChild(div);
    });
  
    // Navigation buttons
    document.getElementById('prev-testimonial').addEventListener('click', () => {
      showTestimonial((currentTestimonial - 1 + testimonials.length) % testimonials.length);
      resetInterval();
    });
  
    document.getElementById('next-testimonial').addEventListener('click', () => {
      showTestimonial((currentTestimonial + 1) % testimonials.length);
      resetInterval();
    });
  
    function showTestimonial(index) {
      const testimonials = document.querySelectorAll('.testimonial');
      const dots = document.querySelectorAll('.testimonial-dot');
      
      // Hide current testimonial
      testimonials[currentTestimonial].classList.remove('active');
      dots[currentTestimonial].classList.remove('active');
      
      // Show new testimonial
      currentTestimonial = index;
      testimonials[currentTestimonial].classList.add('active');
      dots[currentTestimonial].classList.add('active');
    }
  
    function startInterval() {
      testimonialInterval = setInterval(() => {
        showTestimonial((currentTestimonial + 1) % testimonials.length);
      }, 5000);
    }
  
    function resetInterval() {
      clearInterval(testimonialInterval);
      startInterval();
    }
  
    // Start the automatic rotation
    startInterval();
  });