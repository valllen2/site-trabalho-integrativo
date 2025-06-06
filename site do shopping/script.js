document.addEventListener('DOMContentLoaded', () => {
  console.log('Site carregado com sucesso!');

  // Botão de Modo Escuro
  const darkModeButton = document.createElement('button');
  darkModeButton.textContent = '🌙 Modo Escuro';
  darkModeButton.style.position = 'fixed';
  darkModeButton.style.bottom = '20px';
  darkModeButton.style.right = '20px';
  darkModeButton.style.padding = '10px 20px';
  darkModeButton.style.backgroundColor = '#333';
  darkModeButton.style.color = '#fff';
  darkModeButton.style.border = 'none';
  darkModeButton.style.borderRadius = '8px';
  darkModeButton.style.cursor = 'pointer';
  darkModeButton.style.zIndex = '1000';

  document.body.appendChild(darkModeButton);

  let darkMode = false;

  darkModeButton.addEventListener('click', () => {
    darkMode = !darkMode;
    document.body.style.backgroundColor = darkMode ? '#1c1c1c' : '#f4f4f4';
    document.body.style.color = darkMode ? '#f4f4f4' : '#333';

    document.querySelectorAll('.card, .cinema-filme').forEach(el => {
      el.style.backgroundColor = darkMode ? '#333' : '#fff';
      el.style.color = darkMode ? '#f4f4f4' : '#000';
    });

    darkModeButton.textContent = darkMode ? '☀️ Modo Claro' : '🌙 Modo Escuro';
  });

  // Botão Voltar ao Topo
  const scrollTopBtn = document.createElement('button');
  scrollTopBtn.textContent = '⬆️';
  scrollTopBtn.style.position = 'fixed';
  scrollTopBtn.style.bottom = '80px';
  scrollTopBtn.style.right = '20px';
  scrollTopBtn.style.padding = '10px';
  scrollTopBtn.style.border = 'none';
  scrollTopBtn.style.borderRadius = '50%';
  scrollTopBtn.style.fontSize = '18px';
  scrollTopBtn.style.backgroundColor = '#2d7c4f';
  scrollTopBtn.style.color = '#fff';
  scrollTopBtn.style.display = 'none';
  scrollTopBtn.style.cursor = 'pointer';
  scrollTopBtn.style.zIndex = '1000';

  document.body.appendChild(scrollTopBtn);

  window.addEventListener('scroll', () => {
    scrollTopBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
  });

  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  // Animações ao rolar a página
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = 1;
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = 0;
    section.style.transform = 'translateY(40px)';
    section.style.transition = 'all 0.6s ease-out';
    observer.observe(section);
  });

  // Animação hover nas cards
  document.querySelectorAll('.card').forEach(card => {
    card.style.transition = 'transform 0.3s ease, box-shadow 0.3s ease';
    card.addEventListener('mouseenter', () => {
      card.style.transform = 'scale(1.05)';
      card.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = 'scale(1)';
      card.style.boxShadow = '0 0 10px rgba(0,0,0,0.1)';
    });
  });
});

  // Mostrar/ocultar descrição dos serviços
  document.querySelectorAll('.card-servico').forEach(card => {
    card.addEventListener('click', () => {
      // Fecha todos os outros
      document.querySelectorAll('.card-servico').forEach(c => {
        if (c !== card) {
          c.classList.remove('ativo');
        }
      });

      // Alterna o clicado
      card.classList.toggle('ativo');
    });
  });


