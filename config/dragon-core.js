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
                h1_hero_avgm: 'py-10 !text-4xl !font-bold tracking-tight text-center md:!text-4xl lg:!text-5xl !text-slate-800',
                h1_hero_banavim: 'mt-0 mb-8 !text-6xl !font-extrabold tracking-tight text-left text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 font-display',
                h1_hero_refugios: 'py-10 !text-4xl !font-bold tracking-tight text-center !text-slate-800 md:!text-4xl lg:!text-5xl',
                h1_gradient_avgm: 'mt-8 mb-0 !text-5xl md:!text-6xl lg:!text-6xl xl:!text-6xl !font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-fuchsia-500 via-violet-500 to-purple-600 !font-display',
                h1_gradient_banavim: 'mt-8 mb-8 !text-6xl !font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-fuchsia-600 to-pink-500 font-display',
                h1_gradient_paibim: 'mt-8 mb-0 !text-5xl !font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-rose-500 via-pink-500 to-rose-400 font-display lg:!text-7xl',
                h1_gradient_refugios: 'mt-8 mb-0 !text-5xl !font-extrabold tracking-tight text-center text-transparent bg-clip-text bg-gradient-to-r from-teal-500 via-emerald-500 to-teal-400 font-display lg:!text-7xl',
                p_text1: '!text-lg !text-justify !text-gray-700 mt-14 lg:!text-xl',
                a_b_amber: 'sm:w-fit w-full group px-3.5 py-2 bg-amber-500 hover:!bg-amber-400 rounded-full transition-all duration-700 ease-in-out justify-center items-center flex',
                a_b_green: 'sm:w-fit w-full group px-3.5 py-2 bg-green-500 hover:!bg-green-400 rounded-full transition-all duration-700 ease-in-out justify-center items-center flex',
                a_b_lime: 'sm:w-fit w-full group px-3.5 py-2 bg-lime-500 hover:!bg-lime-400 rounded-full transition-all duration-700 ease-in-out justify-center items-center flex',
                a_b_orange: 'sm:w-fit w-full group px-3.5 py-2 bg-orange-600/80 hover:bg-orange-400 rounded-full transition-all duration-700 ease-in-out justify-center items-center flex',
                a_b_pink_border: 'sm:w-fit w-full group px-3.5 py-2 border-2 border-pink-500 hover:!border-pink-600 hover:!bg-yellow-100  rounded-full transition-all duration-700 ease-in-out justify-center items-center flex',
                a_b_span_pink_border: 'px-1.5 !text-gray-900 !text-sm !font-medium leading-6 group-hover:!-translate-x-0.5 transition-all duration-700 ease-in-out',
                a_b_violet_banavim: 'inline-flex items-center justify-center w-full py-3 !text-xs !font-semibold !text-center text-white transition-all duration-500 rounded-full shadow-xs md:w-auto mb-14 px-7 bg-violet-600 hover:!bg-fuchsia-600 group transition-all duration-700 ease-in-out',
                a_b_span: 'px-1.5 text-white !text-sm !font-medium !leading-6 group-hover:!-translate-x-0.5 transition-all duration-700 ease-in-out',
                a_b_svg: 'group-hover:!translate-x-0.5 transition-all duration-700 ease-in-out',
                hr_bordado_pink: "flex flex-row items-center justify-center px-4 mx-auto mt-8 sm:px-6 lg:px-8",
            }
        }
    }));
});