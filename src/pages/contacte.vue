<template>
  <div>
    <Cover
      :content="$t('cover.contacte')"
      class="cover__contact"
    />
    <BrandedList
      :brandedicons="$t('brandedList.brandedicons')"
    />
    <Synopsis
      :image="$t('synopsis.contact.image')"
      :title="$t('synopsis.contact.title')"
      :paragraphs="$t('synopsis.contact.paragraphs')"
      :socialicons="$t('synopsis.contact.socialicons')"
      reverse
      class="synopsis__contact synopsis__reverse"
    />
  </div>
</template>

<script>
import BrandedList from '@/components/BrandedList/BrandedList'
import Cover from '@/components/Cover/Cover'
import Synopsis from '@/components/Synopsis/Synopsis'

export default {
  name: 'Contacte',

  head() {
    return Object.assign({}, this.$t('meta.home'))
  },

  components: {
    BrandedList,
    Cover,
    Synopsis
  },

  nuxtI18n: {
    paths: {
      ca: '/contacte',
      es: '/contacto',
      en: '/contact'
    }
  }
}
</script>
