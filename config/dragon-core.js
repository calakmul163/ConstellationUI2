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
                { text: "Trámites", url: "https://chiapas.gob.mx/servicios-por-entidad/" },
                { text: "Gobierno", url: "https://www.chiapas.gob.mx/gobierno" },
                { text: "Participa", url: "https://www.chiapas.gob.mx/participa" },
                { text: "Transparencia", url: "http://oficinadelgobernador.transparencia.chiapas.gob.mx/" }
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
        },
        microsities: {
            logoentity: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1734115410/opnepvo3kb3o8hrn7vb8",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
            logofooter: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1734116724/ns6avom2p9eiuak42knr",
                alt: "Secretaría de la Mujer e Igualdad de Género",
            },
        },
        styles: {
            pages: {
                h1: '!text-5xl !font-semibold !text-bs-black-950',
                h2: '',
                h3_subtitle: '!text-2xl !font-semibold !text-bs-pink-900',
                p: '!text-lg text-justify text-gray-700',
                hr_title: '!mt-6 border-t-2 border-dashed !border-bs-beige-900',
                hr_subtitle: '!my-2 border-t-2 border-dashed !border-bs-beige-900',
            },
            microsites: {
                hr_bordado_pink: "flex flex-row items-center justify-center px-4 mx-auto mt-8 sm:px-6 lg:px-8",
            }
        }
    }));
});