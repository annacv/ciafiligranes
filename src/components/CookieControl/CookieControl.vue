<template>
  <div>
    <h1>Nuxt.js Cookie Control</h1>
    <p>
      <a
        href="https://www.npmjs.com/package/nuxt-cookie-control"
        target="_blank"
      >nuxt-cookie-control</a>
    </p>
    <section>
      <div>
        <button class v-text="'Open cookie control'" @click="$cookies.modal = true"/>
        <button class v-text="'Delete consent'" @click="deleteConsent()" v-if="$cookies.consent"/>
        <select v-model="lang">
          <option v-for="(l, key) in availableLang" :key="l.id" :value="key" v-text="l"/>
        </select>
      </div>
    </section>
    <pre>Enabled cookies: [{{ enabledCookies }}]</pre>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lang: this.$store.state.lang,
      availableLang: {
        ca: "Català",
        en: "English",
        es: "Español"
      }
    };
  },

  computed: {
    enabledCookies() {
      let enabled = this.$cookies.consent
        ? [
            ...this.$cookies.necessary.map(c => {
              return [...c.cookies];
            }),
            ...this.$cookies.enabled.map(c => {
              return [...c.cookies];
            })
          ]
        : [];
      return enabled.join(", ");
    }
  },

  methods: {
    deleteConsent() {
      this.$cookies.set({ name: "cookie_control_consent", value: false });
      window.location.reload();
    }
  },

  watch: {
    lang() {
      this.$store.commit("setData", {
        storage: this.$store.state,
        key: "lang",
        data: this.lang
      });
    }
  }
};
</script>

<style>
* {
  font-family: Arial, "Helvetica Neue", Helvetica, sans-serif;
}
</style>


<style scoped lang="scss">
h1 {
  color: #206569;
  margin-bottom: 5px;
  & + p {
    margin-top: 0;
    font-size: 16px;
    a {
      color: #206569;
    }
  }
}

section {
  display: flex;
  align-items: center;
  margin-top: 10px;
}

p {
  font-size: 12px;
  max-width: 500px;
}

pre {
  padding: 0;
  font-size: 16px;
  margin: 20px 0 0;
}

img {
  display: block;
  max-width: 200px;
  margin-left: 50px;
}

select {
  border: 0;
  outline: 0;
  width: 100%;
  color: #fff;
  display: block;
  font-size: 18px;
  margin-top: 20px;
  max-width: 300px;
  padding: 15px 20px;
  background-color: #206569;
}

button {
  border: 0;
  outline: 0;
  width: 100%;
  color: #fff;
  font-size: 18px;
  cursor: pointer;
  max-width: 300px;
  padding: 15px 20px;
  background-color: #206569;
  transition: background-color 200ms;
  backface-visibility: hidden;
  &:hover {
    background-color: #2e495e;
  }

  & + button {
    margin-top: 20px;
  }
}
</style>
