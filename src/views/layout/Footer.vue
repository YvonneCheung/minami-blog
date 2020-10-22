<template>
  <div class="x-footer">
    <p>{{ records }}</p>
    <p>Copyright © 2020 All Rights Reserved V.1.0.0</p>
  </div>
</template>

<script>
import { RECORDS } from '@/config/config'
export default {
  data () {
    return {
      records: RECORDS
    }
  },
  methods: {}
}
</script>
