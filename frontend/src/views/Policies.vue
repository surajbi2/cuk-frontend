<template>
  <div class="policies-container">
    <div class="policies-header">
      <div class="flex items-center gap-4">
        <svg class="document-icon" viewBox="0 0 24 24" fill="white" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
          <path d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z"/>
          <path d="M9 9h6M9 13h6M9 17h6" class="text-blue-600"/>
        </svg>
        <h1>NAAC Policies</h1>
      </div>
    </div>

    <div class="grid-container">
      <a v-for="(policy, index) in policies" 
         :key="index"
         :href="policy.link"
         target="_blank"
         class="policy-card"
         :style="`--hue: ${index * 30}`">
        <div class="card-content">
          <div class="icon-container">
            <svg class="policy-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
          </div>
          <h3 class="policy-title">{{ policy.title }}</h3>
          <p class="policy-description">{{ policy.description }}</p>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Policies',
  data() {
    return {
      policies: [
        {
          title: 'Green Audit',
          description: 'Environmental assessment and sustainability guidelines',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Green%20Audit.pdf'
        },
        {
          title: 'IT Policy',
          description: 'Information Technology guidelines and procedures',
          link: 'https://cuk.ac.in/CUK-IQAC/pdf/Policies/IT%20Policy.pdf'
        },
        {
          title: 'Ambient Air Quality',
          description: 'Air quality monitoring and maintenance policy',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20for%20Ambient%20Air%20Quality.pdf'
        },
        {
          title: 'Energy Conservation',
          description: 'Guidelines for energy efficiency and conservation',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20for%20Energy%20Conservation.pdf'
        },
        {
          title: 'Fire Fighting',
          description: 'Fire safety and emergency response procedures',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20for%20Fire%20fighting.pdf'
        },
        {
          title: 'Sanitation and Hygiene',
          description: 'Campus cleanliness and hygiene maintenance guidelines',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20for%20Maintenance%20of%20Sanitation%20and%20hygine.pdf'
        },
        {
          title: 'Fauna Preservation',
          description: 'Wildlife and animal protection guidelines',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20for%20Preservation%20of%20Fauna.pdf'
        },
        {
          title: 'Water Quality',
          description: 'Water management and quality control standards',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20for%20Water%20Quality.pdf'
        },
        {
          title: 'Flora Policy',
          description: 'Plant life and greenery maintenance guidelines',
          link: 'https://cuk.ac.in/CUK-IQAC/Policies/Policy%20on%20Flora.pdf'
        },
        {
          title: 'IPR Guidelines',
          description: 'Intellectual Property Rights guidelines',
          link: 'https://cuk.ac.in/CUK-IQAC/pdf/Policies/IPR%20guidelines,%20CUK.pdf'
        },
        {
          title: 'Consultancy Policy',
          description: 'Guidelines for consultancy services',
          link: 'https://cuk.ac.in/CUK-IQAC/pdf/Policies/CUK%20Consultancy%20Policy.pdf'
        }
      ]
    }
  }
}
</script>

<style scoped>
.policies-container {
  background: linear-gradient(195deg, #f8f9fc 0%, #f1f5f9 100%);
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.08);
  backdrop-filter: blur(12px);
  max-width: 1200px;
  margin: 2rem auto;
}

.policies-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2.5rem;
  padding: 1.5rem;
  background: linear-gradient(45deg, #1e3a8a 0%, #2563eb 100%);
  border-radius: 1rem;
  color: white;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
}

.policies-header h1 {
  font-size: 1.75rem;
  font-weight: 600;
  letter-spacing: -0.025em;
  margin: 0;
}

.document-icon {
  width: 2.5rem;
  height: 2.5rem;
  stroke: #1e3a8a;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 1rem;
}

.policy-card {
  position: relative;
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  transition: all 0.3s ease;
  text-decoration: none;
  color: inherit;
  border: 1px solid #e5e7eb;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);
}

.policy-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
  background: linear-gradient(135deg, 
    hsl(var(--hue), 70%, 98%) 0%, 
    hsl(var(--hue), 70%, 95%) 100%
  );
}

.card-content {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.icon-container {
  background-color: #e0e7ff;
  width: 3rem;
  height: 3rem;
  border-radius: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 0.5rem;
}

.policy-icon {
  width: 1.5rem;
  height: 1.5rem;
  stroke: #4338ca;
}

.policy-title {
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin: 0;
}

.policy-description {
  font-size: 0.875rem;
  color: #64748b;
  line-height: 1.25rem;
  margin: 0;
}

@media (max-width: 640px) {
  .policies-container {
    margin: 1rem;
    padding: 1rem;
  }

  .policies-header {
    padding: 1rem;
  }

  .policies-header h1 {
    font-size: 1.25rem;
  }

  .grid-container {
    grid-template-columns: 1fr;
  }
}
</style>]]>
