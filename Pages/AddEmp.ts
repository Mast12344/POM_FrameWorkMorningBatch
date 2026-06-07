import { expect, Locator, Page } from "@playwright/test";
import path from "path";
let imagepath = path.join(__dirname,"./134170270044824419.jpg")

export class AddEmp{

    private page:Page
    readonly objpim :Locator
    readonly objAdd :Locator
    readonly objFullname :Locator
    readonly objMnane :Locator
    readonly objLname :Locator
    readonly objEmpID :Locator
    readonly objPhotograph :Locator
    readonly objsave :Locator
    readonly objEmpdisplayID :Locator
    constructor(page:Page)
    {
    this.page =page
    this.objpim =page.getByRole('link',{name:'PIM'})
    this.objAdd =page.getByRole('button',{name:'Add'})
    this.objFullname =page.locator('#firstName');
     this.objMnane =page.locator('#middleName');
      this.objLname =page.locator('#lastName');
       this.objEmpID =page.locator('#employeeId');
        this.objPhotograph =page.locator('#photofile');
         this.objsave =page.getByRole('button',{name:'Save'})
          this.objEmpdisplayID =page.locator('#personal_txtEmployeeId')

    }
//method for Add Emp
async HRM_Emp(fname:string,mname:string,lname:string)
{

this.objpim.waitFor({state:'visible'})
this.objpim.click()
this.objAdd.waitFor()
this.objAdd.click()
this.objFullname.waitFor({state:'visible'})
this.objFullname.fill(fname)
this.objLname.fill(lname)
// capture employee id
const Exp_ID = this.objEmpID.inputValue()
this.objPhotograph.waitFor()
this.objPhotograph.setInputFiles("./134170270044824419.jpg")
this.objsave.click()
this.objEmpdisplayID.waitFor()
const act_id = this.objEmpdisplayID.inputValue()
expect(act_id).toBe(Exp_ID)
console.log(`Employee Added Success ${act_id} ${Exp_ID}`)
return act_id

}

}