export default {
  cookies: {
    table: {
      title: 'Cookies emprades',
      description:
        'A continuació us informem detalladament de les cookies que poden instal·lar-se des del nostre lloc web.'
    },
    headfields: [
      {
        heading: 'Nom'
      },
      {
        heading: 'Descripció'
      },
      {
        heading: 'Responsable'
      },
      {
        heading: 'Durada'
      }
    ],
    contentfields: [
      {
        nom: '_ga',
        descripció:
          'Utilitzada per Google per a identificar als usuaris recurrents.',
        responsable: 'Google.com',
        durada: '18 mesos'
      },
      {
        nom: '_hjIncludedInSample',
        descripió:
          'Aquesta cookie de sessió està configurada per permetre a Hotjar saber si aquest visitant s’inclou a la mostra que s’utilitza per generar tendències.',
        responsable: 'Hotjar Ltd.',
        durada: '365 dies'
      },
      {
        nom: '_hjRecordingEnabled',
        descripció:
          "Aquest valor s’estableix quan s’inicia l’enregistrament de com la usuària navega. S'utilitza per veure si la usuària ja està enregistrant aquesta sessió en particular.",
        responsable: 'Hotjar Ltd.',
        durada: 'Sessió'
      }
    ]
  }
}
