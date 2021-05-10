<style
  lang="scss"
  src="@/components/ProductInfo/productInfo.scss"
>
</style>

<template>
  <b-container fluid class="product-info">
    <b-row no-gutters>
      <div class="col-12 col-xl-10 col-xxl-8 offset-xl-1 offset-xxl-2">
        <b-row no-gutters class="product-info__row">
          <div
            v-if="videoId"
            class="col-12 col-lg-7"
          >
            <YTEmbedded :video-id="videoId"/>
          </div>
          <div
            v-else
            class="col-12 col-md-7"
          >
            <Gallery
              v-if="images"
              :images="images" 
              squared
            />
          </div>
          <div class="col-12 col-lg-5 col-xl-4 offset-xl-1">
            <DataSheet :sheets="sheets"/>
            <template v-if="buttons">
              <b-row
                v-for="button in buttons"
                :key="button.class"
                no-gutters
                class="product-info__btn"
              >
                <FiliButton
                  v-if="button"
                  :button="button"
                />
              </b-row>
            </template>
          </div>
        </b-row>
      </div>
    </b-row>
  </b-container>
</template>

<script>
import DataSheet from '@/components/ProductInfo/DataSheet/DataSheet'
import FiliButton from '@/components/FiliButton/FiliButton'
import Gallery from '@/components/Gallery/Gallery'
import YTEmbedded from '@/components/ProductInfo/EmbeddedVideo/YTEmbedded'

export default {
  name: 'ProductInfo',

  components: {
    DataSheet,
    FiliButton,
    Gallery,
    YTEmbedded
  },

  props: {
    buttons: {
      type: Array,
      default: () => []
    },

    images: {
      type: Object,
      default: () => {}
    },

    sheets: {
      type: Array,
      default: () => []
    },

    videoId: {
      type: String,
      default: ''
    }
  }
}
</script>
