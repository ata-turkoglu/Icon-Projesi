<template>
  <div>
	<icons-landing />
  </div>
</template>

<script>
import IconsLanding from '../components/IconsLanding'
export default {
  name: 'home-page',
  components: {IconsLanding},
  data () {
    return {
      electron: process.versions.electron,
      name: this.$route.name,
      node: process.versions.node,
      path: this.$route.path,
      platform: require('os').platform(),
      vue: require('vue/package.json').version
    }
  },
  methods: {
    open (link) {
      this.$electron.shell.openExternal(link)
    }
  }
}
</script>

<style scoped>

</style>
