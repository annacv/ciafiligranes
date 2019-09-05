export default {
  cookies: {
    table: {
      title: 'Cookies used',
      description:
        'Below we inform you in detail about the cookies that can be installed on our website.'
    },
    headfields: [
      {
        heading: 'Name'
      },
      {
        heading: 'Description'
      },
      {
        heading: 'Responsible'
      },
      {
        heading: 'Duration'
      }
    ],
    contentfields: [
      {
        nom: '_ga',
        descripció: 'Used by Google to identify recurring users.',
        responsable: 'Google.com',
        durada: '18 months'
      },
      {
        nom: '_hjIncludedInSample',
        descripió:
          'This session cookie is set to let Hotjar know whether that visitor is included in the sample which is used to generate funnels.',
        responsable: 'Hotjar Ltd.',
        durada: '365 days'
      },
      {
        nom: '_hjRecordingEnabled',
        descripció:
          'This value is set when a recording of how user browses starts. It is used to see if the user is already recording this particular session.',
        responsable: 'Hotjar Ltd.',
        durada: 'Session'
      }
    ]
  }
}
