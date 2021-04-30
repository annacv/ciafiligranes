export default {
  home: {
    title: 'Sinopsi',
    paragraphs: [
      {
        paragraph:
          "Plis Plas és un espectacle on el Toti i el Makutu no paren de fer-se la “punyeta”: s'enfaden a tort i a dret, però l’amistat sempre acaba prevalent."
      },
      {
        paragraph:
          'Amb una cadira, un embut o una galleda ens faran, amb el seu toc personal, gags clàssics combinats amb malabars i música en directe.'
      }
    ],

    image: {
      alt: "Imatge de l'espectacle plis-plas",
      srcmobile: '/images/img_src_mobile_shows_plisplas.jpg',
      src: '/images/img_src_shows_plisplas.jpg',
      srcset: '/images/img_sinopsi_plisplas.png'
    },

    buttons: [
      {
        class: 'button-outline-primary',
        type: 'application',
        href: '/espectacles/plisplas',
        target: '_top',
        download: '',
        text: 'Més info',
        slot: {
          alt: "Fletxa dreta. En clicar es navega a la pàgina de l'espectacle",
          class: 'arrow-right radical-red'
        }
      }
    ]
  },

  performances: {
    title: 'Sinopsi',
    paragraphs: [
      {
        paragraph:
          "Cuiners, forners, cambrers, bombers, jardiners en tàndem, dones de la neteja, circ d’època... I també xanquers, monociclistes, bola d'equilibri o bé malabaristes de foc."
      },
      {
        paragraph:
          'Tant presenten activitats organitzades com interactúen amb el públic, adequant el vestuari i la caracterització.'
      }
    ],

    image: {
      alt: "Imatge de l'animació amb malabars de foc",
      srcmobile: '/images/img_src_mobile_performances.jpg',
      src: '/images/img_sinopsi_performances.jpg',
      srcset: '/images/img_sinopsi_performances.png'
    }
  },

  filipersones: {
    makutu: {
      title: 'Makutu',
      paragraphs: [
        {
          paragraph:
            "Diplomat en Educació Social, l'Albert neix a Terrassa el 1977. Comença a interessar-se pel món del Circ als 16 anys, tot i que de ben petitet ja havia trepitjat algún escenari realitzant representacions musicals i teatrals. Assisteix al Conservatori de Música de Terrassa fins als 14 anys, on aprèn solfeig i guitarra."
        }
      ],

      image: {
        alt: "L'Albert és el pallasso Makutu",
        srcmobile: '/images/img_src_mobile_sinopsi_makutu.jpg',
        src: '/images/img_src_sinopsi_makutu.jpg',
        srcset: '/images/img_sinopsi_makutu.png'
      }
    },
    trinxeta: {
      title: 'Trinxeta',
      paragraphs: [
        {
          paragraph:
            'En Jordi va nèixer a Terrassa (Barcelona) l’any 1975. Des de ben petit ha estat lligat a la cultura popular de la seva ciutat. Fins als 15 anys formà part de l’Esbart Dansaire, Diables de Terrassa, i també de la colla castellera Minyons de Terrassa. Al 1991 comença a vincular-se a col·lectius de teatre al carrer, pallassos i circ.'
        }
      ],

      image: {
        alt: 'En Jordi és el pallasso Trinxeta',
        srcmobile: '/images/img_src_mobile_sinopsi_trinxeta.jpg',
        src: '/images/img_src_sinopsi_trinxeta.jpg',
        srcset: '/images/img_sinopsi_trinxeta.png'
      }
    }
  },

  contact: {
    title:
      'I si vols fer una mica el xafarder, o veure on actuem properament...',

    paragraphs: [
      {
        paragraph:
          "Informa't sobre actualitat, agenda i troba més imatges de la Companyia Filigranes, o entra a la Filitele per veure grans moments dels nostres espectacles."
      }
    ],

    socialicons: [
      {
        alt: 'Facebook de la Companyia Filigranes. Obre en una nova pestanya',
        image: '/icons/facebook--black.svg',
        link: 'https://www.facebook.com/Cia-Filigranes-204888372926384/'
      },
      {
        alt: 'Twitter de la Companyia Filigranes. Obre en una nova pestanya',
        image: '/icons/twitter--black.svg',
        link: 'https://twitter.com/ciafiligranes?lang=ca'
      },
      {
        alt: 'Instagram de la Companyia Filigranes. Obre en una nova pestanya',
        image: '/icons/instagram--black.svg',
        link: 'https://www.instagram.com/cia.filigranes/'
      },
      {
        alt:
          'Canal Youtube de la Companyia Filigranes. Obre en una nova pestanya',
        image: '/icons/youtube--black.svg',
        link: 'https://www.youtube.com/channel/UCaH3Bb7VIiuzwy51TyyKzpg'
      }
    ],

    image: {
      alt: "En Trinxeta a l'aparell!",
      srcmobile: '/images/img_src_mobile_contact-rrss.jpg',
      src: '/images/img_src_contact-rrss.jpg',
      srcset: '/images/img_contact-rrss.png'
    }
  }
}
