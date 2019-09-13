<template>
    <div>
        Register
        <p>Test2!!! </p>
        <EmployeeTable></EmployeeTable>
        Here!
        <EmployeeForm></EmployeeForm>
    </div>
</template>

<script>
import EmployeeTable from '../components/EmployeeTable.vue';
import EmployeeForm from '../components/EmployeeForm.vue';
export default {
        components: {
      EmployeeTable,
      EmployeeForm
    }
}
</script>