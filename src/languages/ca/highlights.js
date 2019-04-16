export default {
  home: {
    title: 'Més Filigranes',
    description: 'Troba espectacles, tallers i animacions fetes a mida',
    highlighted: [
      {
        title: 'Espectacles',
        name: 'Desencaixats',
        link: '',
        image: '/images/img_thumbnail_desencaixats.jpg',
        alt: "Imatge de l'espectacle Desencaixats",
        button: {
          class: 'button-outline-secondary button-outline-secondary__teal',
          type: 'application',
          href: '/downloads/CiaFiligranes-Desencaixats_ca.pdf',
          download: 'CiaFiligranes-Desencaixats_ca.pdf',
          text: 'Dossier',
          slot: {
            alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
            class: 'arrow_down teal'
          }
        }
      },

      {
        title: 'Tallers',
        name: 'Pallassos',
        link: '',
        image: '/images/img_thumbnail_pallassos.jpg',
        alt: 'Imatge del Taller de Pallassos',
        button: {
          class: 'button-outline-secondary button-outline-secondary__teal',
          type: 'application',
          href: '/downloads/CiaFiligranes-TallerPallassos.pdf',
          download: 'CiaFiligranes - TallerPallassos.pdf',
          text: 'Dossier',
          slot: {
            alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
            class: 'arrow_down teal'
          }
        }
      },

      {
        title: 'Animacions',
        name: 'Germans Freak-Frac',
        link: '',
        image: '/images/img_thumbnail_freakfrac.jpg',
        alt:
          "Imatge de l'espectacle itinerant Cercavila dels Germans Feak-Frac",
        button: {
          class: 'button-outline-secondary button-outline-secondary__teal',
          type: 'application',
          href: '/downloads/CiaFiligranes-GermansFreakFrac.pdf',
          download: 'CiaFiligranes-GermansFreakFrac.pdf',
          text: 'Dossier',
          slot: {
            alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
            class: 'arrow_down teal'
          }
        }
      },

      {
        title: 'Espectacles',
        name: 'El Circ Filixic',
        link: '',
        image: '/images/img_thumbnail_filixic.jpg',
        alt: "Imatge de l'espectacle El Circ Filixic",
        button: {
          class: 'button-outline-secondary button-outline-secondary__teal',
          type: 'application',
          href: '/downloads/CiaFiligranes-ElCircFilixic.pdf',
          download: 'CiaFiligranes-ElCircFilixic.pdf',
          text: 'Dossier',
          slot: {
            alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
            class: 'arrow_down teal'
          }
        }
      }
    ]
  }
}
