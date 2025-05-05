document.addEventListener('DOMContentLoaded', function() {
    const vouches = [
      {
        quote: "The purchasing process was seamless and efficient. Received my limited item promptly without complications.",
        role: "Verified Buyer"
      },
      {
        quote: "Customer support was highly responsive. The account matched the description perfectly.",
        role: "Verified Buyer"
      },
      {
        quote: "Delivered 100,000 Robux securely and efficiently. Will certainly purchase again.",
        role: "Verified Buyer"
      },
      {
        quote: "Transaction was transparent and secure. Included full email access as promised.",
        role: "Verified Buyer"
      },
      {
        quote: "Service quality was exceptional. Delivery was prompt with flexible payment options.",
        role: "Verified Buyer"
      },
      {
        quote: "All items were authentic and as advertised. Professional service throughout.",
        role: "Verified Buyer"
      }
    ];
  
    const avatars = [
      "images/avatars/anonymous1.jpg",
      "images/avatars/anonymous2.jpg",
      "images/avatars/anonymous3.jpg",
      "images/avatars/anonymous4.jpg",
      "images/avatars/anonymous5.jpg",
      "images/avatars/anonymous6.jpg"
    ];
  
    const vouchesContainer = document.getElementById('vouches');
    const dotsContainer = document.querySelector('.vouch-dots');
    let currentVouch = 0;
    let vouchInterval;
  
    // Create dots
    vouches.forEach((_, index) => {
      const dot = document.createElement('div');
      dot.classList.add('vouch-dot');
      if (index === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showVouch(index));
      dotsContainer.appendChild(dot);
    });
  
    // Create vouches
    vouches.forEach((vouch, index) => {
      const div = document.createElement('div');
      div.className = 'vouch';
      if (index === 0) div.classList.add('active');
      
      div.innerHTML = `
        <div class="vouch-quote">${vouch.quote}</div>
        <div class="vouch-user">
          <img class="vouch-avatar" src="${avatars[index]}" alt="Anonymous User">
          <div class="vouch-info">
            <div class="vouch-name">Anonymous</div>
            <div class="vouch-role">${vouch.role}</div>
          </div>
        </div>
      `;
      
      vouchesContainer.appendChild(div);
    });
  
    // Navigation buttons
    document.getElementById('prev-vouch').addEventListener('click', () => {
      showVouch((currentVouch - 1 + vouches.length) % vouches.length);
      resetInterval();
    });
  
    document.getElementById('next-vouch').addEventListener('click', () => {
      showVouch((currentVouch + 1) % vouches.length);
      resetInterval();
    });
  
    function showVouch(index) {
      const vouches = document.querySelectorAll('.vouch');
      const dots = document.querySelectorAll('.vouch-dot');
      
      // Hide current vouch
      vouches[currentVouch].classList.remove('active');
      dots[currentVouch].classList.remove('active');
      
      // Show new vouch
      currentVouch = index;
      vouches[currentVouch].classList.add('active');
      dots[currentVouch].classList.add('active');
    }
  
    function startInterval() {
      vouchInterval = setInterval(() => {
        showVouch((currentVouch + 1) % vouches.length);
      }, 5000);
    }
  
    function resetInterval() {
      clearInterval(vouchInterval);
      startInterval();
    }
  
    // Start the automatic rotation
    startInterval();
  });