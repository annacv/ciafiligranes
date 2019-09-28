<style 
  lang="scss" 
  src="./cookies.scss"
  scoped
>
</style>

<template>
  <section
    v-if="!cookieAccepted"
    class="cookies__bar row"
  >
    <div class="col-12 col-md-10 col-xl-11">
      <p>
        {{ text }}
        <a
          :href="link.href"
          :aria-label="link.ariaLabel"
          target="_blank"
          rel="noopener"
          class="cookies__link"
          v-text="link.text"
        />
      </p>
    </div>
    <div class="cookies__bar-buttons col-12 col-md-2 col-xl-1">
        <button
          :alt="desc.alt"
          :aria-label="desc.aria"
          @click="onClickAccept"
          v-text="desc.acceptAll"
        />
      </div>
  </section>
</template>

<script>
const EXPIRATION_DAYS = 365

export default {
  name: 'Cookies',

  props: {
    cookieAccepted: {
      type: Boolean,
      default: true
    },

    cookieName: {
      type: String,
      required: true
    },

    desc: {
      type: Object,
      required: true
    },

    text: {
      type: String,
      required: true
    },

    link: {
      type: Object,
      required: true
    }
  },

  methods: {
    onClickAccept() {
      const expires =
        new Date().getTime() + EXPIRATION_DAYS * 24 * 60 * 60 * 1000
      document.cookie = `${this.cookieName}=true; expires=${expires}; path=/`

      this.$emit('accepted-cookie')
    }
  }
}
</script>
