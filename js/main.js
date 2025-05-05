document.addEventListener('DOMContentLoaded', function() {
  // Initialize pricing table
  initPricingTable();
  
  // Initialize FAQ accordion
  initFAQ();
  
  // Add Discord redirect to all purchase buttons
  document.querySelectorAll('.btn-primary').forEach(button => {
    if (button.textContent.includes('Buy') || button.textContent.includes('Order') || 
        button.textContent.includes('Purchase') || button.textContent.includes('View') ||
        button.textContent.includes('Browse') || button.textContent.includes('Get')) {
      button.addEventListener('click', function(e) {
        e.preventDefault();
        window.location.href = 'https://discord.gg/robux-palace';
      });
    }
  });
});

function initPricingTable() {
  const pricingData = [
    { amount: '10,000', price: '10' },
    { amount: '20,000', price: '20' },
    { amount: '30,000', price: '30' },
    { amount: '40,000', price: '40' },
    { amount: '50,000', price: '50' },
    { amount: '60,000', price: '60' },
    { amount: '70,000', price: '70' },
    { amount: '80,000', price: '80' },
    { amount: '90,000', price: '90' },
    { amount: '100,000', price: '100' },
    { amount: '200,000', price: '200' },
    { amount: '300,000', price: '300' },
    { amount: '400,000', price: '400' },
    { amount: '500,000', price: '500' },
    { amount: '600,000', price: '600' },
    { amount: '700,000', price: '700' },
    { amount: '800,000', price: '800' },
    { amount: '900,000', price: '900' },
    { amount: '1,000,000', price: '1,000' }
  ];

  const tbody = document.querySelector('.pricing-table tbody');
  
  pricingData.forEach(item => {
    const tr = document.createElement('tr');
    tr.innerHTML = `
      <td>${item.amount}</td>
      <td>${item.price}</td>
      <td><button class="btn-small btn-primary" data-i18n="pricing.buy">Buy Now</button></td>
    `;
    tbody.appendChild(tr);
  });
}

function initFAQ() {
  const faqItems = document.querySelectorAll('.faq-item');
  
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    
    question.addEventListener('click', () => {
      // Close other open items
      faqItems.forEach(otherItem => {
        if (otherItem !== item && otherItem.classList.contains('active')) {
          otherItem.classList.remove('active');
        }
      });
      
      // Toggle current item
      item.classList.toggle('active');
    });
  });
}