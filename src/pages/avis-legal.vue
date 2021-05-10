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

  head() {
    return Object.assign({}, this.$t('meta.legal'))
  },

  components: {
    Cover,
    PlainText
  },

  nuxtI18n: {
    paths: {
      ca: '/avis-legal',
      es: '/aviso-legal',
      en: '/legal-notice'
    }
  }
}
</script>
