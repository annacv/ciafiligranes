export default {
  home: {
    title: 'Més Filigranes',
    description: 'Troba espectacles, tallers i animacions fetes a mida',
    highlighted: [
      {
        title: 'Espectacle',
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
      },

      {
        title: 'Taller',
        name: 'Circ',
        link: '',
        image: '/images/img_thumbnail_circ.jpg',
        alt: 'Imatge del Taller de Circ',
        button: {
          class: 'button-outline-secondary button-outline-secondary__teal',
          type: 'application',
          href: '/downloads/CiaFiligranes-TallerCirc.pdf',
          download: 'CiaFiligranes - TallerCirc.pdf',
          text: 'Dossier',
          slot: {
            alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
            class: 'arrow_down teal'
          }
        }
      },

      {
        title: 'Taller',
        name: 'Bombolles de sabó',
        link: '',
        image: '/images/img_thumbnail_bombolles.jpg',
        alt: 'Imatge del taller de Bombolles de Sabó',
        button: {
          class: 'button-outline-secondary button-outline-secondary__teal',
          type: 'application',
          href: '/downloads/CiaFiligranes-TallerBombollesSabo.pdf',
          download: 'CiaFiligranes-TallerBombollesSabo.pdf',
          text: 'Dossier',
          slot: {
            alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
            class: 'arrow_down teal'
          }
        }
      },

      {
        title: 'Espectacle itinerant',
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
      }
    ]
  }
}
