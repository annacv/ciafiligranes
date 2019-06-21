export default {
  home: {
    abstract:
      "La clau d'aquesta obra és un joc constant d’estira i arronsa, que dona lloc a una relació impregnada de fantasia, semblant al món real en el que viuen els nens/es, alhora entranyable i conflictiva. Entre el Clown (Makutu) i l'August (Toti) hi ha una relació on s'equilibren curosament la rivalitat i la complicitat.",

    items: [
      {
        title: 'Plis-plas',
        description:
          'Espectacle de pallassos pensat per a un públic familiar, participatiu, amb trucs i entremaliadures constants.'
      },
      {
        title: "Durada de l'espectacle",
        description: '50 minuts'
      }
    ],

    button: {
      class: 'button-outline-secondary',
      type: 'application',
      href: '/downloads/CiaFiligranes-PlisPlas_ca.pdf',
      target: '__blank',
      download: 'CiaFiligranes-PlisPlas_ca.pdf',
      text: 'Dossier',
      slot: {
        alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
        class: 'arrow_down black'
      }
    }
  },

  performances: {
    abstract:
      "Una infinitat de personatges caracteritzats a mida s'interrelacionaran amb el públic. Aquests autèntics camaleons de l'escena realitzen diferents accions i trucs amb l'humor sempre present: trucs malabars, disfresses, màgia, música, accions sorpressives, rutines d'humor i jocs participatius. Desvetllaran la seva identitat des de l'inici o en un moment determinat.",

    items: [
      {
        title: 'Animacions a la carta',
        description:
          "S'adapten a diferents temàtiques, ideals per amenitzar convencions, trobades i tot tipus d'events."
      },
      {
        title: "Durada de l'espectacle",
        description: 'Durada mínima: 60 minuts'
      }
    ],

    button: {
      class: 'button-outline-secondary',
      type: 'application',
      href: '/downloads/CiaFiligranes-Animacions.pdf',
      target: '__blank',
      download: 'CiaFiligranes-Animacions.pdf',
      text: 'Dossier',
      slot: {
        alt: 'Fletxa descendent. En clicar es descarrega un arxiu',
        class: 'arrow_down black'
      }
    }
  }
}
