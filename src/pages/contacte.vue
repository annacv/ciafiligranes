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

  components: {
    BrandedList,
    Cover,
    Synopsis
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
