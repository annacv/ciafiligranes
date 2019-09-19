<template>
  <div>
    <Cover
      :content="$t('cover.filipersones')"
      class="cover__filipersones"
    />
    <section>
      <Summary
        :abstract="$t('summary.filipersones.abstract')"
        :items="$t('summary.filipersones.items')"
        class="summary__filipersones"
      />
    </section>
    <article>
      <article>
        <Synopsis
          :title="$t('synopsis.filipersones.makutu.title')"
          :image="$t('synopsis.filipersones.makutu.image')"
          :paragraphs="$t('synopsis.filipersones.makutu.paragraphs')"
          class="synopsis__filipersones"
        />
        <Summary
          :abstract="$t('summary.makutu.abstract')"
          :items="$t('summary.makutu.items')"
          class="summary__filipersones-detail-clown"
        />
        <Gallery
          :images="$t('gallery.filipersones.makutu.images')"
          class='gallery__filipersones'
        />
      </article>
      <article>
        <SynopsisReverse
          :title="$t('synopsis.filipersones.trinxeta.title')"
          :image="$t('synopsis.filipersones.trinxeta.image')"
          :paragraphs="$t('synopsis.filipersones.trinxeta.paragraphs')"
          class="synopsis__filipersones"
        />
        <Summary
          :abstract="$t('summary.trinxeta.abstract')"
          :items="$t('summary.trinxeta.items')"
          class="summary__filipersones-detail-clown"
        />
        <Gallery
          :images="$t('gallery.filipersones.trinxeta.images')"
          class='gallery__filipersones'
        />
      </article>
    </article>
    <section>
      <Filipartners
        :heading="$t('filipartners.heading')"
        :partnersicons="$t('filipartners.partnersicons')"
      />
    </section>
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import Filipartners from '@/components/Filipartners/Filipartners'
import Gallery from '@/components/Gallery/Gallery'
import PlainText from '@/components/PlainText/PlainText'
import Synopsis from '@/components/Synopsis/Synopsis'
import SynopsisReverse from '@/components/Synopsis/SynopsisReverse'
import Summary from '@/components/Summary/Summary'

export default {
  name: 'Filipersones',

  components: {
    Cover,
    Filipartners,
    Gallery,
    PlainText,
    Synopsis,
    SynopsisReverse,
    Summary
  },

  nuxtI18n: {
    paths: {
      ca: '/filipersones',
      en: '/filipeople',
      es: '/filipersonas'
    }
  }
}
</script>
