<template>
  <div>
    <Cover
      :content="$t('cover.cookies')"
      class="cover__legal"
    />
    <PlainText
      :items="$t('plainText.cookies.items')"
      class="plain-text__cookies"
    />
    <DottedList
      :listitems="$t('dottedList.cookies.items')"
      class="dotted-list__cookies"
    />
    <TableList
      :table="$t('tableList.cookies.table')"
      :headfields="$t('tableList.cookies.headfields')"
      :contentfields="$t('tableList.cookies.contentfields')"
    />
  </div>
</template>

<script>
import Cover from '@/components/Cover/Cover'
import DottedList from '@/components/DottedList/DottedList'
import PlainText from '@/components/PlainText/PlainText'
import TableList from '@/components/TableList/TableList'

export default {
  name: 'Cookies',

  components: {
    Cover,
    DottedList,
    PlainText,
    TableList
  },

  nuxtI18n: {
    paths: {
      ca: '/cookies',
      es: '/cookies',
      en: '/cookies-policy'
    }
  }
}
</script>
