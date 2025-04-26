/** @type {import('next').NextConfig} */
const nextConfig = {
    // 1. Abilita l'esportazione statica
    // Questa è l'opzione fondamentale per il deployment statico.
    // Dice a Next.js di generare una cartella 'out/' con file HTML/CSS/JS.
    // output: "export",

    // 2. Configurazione Immagini (Raccomandata per l'export statico)
    // Se usi ancora il componente <Image> di Next.js in altre parti del sito
    // (anche se ne hai sostituito uno con <img>), devi disabilitare
    // l'ottimizzazione server-side che non funzionerebbe in un ambiente statico.
    // images: {
    //     unoptimized: true,
    // },

    async redirects() {
        return [
            /* {
                source: "/contact", // L'indirizzo originale
                destination: "/work-in-progress", // La pagina di destinazione
                permanent: false, // IMPORTANTE: false per redirect temporaneo (status code 307)
            }, */
            /* {
                source: "/services", // L'indirizzo originale
                destination: "/work-in-progress", // La pagina di destinazione
                permanent: false, // IMPORTANTE: false per redirect temporaneo (status code 307)
            }, */
            {
                source: "/resume", // L'indirizzo originale
                destination: "/work-in-progress", // La pagina di destinazione
                permanent: false, // IMPORTANTE: false per redirect temporaneo (status code 307)
            },
            {
                source: "/work", // L'indirizzo originale
                destination: "/work-in-progress", // La pagina di destinazione
                permanent: false, // IMPORTANTE: false per redirect temporaneo (status code 307)
            },
        ];
    },
};

export default nextConfig;
