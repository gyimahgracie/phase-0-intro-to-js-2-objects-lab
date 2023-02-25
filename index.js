// Write your solution in this file!
const employee = {
    name: "john",
    streetAddress: "123 road"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    return {...employee, 
        [key]: value}

}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
   employee[key] = value
    return employee
}
function deleteFromEmployeeByKey(employee, key){
const copyOfEmployee = {...employee}
delete copyOfEmployee[key]
   // delete {... employee.key}
    return copyOfEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
        //const employee = {employee}
        console.log ('TOAST::: '+employee)
        delete employee[key]
        return employee


}
