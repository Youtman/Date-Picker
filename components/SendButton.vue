<template>
  <section>
    <div class="row">
      <div class="col-md-6 form-group">
        <input
          type="submit"
          value="Submit Email"
          @click="console_data"
          class="btn btn-primary"
        />
      </div>
    </div>
  </section>
</template>

<script>
export default {
  methods: {
    console_data() {
      this.$store.dispatch('ShowData')
    },
  },
}
</script>

<style lang="css" scoped>
.btn {
  padding: 10px 126px;
}
</style>
