/*
AUTHOR: ROBERTO SOSA CIGARROA
COPYRIGHT: behance.net/rsosa
*/
document.addEventListener('alpine:init', () => {
    Alpine.data('micro', () => ({
        open: false,
        footerData: null,
        isLoading: true,
        error: null,
        urlimagesmicrosite: '/themes/nebula_gallery/banavim/',

        programa: [
            {
                titulo: 'BAESVIM',
                nombre: 'Banco Estatal de Datos e Información sobre Casos de Violencia contra las Mujeres de Chiapas',
                antecedentes: 'En 2007 el Congreso de la Unión aprobó la Ley General de Acceso de las Mujeres a una Vida Libre de Violencia (LGAMVLV), donde en el Artículo 44, fracción III, se le encomienda a la Secretaría de Seguridad Pública “Integrar el Banco Nacional de Datos e Información sobre Casos de Violencia contra las Mujeres” compuesto por la información proporcionada por los miembros del Sistema Nacional para Prevenir, Atender, Sancionar y Erradicar la Violencia contra las Mujeres (SNPASEVM) y las instituciones de gobierno de las Entidades Federativas.',
                objetivo: 'El Banco tiene como objetivo general administrar la información procesada de las instancias involucradas en la atención, prevención, sanción y erradicación de la violencia en contra de las mujeres, con el fin de instrumentar políticas públicas desde la perspectiva de género y derechos humanos.',
                url: 'https://www.gob.mx/conapo/documentos/3-grupo-estatal-para-la-prevencion-del-embarazo-en-adolescentes-gepea#:~:text=La%20Estrategia%20Nacional%20para%20la%20Prevenci%C3%B3n%20del%20Embarazo,el%20concurso%20de%20las%20instancias%20que%20la%20integran.',
                objetivos: [
                    {
                        title: '1',
                        text: '<b>Controlar</b> la integración de la información a través de metodologías, instrumentos estandarizados y políticas de operación para el intercambio institucional de la información entre las instancias involucradas.',
                    },
                    {
                        title: '2',
                        text: '<b>Dirigir</b> la elaboración de estadísticas y diagnósticos de violencia que permitan conocer sistemáticamente las características y patrones de este fenómeno, con la finalidad de detectar áreas geográficas y ámbitos de la sociedad que impliquen riesgo para las mujeres, así como las necesidades de servicios para su atención.',
                    },
                    {
                        title: '3',
                        text: '<b>Identificar</b> situaciones que requieran medidas gubernamentales de urgente aplicación en función de los intereses superiores de las mujeres en situación de violencia, incluyendo las alertas de género.',
                    },
                ],
            },
        ],
        navegaciones: [
            {
                tag: 'menunavs',
                title: 'Inicio',
                url: '',
            },
            {
                tag: 'menunavs',
                title: 'Acerca de',
                url: '#acercade',
            },
            {
                tag: 'menunavs',
                title: 'Antecedentes',
                url: '#antecedentes',
            },
            {
                tag: 'menunavs',
                title: 'Objetivo',
                url: '#objetivo',
            },
            {
                tag: 'menunavs',
                title: 'Informes',
                url: '#informes',
            },
            {
                tag: 'menunavs',
                title: 'Capacitaciones',
                url: '#capacitaciones',
            },
            {
                tag: 'menunavs',
                title: 'Herramientas',
                url: '#herramientas',
            },
            {
                tag: 'menunavs',
                title: 'Galería',
                url: '#galeria',
            },
        ],
        images: [
            {
                tag: 'imgcardinformes',
                key: '1695028873.png',
            },
            {
                tag: 'imgpanel',
                key: '983275301_129847623915032_62587493014567238_q.png',
            },
            {
                tag: 'antecedentes',
                key: '702134985_439285710982563_67382019456128340_n.jpg',
            },
            {
                tag: 'objetivo',
                key: '538720913_451203698715639_83246592718293457_n.jpg',
            },
            {
                tag: 'capacitaciones',
                key: '753092184_691827305412098_58234760192837415_n.jpg',
            },
            {
                tag: 'acuerdos',
                key: '238746905_517328904162530_78459321680475931_n.jpg',
            },
            {
                tag: 'gallery',
                key: '286890780_620441039689039_54439520866172329_n.jpg',
            },
            {
                tag: 'gallery',
                key: '284351876_615006293565847_716845532059968921_n.jpg',
            },
            {
                tag: 'gallery',
                key: '283459200_615006253565851_4682882213774333072_n.jpg',
            },
            {
                tag: 'gallery',
                key: '60618943_2259418487709700_5539424419224485888_n.jpg',
            },
            {
                tag: 'gallery',
                key: '60962640_2259418384376377_6412135106319745024_n.jpg',
            },
            {
                tag: 'gallery',
                key: '86493103_2482868978697982_2286558185147858944_n.jpg',
            },
            {
                tag: 'gallery',
                key: '84321904_2482868872031326_1455541082057080832_n.jpg',
            },
            {
                tag: 'gallery',
                key: '60354581_2253853224932893_1867424833675984896_n.jpg',
            },
            {
                tag: 'gallery',
                key: '291066075_636240964775713_3672197127288464578_n.jpg',
            },
            {
                tag: 'gallery',
                key: '61764918_2265656897085859_600954285072580608_n.jpg',
            },
            {
                tag: 'gallery',
                key: '61399097_2265655733752642_7573224955823783936_n.jpg',
            },
            {
                tag: 'gallery',
                key: '60335195_2253853238266225_4390849301262106624_n.jpg',
            },
        ],
        numeralia: [
            {
                id: 'c01',
                name: 'Casos Registrados',
                data: '99,599',
            },
            {
                id: 'c02',
                name: 'Agresores Hombres',
                data: '70,697',
            },
            {
                id: 'c03',
                name: 'Agresores Mujeres',
                data: '3,641',
            },
            {
                id: 'c04',
                name: 'Dependencias',
                data: '24',
            },
            {
                id: 'c05',
                name: 'Municipios',
                data: '31',
            },
            {
                id: 'c06',
                name: 'Capacitaciones presenciales',
                data: '93',
            },
            {
                id: 'c07',
                name: 'Capacitaciones de forma virtual',
                data: '162',
            },
        ],
        capacitaciones: [
            {
                date: '2023',
                title: 'Actividades Generales',
                text: 'Capacitación al personal de diferentes municipios e instituciones.',
                url: 'https://photos.app.goo.gl/sssqxYNQUAYyXi3p9',
            },
            {
                date: '2022',
                title: 'Segunda Gira',
                text: 'Capacitación al personal de diferentes municipios e instituciones.',
                url: 'https://photos.app.goo.gl/hJGwU3uwAEoaK5Bp8',
            },
            {
                date: '2022',
                title: 'Primera Gira',
                text: 'Capacitación al personal de diferentes municipios e instituciones.',
                url: 'https://photos.app.goo.gl/m4thcBJ5M6MX4gKa8',
            },
        ],
        links: [
            {
                title: 'Acerca del BANAVIM',
                url: 'https://banavim.mujeres.gob.mx/',
                type: 'ACERCADE',
                target: '_blank',
                order: '1'
            },
            {
                title: 'Casos Nacionales',
                url: 'https://banavim.mujeres.gob.mx/reportes-publicos',
                type: 'ACERCADE',
                target: '_blank',
                order: '2'
            },
            {
                title: 'Ir a BANAVIM',
                url: 'https://banavim.mujeres.gob.mx/',
                type: 'ACERCADE',
                target: '_blank',
                order: '3'
            },
            {
                title: 'Plan Anual de Trabajo',
                url: 'https://drive.google.com/file/d/1CsonLjWoqk0TbVHDEsgy5VD191uehZtK/view?usp=sharing',
                type: 'TOOL',
                target: '_blank',
            },
            {
                tag: 'binfo',
                title: 'Diagnóstico e integración de informes y 14 indicadores del BAESVIM para implementarse a la plataforma web.',
                url: '/binfo/',
                type: 'TOOL',
                target: '_blank',
            },
            {
                title: 'Informe de resultados de estadísticos con áreas geográficas y ámbitos de la sociedad que implique riesgos para las mujeres.',
                url: 'https://drive.google.com/file/d/1Z2TMR2JfbbffV6khL3ouWllFUG2mL3VY/view?usp=sharing',
                type: 'TOOL',
                target: '_blank',
            },
            {
                title: 'Memorias fotográficas',
                url: '#galeria',
                type: 'TOOL',
                target: '_self',
            },
            {
                title: 'Manual del Banco Estatal e información sobre casos de violencia contra las Mujeres en el Estado de Chiapas',
                url: 'https://drive.google.com/file/d/1js9_pv7w_W2uMDbmcHDIsmbpUmHy0Ioz/view?usp=sharing',
                type: 'TOOL',
                target: '_blank',
            },
            {
                title: 'Sitio Web dinámico para consulta pública con datos estadísticos',
                url: '/baesvim_v1/',
                type: 'TOOL',
                target: '_blank',
            },
            {
                title: 'Informe Estadístico 2024',
                url: 'https://drive.google.com/file/d/13uhOVwqxrNrygFktASPOxANIMNLsrLKU/view?usp=sharing',
                type: 'INFORME',
                target: '_blank',
            },
            {
                title: 'Informe Estadístico 2023',
                url: 'https://drive.google.com/file/d/1xK9DvYeQU0PhDNpylaq9cDSvH2ooNeT1/view?usp=sharing',
                type: 'INFORME',
                target: '_blank',
            },
            {
                title: 'Informe Estadístico 2022',
                url: 'https://drive.google.com/file/d/1VhqHEl6bv_aVjTy3DIgxz8bHvAy0lCM9/view?usp=sharing',
                type: 'INFORME',
                target: '_blank',
            },
            {
                title: 'Informe Estadístico 2021',
                url: 'https://drive.google.com/file/d/1q6XMcST9eaB3D5KbLROCFlwFqoyUkIHx/view?usp=sharing',
                type: 'INFORME',
                target: '_blank',
            },
            {
                title: 'Informe Estadístico 2020',
                url: 'https://drive.google.com/file/d/1vEtpSsgrzmION9yA4W2cGY0elJumR3ov/view?usp=sharing',
                type: 'INFORME',
                target: '_blank',
            },
            {
                title: 'Informe Estadístico 2019',
                url: 'https://drive.google.com/file/d/1_DfTA9Gn7jQ--bas9kpJH-qWAlvzxQ8I/view?usp=sharing',
                type: 'INFORME',
                target: '_blank',
            },
        ],
        micrositio: {
            patternhero: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1754345359/6QFEAsOhO4dQjLbx02_cjontn",
                alt: "Patrón decorativo del Hero",
            },
            patternpanel: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1754345359/6QFEAsOhO4dQjLbx01_b1vhhk",
                alt: "Patrón decorativo de Panel",
            },
            logosite: {
                image: "https://res.cloudinary.com/dmem56hib/image/upload/v1754341291/H9c2Oc81Q535IiiZ",
                alt: "BANAVIM",
            },
        },
    }));
});