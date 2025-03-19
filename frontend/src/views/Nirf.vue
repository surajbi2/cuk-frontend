<template>
    <div class="nirf-container ">
      <div class="nirf-header">
        <svg class="document-icon" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
  <path d="M14 2.25V7H18.75M18 21H6C4.343 21 3 19.657 3 18V6C3 4.343 4.343 3 6 3H12.172C12.702 3 13.211 3.211 13.586 3.586L18.414 8.414C18.789 8.789 19 9.298 19 9.828V18C19 19.657 17.657 21 16 21Z"/>
  <path d="M8 13H16" class="text-blue-600"/>
  <path d="M8 17H16" class="text-blue-600"/>
  <path d="M15 9H18.5L15 5.5V9Z" fill="currentColor" class="text-blue-400"/>
</svg>
        <h1>National Institutional Ranking Framework Reports</h1>
      </div>
      
      <div class="grid-container">
        <a v-for="(year, index) in years" 
           :key="year"
           :href="links[index]" 
           target="_blank"
           class="report-card"
           :style="`--hue: ${index * 40}`">
          <div class="card-content">
            <span class="year-badge">CUK-NIRF</span>
            <span class="report-year">{{ year }}</span>
            <svg class="pdf-icon" viewBox="0 0 24 24">
              <path d="M14 2v6h6v12H4V2h10m2-2H2v20h20V8l-6-6z"/>
              <path d="M16 13h-3v6h-2v-6H8v-2h8v2zM11 7h2v2h-2z"/>
            </svg>
          </div>
        </a>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "Nirf",
    data() {
      return {
        years: ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017'],
        links: [
        'https://cuk.ac.in/NIRF/NIRF%202025.pdf',
        'https://cuk.ac.in/NIRF/NIRF2024.pdf',
        'https://cuk.ac.in/NIRF/CUK-NIRF%202023.pdf',
        'https://cuk.ac.in/NIRF/CUKNIRF2020-21.pdf', // Labeled as 2022 but file shows 2020-21
        'https://cuk.ac.in/NIRF/CUKNIRF2019-20.pdf',
        'https://cuk.ac.in/Circular/CUK%20NIRF%20%202020.pdf',
        'https://cuk.ac.in/Administration/pdf/NIRF%202019.pdf',
        'https://cuk.ac.in/Administration/pdf/CUK%20%20NIRF%202018.pdf',
        'https://cuk.ac.in/Administration/pdf/cuknirf2017.pdf'
      ]
      };
    }
  };
  </script>
  
  <style scoped>
  .nirf-container {
    background: linear-gradient(195deg, #f8f9fc 0%, #f1f5f9 100%);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 1.5rem;
    padding: 2rem;
    box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
    backdrop-filter: blur(12px);
    max-width: 1200px;
    margin: 2rem auto;
  }
  
  .nirf-header {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 2.5rem;
    padding: 1.5rem;
    background: linear-gradient(45deg, #1e3a8a 0%, #2563eb 100%);
    border-radius: 1rem;
    color: white;
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  }
  
  .nirf-header h1 {
    font-size: 1.75rem;
    font-weight: 600;
    letter-spacing: -0.025em;
  }
  
  .document-icon {
  width: 2.5rem;
  height: 2.5rem;
  stroke: #1e3a8a; /* Dark blue stroke */
}

.document-icon .text-blue-600 {
  stroke: #2563eb; /* Medium blue for text lines */
}

.document-icon .text-blue-400 {
  fill: #fff; /* Light blue for corner fold */
}
  
  .grid-container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
    gap: 1.5rem;
    padding: 0.5rem;
  }
  
  .report-card {
    position: relative;
    background: white;
    border-radius: 1rem;
    padding: 1.5rem;
    text-decoration: none;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    overflow: hidden;
    border: 1px solid rgba(203, 213, 225, 0.3);
    background: linear-gradient(
      145deg,
      hsl(var(--hue), 70%, 97%) 0%,
      hsl(var(--hue), 50%, 99%) 100%
    );
  }
  
  .report-card::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      120deg,
      rgba(255, 255, 255, 0.6) 30%,
      rgba(255, 255, 255, 0) 100%
    );
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .report-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.05);
  }
  
  .report-card:hover::before {
    opacity: 1;
  }
  
  .card-content {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;
  }
  
  .year-badge {
    background: rgba(255, 255, 255, 0.9);
    padding: 0.25rem 0.75rem;
    border-radius: 2rem;
    font-size: 0.75rem;
    font-weight: 600;
    color: #1e3a8a;
    backdrop-filter: blur(4px);
    border: 1px solid rgba(203, 213, 225, 0.3);
  }
  
  .report-year {
    font-size: 2rem;
    font-weight: 700;
    color: #1e293b;
    letter-spacing: -0.025em;
    background: linear-gradient(45deg, #1e3a8a 0%, #2563eb 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  
  .pdf-icon {
    width: 2.5rem;
    height: 2.5rem;
    fill: #94a3b8;
    transition: fill 0.3s ease;
  }
  
  .report-card:hover .pdf-icon {
    fill: #64748b;
  }
  
  /* Custom Scrollbar */
  ::-webkit-scrollbar {
    width: 8px;
  }
  
  ::-webkit-scrollbar-track {
    background: rgba(241, 245, 249, 0.5);
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb {
    background: #cbd5e1;
    border-radius: 4px;
  }
  
  ::-webkit-scrollbar-thumb:hover {
    background: #94a3b8;
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .nirf-container {
      margin: 1rem;
      padding: 1.5rem;
    }
    
    .grid-container {
      grid-template-columns: 1fr;
    }
    
    .report-year {
      font-size: 1.75rem;
    }
  }
  
  @keyframes cardEntrance {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .report-card {
    animation: cardEntrance 0.6s ease forwards;
    animation-delay: calc(var(--index) * 0.1s);
  }
  </style>