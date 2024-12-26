// Variables
const images = document.querySelectorAll('.carousel-image');
const totalImages = images.length;
let currentIndex = 0;
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const carouselImages = document.querySelector('.carousel-images');

// Función para mostrar la imagen en el índice dado
function showImage(index) {
    currentIndex = (index + totalImages) % totalImages;
    carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Manejo de clics
prevButton.addEventListener('click', () => showImage(currentIndex - 1));
nextButton.addEventListener('click', () => showImage(currentIndex + 1));

const autoSlide = setInterval(() => showImage(currentIndex + 1), 5000);

// Gráfico de dona
const doughnutChart = new Chart(document.getElementById('doughnutChart').getContext('2d'), {
    type: 'doughnut',
    data: {
        labels: ['Días restantes', 'Días pasados'],
        datasets: [{
            data: [9, 5],
            backgroundColor: ['#FF7F00', '#e0e0e0'],
            borderColor: '#ffffff',
            borderWidth: 0.5
        }]
    },
    options: {
        responsive: true,
        cutoutPercentage: 70,
        rotation: Math.PI,
        plugins: {
            legend: { display: false }
        }
    }
});

// Fecha de vencimiento
const tomorrow = new Date();
tomorrow.setDate(tomorrow.getDate() + 1);
document.getElementById('vencimiento-date').innerText = tomorrow.toLocaleDateString('es-ES');

// Gráfico de barras
const barChart = new Chart(document.getElementById('barChart').getContext('2d'), {
    type: 'bar',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre', 'Enero (2)', 'Febrero (2)', 'Marzo (2)', 'Abril (2)'],
        datasets: [{
            label: 'Ventas 2024',
            data: [50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180, 190, 200],
            backgroundColor: '#FF7F00',
            borderColor: '#FF7F00',
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            y: { beginAtZero: true }
        }
    }
});

// Gráfico tipo onda
const waveChart = new Chart(document.getElementById('waveChart').getContext('2d'), {
    type: 'line',
    data: {
        labels: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul'],
        datasets: [{
            label: 'Ventas Mensuales',
            data: [15, 30, 45, 40, 55, 60, 70],
            fill: true,
            borderColor: '#33FF57',
            backgroundColor: 'rgba(51, 255, 87, 0.2)',
            tension: 0.4,
        }]
    },
    options: {
        responsive: true,
        scales: {
            x: { beginAtZero: true },
            y: { beginAtZero: true }
        },
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Gráfico de pastel
const pieChart = new Chart(document.getElementById('pieChart').getContext('2d'), {
    type: 'pie',
    data: {
        labels: ['Sector A', 'Sector B', 'Sector C', 'Sector D'],
        datasets: [{
            data: [30, 25, 35, 10],
            backgroundColor: ['#FF5733', '#33FF57', '#3357FF', '#FF33A1'],
        }]
    },
    options: {
        responsive: true,
        plugins: {
            legend: { position: 'top' }
        }
    }
});

// Selección
const toggleButton = document.querySelector('.toggle-button');
const sidebar = document.querySelector('.sidebar');
const mainLayout = document.querySelector('.main-layout');

// Manejo del clic para mostrar/ocultar
toggleButton.addEventListener('click', () => {
    sidebar.classList.toggle('active');
    mainLayout.classList.toggle('shift-right');
});
