<template>
  <section class="mt-5">
    <h2>DatePicker App</h2>
    <p>Pick a date that you like below:</p>
    <client-only>
      <date-picker
        v-model="date"
        :value="date"
        placeholder="DD/MM/YYYY"
        format="dd/MM/yyyy"
        class="form-control"
      />
    </client-only>
  </section>
</template>

<script>
export default {
  data() {
    return {}
  },
  computed: {
    date: {
      get() {
        return this.$store.state.date
      },
      set(value) {
        return this.$store.dispatch('SetDate', value)
      },
    },
  },
  methods: {
    console_data() {},
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
