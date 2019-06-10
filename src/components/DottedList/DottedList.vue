<style
  lang="scss"
  src="./dottedList.scss"
  scoped
>
</style>

<template>
  <b-container fluid class="dotted-list">
    <b-row no-gutters>
      <div class="col-12 col-md-10 col-lg-10 col-xl-10 col-xxl-8 col-xxxl-8 offset-0 offset-md-1 offset-xxl-2">
        <b-row no-gutters>
          <ul
            class="dotted-list__list"
          >
            <li
              v-for="item in listitems"
              :key="item.paragraph"
              class="dotted-list__list-item"
            >
              <h2
                v-if="item.title"
                class="dotted-list__title"
                v-text="item.title"
              />
              <h4
                v-if="item.subtitle"
                class="dotted-list__subtitle"
                v-text="item.subtitle"
              />
              <p
                class="dotted-list__paragraph"
                v-text="item.paragraph"
              />
              <a
                v-if="item.link"
                :href="item.href"
                class="dotted-list__list-link"
                v-text="item.link"
              />
            </li>
          </ul>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'DottedList',

  props: {
    listitems: {
      type: Array,
      required: true,
      default: () => []
    }
  }
}
</script>
