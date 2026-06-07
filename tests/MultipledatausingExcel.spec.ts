import { AdminLoginPage } from "../Pages/Adminloginpage";
import { AddEmp } from "../Pages/AddEmp";
import { AdminLogoutPage } from "../Pages/Adminlogoutpage";
import { ExcelFiUtil } from "../Utils/ExcelFileUtil";
import path from "path";
import test from "@playwright/test";
let login : AdminLoginPage
let emp : AddEmp
let logout: AdminLogoutPage
let employeeData:any
//access path of excel file
let filepath = path.join(__dirname,"../TestData/EmployeeData.xlsx")
let sheetName="HRmData"
try {
  //call excel method
  employeeData = ExcelFiUtil.getExceldata(filepath,sheetName)
} catch (error) {
  console.log(error)
}
test.describe('MultipleData Using ExcelFile',()=>{
test.beforeEach(async({page})=>{
  login = new AdminLoginPage(page)
  await login.launchUrl(process.env.BASE_URL!)
})
for (const testData of employeeData) {
  test(`Add Employee With multiple data Using Excel ${testData.fname},${testData.mname}`,async({page})=>{
login = new AdminLoginPage(page)
emp = new AddEmp(page)
await login.HRMLogin(testData.username,testData.password)
await emp.HRM_Emp(testData.fname,testData.mname,testData.lname)
  })
}
test.afterEach(async({page})=>{
  logout = new AdminLogoutPage(page)
  await logout.HRmLogout()

})
})