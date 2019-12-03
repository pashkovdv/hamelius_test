<template>
  <tr>
    <td>{{item.s}}</td>
    <td>{{item.p}}</td>
    <td>{{item.result}}</td>
  </tr>
</template>

<script>
export default {
  name: 'Prest',
  props: ['item']
}
</script>
