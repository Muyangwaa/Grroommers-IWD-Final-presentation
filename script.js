const services = [
  ['Bath & Brush', 'Shampoo, conditioner, blow-dry and brushing for a smooth finish.', ['Everyday coat care', 'Light mat removal']],
  ['Hair Trim & Styling', 'Neat trims around paws, face, ears and body, styled to suit your dog.', ['Ear cleanup', 'Light styling']],
  ['Nail Care', 'Safe nail trimming with a gentle finishing touch.', ['Length check', 'Next-step advice']],
  ['Ear & Hygiene Care', 'Quick hygiene check and gentle cleaning, only what suits your dog.', ['Comfort', 'Cleanliness']],
];
document.getElementById('services-list').innerHTML = services.map(([title, text, items]) =>
  `<article class="card"><h3>${title}</h3><p>${text}</p><ul>${items.map(i => `<li>${i}</li>`).join('')}</ul></article>`).join('');

const prices = [['Bath & Brush', 'k300', 'k400', 'k500'], ['Hair Trim', 'k200', 'k200', 'k200'], ['Nail Care', 'k120', 'k150', 'k180']];
document.getElementById('price-rows').innerHTML = prices.map(row =>
  `<tr>${row.map((cell, i) => i ? `<td>${cell}</td>` : `<th scope="row">${cell}</th>`).join('')}</tr>`).join('');

document.getElementById('gallery-list').innerHTML = ['Before & after: coat refresh', 'Trim day: paws & face shaping']
  .map(caption => `<figure class="card"><figcaption>${caption}</figcaption></figure>`).join('');

const form = document.getElementById('booking');
const confirm = document.getElementById('confirm');
form.addEventListener('submit', event => {
  event.preventDefault();
  const dog = document.getElementById('dog').value;
  const service = document.getElementById('service').value;
  confirm.hidden = false;
  confirm.textContent = `Thanks! We’ll confirm ${service} for ${dog} within one working day.`;
  form.reset();
});