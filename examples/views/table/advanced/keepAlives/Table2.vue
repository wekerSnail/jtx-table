<template>
  <div>
    <p>子路由 2</p>

    <vxe-table
      border
      height="400"
      :loading="loading"
      :data="tableData">
      <vxe-table-column type="radio" width="60"></vxe-table-column>
      <vxe-table-column prop="role" label="Rolw"></vxe-table-column>
      <vxe-table-column prop="age" label="Age"></vxe-table-column>
      <vxe-table-column prop="num" label="Num"></vxe-table-column>
      <vxe-table-column prop="date12" label="Date"></vxe-table-column>
    </vxe-table>
  </div>
</template>

<script>
export default {
  data () {
    return {
      loading: false,
      tableData: []
    }
  },
  created () {
    this.loading = true
    setTimeout(() => {
      this.tableData = window.MOCK_DATA_LIST.slice(0, 30)
      this.loading = false
    }, 300)
  }
}
</script>
