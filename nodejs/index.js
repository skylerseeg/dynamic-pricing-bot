// dynamic-pricing-bot/nodejs/index.js
const fetch = require('node-fetch');

(async () => {
  // 1) Fetch market index and competitor price
  const [indexRes, compRes] = await Promise.all([
    fetch('https://api.rawmaterials.com/price'),
    fetch('https://api.competitor.com/feed'),
  ]);
  const index = (await indexRes.json()).value;
  const comp  = (await compRes.json()).median;

  // 2) Compute & push your new price (floor=1.02×index, cap=0.98×comp)
  const newPrice = Math.min(Math.max(index * 1.02, comp * 0.98), comp * 1.05);

  // 3) Update your storefront via API
  await fetch('https://api.yourstore.com/products/123/price', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ price: Number(newPrice.toFixed(2)) }),
  });

  console.log(`Price updated to $${newPrice.toFixed(2)}`);
})();
