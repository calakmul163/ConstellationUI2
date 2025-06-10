/* 
AUTHOR: ROBERTO SOSA CIGARROA
COPYRIGHT: behance.net/rsosa
*/
document.addEventListener('alpine:init', () => {
    Alpine.data('app', () => ({
        navgob: {
            logo: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1738084841/ipdc6zivf3ghnldsqork",
                alt: "Chiapas Logo",
                text: "chiapas",
                subtext: ".gob.mx",
                link: "https://www.chiapas.gob.mx/"
            },
            links: [
                { text: "Trámites", url: "https://www.chiapas.gob.mx/tramites" },
                { text: "Gobierno", url: "https://www.chiapas.gob.mx/gobierno" },
                { text: "Participa", url: "https://www.chiapas.gob.mx/participa" },
                { text: "Transparencia", url: "http://gubernatura.transparencia.chiapas.gob.mx/" }
            ],
            search: {
                link: "http://www.chiapas.gob.mx/busquedas"
            }
        },
        sitio: {
            title: {
                imageletra: "https://res.cloudinary.com/dmem56hib/image/upload/v1738084313/hswdraj9ybc6pq2phjqz",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
            logo: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1734116724/ns6avom2p9eiuak42knr",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
            lineadigital: {
                imagelogo: "https://res.cloudinary.com/dmem56hib/image/upload/v1742365582/bh2s72fuslwbbibodedi",
            },
            logofooter: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1743715178/z1fzq9xgp26f0gf232m8",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
            noimgdirectorio: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1749596648/mmntstf7b8fhykoqmorc",
                alt: "Imagen no disponible",
            },
        }
    }));
});