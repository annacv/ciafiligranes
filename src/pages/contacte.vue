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
      :paragraphs="$t('synopsis.contact.paragraphs')"
      class="synopsis__contact"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import BrandedList from '@/components/BrandedList/BrandedList'
import SynopsisReverse from '@/components/Synopsis/SynopsisReverse'

export default {
  name: 'Contacte',

  components: {
    Cover,
    BrandedList,
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
