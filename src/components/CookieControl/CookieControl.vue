<style
  lang="scss"
  src="./cookieControl.scss"
  scoped>
</style>

<template>
  <section
    v-if="cookies.text"
    class="cookie-control"
  >
    <transition name="cookie-control__bar">
    <div
      v-if="!cookies.consent"
      class="cookie-control__bar row"
    >
      <div class="col-12 col-md-10 col-xl-11">
        <p>
          <a
            :href="text.href"
            class="cookies-link"
            v-text="text.barDescription"
          />
        </p>
      </div>
      <div class="cookie-control__bar-buttons col-12 col-md-2 col-xl-1">
        <button
          :alt="text.alt"
          @click="setConsent" v-text="text.acceptAll"
        />
      </div>
    </div>
    </transition>
  </section>
</template>

<script>
export default {
  name: 'CookieControl',

  props: {
    locale: {
      type: String,
      default: 'ca'
    },

    text: {
      type: Object,
      default: () => {},
      required: true
    }
  },

  data() {
    return {
      saved: true,
      cookies: this.$cookies
    }
  },

  computed: {
    expirationDate() {
      let date = new Date()
      date.setFullYear(date.getFullYear() + 1)
      return date.toUTCString()
    },

    optionalCookies() {
      return this.cookies.optional
    }
  },

  methods: {
    toogleCookie(cookie) {
      if (this.saved) this.saved = false
      if (!this.cookies.enabledList.includes(cookie))
        this.cookies.enabledList.push(cookie)
      else
        this.cookies.enabledList.splice(
          this.cookies.enabledList.indexOf(cookie),
          1
        )
    },

    setConsent({ type, consent = true }) {
      this.cookies.set({
        name: 'cookie_control_consent',
        value: consent,
        expires: this.expirationDate
      })
      let enabledCookies =
        type === 'partial' && consent
          ? this.cookies.enabledList
          : [
              ...this.optionalCookies.map(c => {
                return c.name
              })
            ]
      this.cookies.set({
        name: 'cookie_control_enabled_cookies',
        value: consent ? enabledCookies.join(',') : '',
        expires: this.expirationDate
      })
      if (process.browser) window.location.reload(true)
    },

    async setTexts(isChanged = false) {
      let text = null
      try {
        const module = require(`../../languages/${this.locale}/cookies`)
        text = module.default
      } catch (e) {
        // eslint-disable-next-line
        console.error(`There are no texts for your locale: ${this.locale}`)
      }
      if (this.cookies.text && Object.keys(this.cookies.text).length > 0) {
        if (this.cookies.text.locale) {
          Object.assign(text, this.cookies.text.locale[this.locale])
          // eslint-disable-next-line
          console.log(text)
        }
        if (!isChanged) Object.assign(text, this.cookies.text)
      }
      this.$set(this.$cookies, 'text', text)
    }
  },

  async mounted() {
    await this.setTexts()
    if (process.browser && this.cookies.colors) {
      let key = null
      for (key in this.cookies.colors) {
        let k = key.toLowerCase().includes('unactive')
          ? key.replace(/Unactive/g, 'Inactive')
          : key
        document.documentElement.style.setProperty(
          `--cookie-control-${k}`,
          `${this.cookies.colors[key]}`
        )
      }
    }
    this.colorsSet = true
  },

  watch: {
    async locale() {
      await this.setTexts(true)
    }
  }
}
</script>
