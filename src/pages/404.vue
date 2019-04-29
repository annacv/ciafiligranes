<template>
  <div class="content">
    <nuxt-link
      :to= "localePath('index')"
      >
      <Cover
        :content="$t('cover.404')"
        class="cover__404"
      />
    </nuxt-link>
</div>
</template>

<script>
import Cover from '@/components/Cover/Cover'

export default {
  name: '404',

  components: {
    Cover
  },

  nuxtI18n: {
    paths: {
      es: '/404',
      ca: '/404',
      en: '/404'
    }
  }
}
</script>
