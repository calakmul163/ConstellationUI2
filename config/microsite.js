/* 
AUTHOR: ROBERTO SOSA CIGARROA
COPYRIGHT: behance.net/rsosa
*/
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        footerData: null,
        isLoading: true,
        error: null,
        
        micrositio: {
            logofooter: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1734116724/ns6avom2p9eiuak42knr",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
        },
        async fetchFooter() {
            try {
                this.isLoading = true;
                this.error = null;
                
                const response = await fetch('/api/v1/3OqUnxVQhwb3Df4peCxa0WQ6pELoiyuO');
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const data = await response.json();
                
                if (!data.success) {
                    throw new Error(data.message || 'Error en los datos del footer');
                }
                
                this.footerData = data.data;
                
            } catch (error) {
                console.error('Error fetching footer data:', error);
                this.error = error.message || 'Error al cargar los datos del footer';
            } finally {
                this.isLoading = false;
            }
        },
        init() {
            this.fetchFooter();
        },
    }));
});