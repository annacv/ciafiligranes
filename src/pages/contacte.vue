<template>
  <div>
    <Cover
      :content="$t('cover.contacte')"
      class="cover__contact"
    />
    <BrandedList
      :brandedicons="$t('brandedList.brandedicons')"
    />
    <SynopsisReverse
      :image="$t('synopsis.contact.image')"
      :title="$t('synopsis.contact.title')"
      :paragraphs="$t('synopsis.contact.paragraphs')"
      :socialicons="$t('synopsis.contact.socialicons')"
      class="synopsis__contact synopsis__reverse"
    />
  </div>
</template>

<script>
import BrandedList from '@/components/BrandedList/BrandedList'
import Cover from '@/components/Cover/Cover'
import SynopsisReverse from '@/components/Synopsis/SynopsisReverse'

export default {
  name: 'Contacte',

  components: {
    BrandedList,
    Cover,
    SynopsisReverse
  },

  nuxtI18n: {
    paths: {
      ca: '/contacte',
      en: '/contact',
      es: '/contacto'
    }
  }
}
</script>
