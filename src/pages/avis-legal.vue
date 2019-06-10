<template>
  <div>
    <Cover
      :content="$t('cover.legalDisclaimer')"
      class="cover__legal"
    />
    <PlainText
      :items="$t('plainText.disclaimer.items')"
      class="plain-text__legal"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import PlainText from '@/components/PlainText/PlainText'

export default {
  name: 'LegalDisclaimer',

  components: {
    Cover,
    PlainText
  },

  nuxtI18n: {
    paths: {
      ca: '/avis-legal',
      en: '/legal-disclaimer',
      es: '/aviso-legal'
    }
  }
}
</script>
