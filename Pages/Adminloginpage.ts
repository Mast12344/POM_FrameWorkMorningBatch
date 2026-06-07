import { expect, Locator, Page } from "@playwright/test";
import { url } from "inspector";

export class AdminLoginPage{
//declare varibales for login
readonly page :Page
readonly ObjUser : Locator
readonly ObjPass :Locator
readonly ObjLogin : Locator
//to initilise values for above varibale creat constructor
constructor(page:Page)
{
    this.page =page
    this.ObjUser = page.locator('#txtUsername')
    this.ObjPass = page.locator('#txtPassword')
    this.ObjLogin = page.getByRole('button',{name:'LOGIN',exact:true})
}
//method for launch url
async launchUrl(Url:string){
    await this.page.goto(Url)
}
//method for login
async HRMLogin(user:string,pass:string)
{
    await this.page.waitForLoadState('load')
    await this.ObjUser.waitFor({state:'visible'})
    await this.ObjUser.fill(user)
    await this.ObjPass.waitFor({state:'visible'})
    await this.ObjPass.fill(pass)
    await this.ObjLogin.click()
    await expect(this.page).toHaveURL(/dashboard/)

}

}
    




