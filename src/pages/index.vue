<template>
  <div class="content">
    <Cover/>
    <section class="main-content">
      <Synopsis
        :title="$t('synopsis.title')"
        :paragraphs="$t('synopsis.paragraphs')"
        :image="$t('synopsis.image')"
      />
      <InScene/>
    </section>
    <Highlights/>
    <Contact :title="$t('contact.title')"/>
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact'
import Cover from '@/components/Cover/Cover'
import Highlights from '@/components/Highlights/Highlights'
import InScene from '@/components/InScene/InScene'
import Logo from '@/components/Logo'
import Synopsis from '@/components/Synopsis/Synopsis'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    Logo,
    Contact,
    Cover,
    Highlights,
    InScene,
    Synopsis
  },

  nuxtI18n: {
    paths: {
      es: '/',
      ca: '/',
      en: '/'
    }
  }
}
</script>
