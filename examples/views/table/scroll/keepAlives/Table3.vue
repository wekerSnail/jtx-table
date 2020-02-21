<template>
  <div>
    <p>子路由 3</p>

    <vxe-table
      border
      show-overflow
      height="400"
      :loading="loading"
      :data="tableData">
      <vxe-table-column type="checkbox" width="60"></vxe-table-column>
      <vxe-table-column prop="nickname" label="nickname"></vxe-table-column>
      <vxe-table-column prop="sex" label="Sex"></vxe-table-column>
      <vxe-table-column prop="age" label="Age"></vxe-table-column>
      <vxe-table-column prop="date12" label="Date"></vxe-table-column>
      <vxe-table-column prop="region" label="Region"></vxe-table-column>
      <vxe-table-column prop="rate" label="Rate"></vxe-table-column>
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
      this.tableData = window.MOCK_DATA_LIST.slice(0, 1500)
      this.loading = false
    }, 300)
  }
}
</script>
