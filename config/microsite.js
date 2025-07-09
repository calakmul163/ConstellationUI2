/* 
AUTHOR: ROBERTO SOSA CIGARROA
COPYRIGHT: behance.net/rsosa
*/
document.addEventListener('alpine:init', () => {
  Alpine.data('footerMicrositio', () => ({
    footerData: null,
    isLoading: true,
    error: null,
    micrositio: {
      logofooter: {
        image: "https://res.cloudinary.com/dmem56hib/image/upload/v1734116724/ns6avom2p9eiuak42knr",
        alt: "Secretaría de la Mujer e Igualdad de Género"
      }
    },

    async init() {
      await this.fetchFooterData();
    },

    async fetchFooterData() {
      try {
        const response = await fetch('/api/v1/footer');
        const data = await response.json();
        
        if (!data.success) throw new Error(data.message || 'Error en los datos del footer');
        
        this.footerData = data.data;
      } catch (err) {
        this.error = err.message;
        console.error('Error al cargar footer:', err);
      } finally {
        this.isLoading = false;
      }
    },

    filterOffices(names) {
      return this.footerData?.office_info?.filter(o => names.includes(o.name)) || [];
    },

    getSocialIcons() {
      return this.filterOffices(['facebook', 'instagram', 'twitter-x', 'youtube']);
    },

    getCentralOffices() {
      return this.filterOffices(['address_one', 'email', 'phone_one']);
    },

    getAlternateOffices() {
      return this.filterOffices(['address_two', 'phone_two']);
    }
  }));
});

// HTML template que será inyectado
const footerTemplate = `
<footer x-data="footerMicrositio" 
        class="w-full mt-32 bg-center bg-no-repeat bg-cover footer-micro bg-pa-footer-row1-micrositios lg:bg-contain lx:bg-contain">
  <!-- Contenido del footer (igual que tu versión original) -->
  <div class="container">
    <div class="p-footer-home">
      <div class="flex items-center justify-between border-b-4 border-dotted border-bs-pink-600 p-footer-1row">
        <a href="/" class="mb-6">
          <img :src="micrositio.logofooter.image" 
               :alt="micrositio.logofooter.alt" 
               class="w-2/3">
        </a>
        <div class="flex flex-row justify-center px-8">
          <template x-for="office in getSocialIcons()" :key="office.id">
            <a :href="office.url" target="_blank" class="mx-10 row1-micro-group">
              <span class="icon" x-html="office.icon"></span>
            </a>
          </template>
        </div>
      </div>

      <div class="flex flex-wrap md:gap-4 lg:gap-0 p-footer-2row text-footer-micro">
        <div class="flex flex-col w-full gap-4 md:w-full lg:w-1/3 pb-14 lg:pb-0">
          <div data-aos="fade-down" data-aos-delay="0">
            <h6 class="font-semibold">Oficinas Centrales:</h6>
          </div>
          <template x-for="office in getCentralOffices()" :key="office.id">
            <div>
              <a :href="office.url" target="_blank" 
                 class="flex flex-row row1-micro-group" 
                 data-aos="fade-down" data-aos-delay="200">
                <div class="mr-2">
                  <span class="icon" x-html="office.icon"></span>
                </div>
                <p x-text="office.description"></p>
              </a>
            </div>
          </template>

          <div data-aos="fade-down" data-aos-delay="0" class="mt-6">
            <h6 class="font-semibold">Oficinas Alternas:</h6>
          </div>
          <template x-for="office in getAlternateOffices()" :key="office.id">
            <div>
              <a :href="office.url" target="_blank" 
                 class="flex flex-row row1-micro-group" 
                 data-aos="fade-down" data-aos-delay="200">
                <div class="mr-2">
                  <span class="icon" x-html="office.icon"></span>
                </div>
                <p x-text="office.description"></p>
              </a>
            </div>
          </template>
        </div>

        <!-- Columnas de enlaces -->
        <div class="w-full md:w-full lg:w-2/3 lg:pl-12">
          <div class="flex flex-wrap">
            <template x-for="(column, index) in [1, 2, 3]" :key="index">
              <div class="flex flex-col w-1/2 gap-4 mb-6 sm:w-1/2 md:w-1/3">
                <div data-aos="fade-down" data-aos-delay="0">
                  <h6 class="font-semibold" x-text="
                    index === 0 ? 'Enlaces SEMUIGEN:' : 
                    index === 1 ? 'Enlaces Administrativos:' : 'Sitios de Interés:'
                  "></h6>
                </div>
                <ul class="flex flex-col gap-2">
                  <template x-for="link in footerData.links['column_0'+column]" :key="link.id">
                    <li>
                      <a :href="link.path" :target="link.target || '_self'" 
                         class="inline-block row1-micro-group" 
                         data-aos="fade-down" data-aos-delay="400" 
                         x-text="link.name"></a>
                    </li>
                  </template>
                </ul>
              </div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Estados -->
  <template x-if="isLoading">
    <div class="p-4 text-center">Cargando datos del footer...</div>
  </template>

  <template x-if="error">
    <div class="p-4 text-center text-red-500" x-text="error"></div>
  </template>

  <!-- Pleca footer -->
  <div class="px-8 py-8 text-white border-t-2 bg-bs-pink-950 border-t-bs-pink-900">
    <div class="container text-center">
      <span class="text-sm font-normal text-bs-black-50">
        2024-2030 | Secretaría de la Mujer e Igualdad de Género | Gobierno del Estado de Chiapas
      </span>
    </div>
  </div>
  <div class="py-4 text-center bg-no-repeat bg-cover bg-bs-pink-800 bg-pa-footer-row2-pink"></div>
</footer>
`;

// Función para inyectar el footer
function injectFooter(target = '#footer-container') {
  const container = document.querySelector(target);
  if (container) {
    container.innerHTML = footerTemplate;
    // Forzar la inicialización de Alpine si ya estaba cargado
    if (window.Alpine) {
      Alpine.initTree(container);
    }
  }
}

// Auto-inyección al cargar el DOM
document.addEventListener('DOMContentLoaded', () => {
  injectFooter();
});

// Exportar para uso manual
window.injectFooter = injectFooter;