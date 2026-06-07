import { AdminLoginPage } from "../Pages/Adminloginpage";
import { AddEmp } from "../Pages/AddEmp";
import { AdminLogoutPage } from "../Pages/Adminlogoutpage";
import employeedata from '../TestData/employee.json'
import test from "@playwright/test";
let login : AdminLoginPage
let emp : AddEmp
let logout : AdminLogoutPage
test.describe('MultipleData Using Json',()=>{
    test.beforeEach(async({page})=>{
    login = new AdminLoginPage(page)
  await  login.launchUrl(process.env.BASE_URL!)
   await login.HRMLogin(process.env.BASE_USER!,process.env.BASE_PASS!)

})
for (const data of employeedata) {
   test(`Add Emp with multiple data ${data["First name "]}`, async ({ page }) => {
 emp = new AddEmp(page)
 await emp.HRM_Emp(data["First name "], data["middle name "], data["last name  "]);
    })
}
test.afterEach(async({page})=>{
    logout = new AdminLogoutPage(page)
  await  logout.HRmLogout()
})
})