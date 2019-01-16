<template>
  <div class="content">
    <Cover/>
    <InScene/>
    <Highlights/>
    <Contract
      :title="$t('contract.title')"
      :items="$t('contract.items')"
    />
  </div>
</template>

<script>
import Contact from '@/components/Contact/Contact'
import Cover from '@/components/Cover/Cover'
import Highlights from '@/components/Highlights/Highlights'
import InScene from '@/components/InScene/InScene'
import Logo from '@/components/Logo'
import Contract from '@/components/Contract/Contract'

export default {
  name: 'HomePage',

  head() {
    return this.$t('meta.index')
  },

  components: {
    Contact,
    Contract,
    Cover,
    Highlights,
    InScene,
    Logo
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
