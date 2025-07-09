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
                const response = await fetch('api/v1/footer');
                const data = await response.json();
                this.footerData = data;
                console.log(data);
            } catch (error) {
                        console.error('Error fetching data:', error);
                    }
                },
        init() {
            this.fetchFooter();
        },
    }));
});