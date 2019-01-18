<!--style lang="scss" src="./Highlights.scss" scoped></style-->

<template>
  <section class="container__highlights">
    <div class="highlights__content">
      <hgroup>
        <h3
          class="highlights__section-title"
          v-text="content.title"
        />
        <p
          class="highlights__section-description"
          v-text="content.description"
        />
      </hgroup>
      <div class= "highlights_items">
        <div class="columns is-mobile">
          <div
            v-for="feature in features"
            :key="feature.title"
            class="column">
            <div class="card">
              <div class="card-content">
                <p
                  class="card-header-title has-text-grey"
                  v-text="feature.title"
                />
                <p
                  class="card-offer__name"
                  v-text="feature.name"
                />
                <div class="content has-text-centered">
                  <b-icon
                    :icon="feature.icon"
                    size="is-large"
                    type="is-primary"/>
                </div>
              </div>
              <footer class="card-footer">
                <div
                  class="card-footer-item"
                  v-html="feature.content"/>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'Highlights',

  props: {
    content: {
      type: Object,
      required: true,
      default: () => {}
    },

    features: {
      type: Array,
      default: () => {}
    }
  }
}
</script>
