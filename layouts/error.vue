<template>
  <v-app>
    <v-layout column align-center justify-center v-if="error.statusCode === 404">
      <span v-text="'Увы, здесь ничего нет.'"/>
      <span v-text="'Но не расстраивайтесь.'"/>
      <span v-text="'Ведь вы можете...'"/>
      <NuxtLink to="/" class="mt-2">
        <v-btn class="btn">
          <v-icon v-text="'mdi-arrow-left'" class="mr-2"/>
          Вернуться на главную
        </v-btn>
      </NuxtLink>
    </v-layout>
    <h1 v-else>
      {{ otherError }}
    </h1>
  </v-app>
</template>

<script>
export default {
  layout: 'empty',
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  data () {
    return {
      pageNotFound: '404 Not Found',
      otherError: 'An error occurred'
    }
  },
}
</script>
