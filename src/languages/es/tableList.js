export default {
  cookies: {
    table: {
      title: 'Cookies utilizadas',
      description:
        'A continuación os informamos detalladamente de las cookies que pueden instalarse des de nuestro sitio.'
    },
    headfields: [
      {
        heading: 'Nombre'
      },
      {
        heading: 'Descripción'
      },
      {
        heading: 'Responsable'
      },
      {
        heading: 'Duración'
      }
    ],
    contentfields: [
      {
        nom: '_ga',
        descripció:
          'Utilizada por Google para identificar a los usuarios recurrentes.',
        responsable: 'Google.com',
        durada: '18 meses'
      },
      {
        nom: '_hjIncludedInSample',
        descripió:
          'Esta cookie de sesión está configurada para permitir a Hotjar saber si este visitante se incluye en la muestra que se utiliza para generar tendencias.',
        responsable: 'Hotjar Ltd.',
        durada: '365 días'
      },
      {
        nom: '_hjRecordingEnabled',
        descripció:
          'Este valor se establece cuando se inicia la grabación de cómo la usuaria navega.Se utiliza para ver si la usuaria ya está grabando esta sesión en particular.',
        responsable: 'Hotjar Ltd.',
        durada: 'Sesión'
      }
    ]
  }
}
