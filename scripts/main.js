// Efek counter interaktif untuk daya tampung
document.addEventListener('DOMContentLoaded', function() {
  // Counter animasi dengan efek interaktif warna
  let counter = document.getElementById('kuota');
  let target = 128;
  let count = 0;
  let interval = setInterval(function() {
    if (count < target) {
      count += 4;
      if (count > target) count = target;
      counter.textContent = count;
      counter.classList.add('changed');
      // Tambahkan trigger animasi icon
      let icon = document.getElementById('kuota-icon');
      if (icon) {
        icon.classList.remove('wiggle');
        void icon.offsetWidth; // trigger reflow
        icon.classList.add('wiggle');
      }
      setTimeout(() => counter.classList.remove('changed'), 120);
    } else {
      clearInterval(interval);
    }
  }, 30);

  // Animasi fade-in saat scroll
  let cards = document.querySelectorAll('.card');
  function revealCards() {
    let trigger = window.innerHeight * 0.9;
    cards.forEach(card => {
      let top = card.getBoundingClientRect().top;
      if (top < trigger) {
        card.style.animationPlayState = 'running';
        card.classList.add('active'); // Efek tambahan
      }
    });
  }
  window.addEventListener('scroll', revealCards);
  revealCards();

  // Efek hover pada card (shadow dan scale)
  cards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      card.style.boxShadow = '0 8px 32px rgba(44, 62, 80, 0.18)';
      card.style.transform = 'scale(1.03)';
    });
    card.addEventListener('mouseleave', function() {
      card.style.boxShadow = '';
      card.style.transform = '';
    });
  });

  // Smooth scroll untuk tombol CTA
  let ctaBtn = document.querySelector('.cta-btn');
  if (ctaBtn) {
    ctaBtn.addEventListener('click', function(e) {
      e.preventDefault();
      let infoSection = document.getElementById('info');
      if (infoSection) {
        infoSection.scrollIntoView({ behavior: 'smooth' });
      }
    });
  }

  // --- Ambil data kuota dari Google Sheet ---
  // Ganti SHEET_ID dan SHEET_NAME sesuai milikmu
  fetch('https://opensheet.elk.sh/SHEET_ID/SHEET_NAME')
    .then(res => res.json())
    .then(data => {
      // Misal data[0] = { kuota_terisi: "85", update: "Mei 2025" }
      if (data && data.length > 0) {
        let kuotaTerisi = parseInt(data[0].kuota_terisi, 10) || 0;
        let updateTerakhir = data[0].update || '';
        // Update counter
        target = kuotaTerisi;
        // Update info update terakhir
        let detail = document.getElementById('kuota-detail');
        if (detail) {
          detail.querySelector('span').textContent = 'Update terakhir: ' + updateTerakhir;
        }
      }
    });
});

// Popup detail interaktif
function showDetail(id) {
  document.getElementById(id + '-detail').style.display = 'block';
  setTimeout(() => {
    document.getElementById(id + '-detail').style.opacity = 1;
  }, 10);
}
function closeDetail(id) {
  let popup = document.getElementById(id + '-detail');
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.style.display = 'none';
  }, 200);
}