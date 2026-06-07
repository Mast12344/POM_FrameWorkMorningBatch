import { Locator, Page } from "@playwright/test";

export class AdminLogoutPage{
    page :Page
    readonly Objwelcome :Locator
    readonly ObjLogout : Locator
    constructor(page:Page)
    {
        this.page =page
        this.Objwelcome =page.getByRole('link',{name:'Welcome Md',exact:true})
        this.ObjLogout = page.getByRole('link',{name:'Logout',exact:true})
    }
    //write method
    async HRmLogout()
    {
        await this.Objwelcome.waitFor()
       await this.Objwelcome.click()
       await this.ObjLogout.waitFor()
       await this.ObjLogout.click() 
    }
} 