<template>
  <div class="container">
    <DateInput />
    <EmailInput />
    <SendButton />
  </div>
</template>

<script>
import DateInput from '~/components/DateInput.vue'
import EmailInput from '~/components/EmailInput.vue'
import SendButton from '~/components/SendButton.vue'
export default {
  name: 'IndexPage',
  components: { DateInput, EmailInput, SendButton },
}
</script>
