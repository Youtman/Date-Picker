<template>
  <section class="row mt-3">
    <div class="col-md-4 form-group">
      <label for="email">Enter your Email:</label>
      <input type="email" v-model="email" id="email" class="form-control" />
    </div>
  </section>
</template>

<script>
export default {
  computed: {
    email: {
      get() {
        return this.$store.state.email
      },
      set(value) {
        return this.$store.dispatch('SetEmail', value)
      },
    },
  },
}
</script>

<style lang="css" scoped>
.form-control {
  display: block;
  width: 100%;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  color: #495057;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
}
</style>
