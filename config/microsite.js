/* 
AUTHOR: ROBERTO SOSA CIGARROA
COPYRIGHT: behance.net/rsosa
*/
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        footerData: {},
        isLoading: true,
        error: null,
        
        micrositio: {
            logofooter: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1734116724/ns6avom2p9eiuak42knr",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
        },
        
        async init() {
            try {
                const response = await fetch('/api/v1/footer');
                if (!response.ok) throw new Error('Error al cargar datos del footer');
                
                const data = await response.json();
                if (data.success) {
                    this.footerData = data.data;
                } else {
                    throw new Error(data.message || 'Error en los datos del footer');
                }
            } catch (err) {
                this.error = err.message;
                console.error('Error:', err);
            } finally {
                this.isLoading = false;
            }
        }
    }));
});