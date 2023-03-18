/* Função para alternar a visibilidade do menu de navegação */
function toggleMenu() {
    var menuToggle = document.querySelector('.menu-toggle');
    var nav = document.querySelector('nav');
    menuToggle.classList.toggle('active');
    nav.classList.toggle('active');
  }
  
  /* Ativando a função toggleMenu() quando o botão do menu é clicado */
  var menuToggle = document.querySelector('.menu-toggle');
  menuToggle.addEventListener('click', toggleMenu);
  
  /* Adicionando animação de deslize suave para navegação interna */
  var navLinks = document.querySelectorAll('nav a[href^="#"]');
  for (var i = 0; i < navLinks.length; i++) {
    navLinks[i].addEventListener('click', function(event) {
      event.preventDefault();
      var target = this.getAttribute('href');
      var targetElement = document.querySelector(target);
      var targetOffset = targetElement.offsetTop;
      var headerHeight = document.querySelector('header').offsetHeight;
      var scrollToPosition = targetOffset - headerHeight;
      window.scrollTo({
        top: scrollToPosition,
        behavior: 'smooth'
      });
      toggleMenu();
    });
    
  }
  
  // Cria um array com os dados de venda por mês
const salesData = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000, 10000, 11000, 12000];

// Seleciona o elemento canvas onde o gráfico será exibido
const ctx = document.getElementById('sales-chart').getContext('2d');

// Cria o gráfico de linhas com os dados de venda
const salesChart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    datasets: [{
      label: 'Vendas',
      data: salesData,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
