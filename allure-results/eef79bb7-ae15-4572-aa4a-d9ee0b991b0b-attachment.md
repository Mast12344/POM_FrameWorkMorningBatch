# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: Multipledatausingjson.spec.ts >> MultipleData Using Json >> Add Emp with multiple data john
- Location: tests\Multipledatausingjson.spec.ts:17:8

# Error details

```
Error: expect(received).toBe(expected) // Object.is equality

If it should pass with deep equality, replace "toBe" with "toStrictEqual"

Expected: Promise {}
Received: serializes to the same string
```

```
Error: locator.waitFor: Test ended.
Call log:
  - waiting for getByRole('button', { name: 'Add' }) to be visible
    - waiting for" http://orangehrm.qedgetech.com/symfony/web/index.php/pim/viewEmployeeList" navigation to finish...
    - navigated to "http://orangehrm.qedgetech.com/symfony/web/index.php/pim/viewEmployeeList"
    - waiting for" http://orangehrm.qedgetech.com/symfony/web/index.php/auth/logout" navigation to finish...
    - navigated to "http://orangehrm.qedgetech.com/symfony/web/index.php/auth/login"

```

# Page snapshot

```yaml
- generic [ref=e3]:
  - textbox [ref=e5]
  - generic [ref=e6]:
    - img [ref=e8]
    - generic [ref=e9]:
      - img [ref=e11]
      - generic [ref=e39]:
        - generic [ref=e40]: LOGIN Panel
        - generic [ref=e41]:
          - textbox [ref=e42]
          - text: Username
        - generic [ref=e43]:
          - textbox [ref=e44]
          - text: Password
        - generic [ref=e46]:
          - button "LOGIN" [ref=e47] [cursor=pointer]
          - link "Forgot your password?" [ref=e49] [cursor=pointer]:
            - /url: /symfony/web/index.php/auth/requestPasswordResetCode
  - generic [ref=e52]:
    - text: "Alternative Login :"
    - combobox [ref=e53]:
      - option "-- Select --" [selected]
    - button "Login" [disabled] [ref=e54]
  - generic [ref=e55]:
    - generic [ref=e56]:
      - text: OrangeHRM 4.10.1
      - text: © 2005 - 2026
      - link "OrangeHRM, Inc" [ref=e57] [cursor=pointer]:
        - /url: http://www.orangehrm.com
      - text: . All rights reserved.
    - generic [ref=e58]:
      - link "LinkedIn OrangeHRM group" [ref=e59] [cursor=pointer]:
        - /url: http://www.linkedin.com/groups?home=&gid=891077
        - img "LinkedIn OrangeHRM group" [ref=e60]
      - link "OrangeHRM on Facebook" [ref=e61] [cursor=pointer]:
        - /url: http://www.facebook.com/OrangeHRM
        - img "OrangeHRM on Facebook" [ref=e62]
      - link "OrangeHRM on twitter" [ref=e63] [cursor=pointer]:
        - /url: http://twitter.com/orangehrm
        - img "OrangeHRM on twitter" [ref=e64]
      - link "OrangeHRM on youtube" [ref=e65] [cursor=pointer]:
        - /url: http://www.youtube.com/orangehrm
        - img "OrangeHRM on youtube" [ref=e66]
```

# Test source

```ts
  1  | import { expect, Locator, Page } from "@playwright/test";
  2  | import path from "path";
  3  | const imagepath = path.join(__dirname,"./134170270044824419.jpg")
  4  | 
  5  | export class AddEmp{
  6  | 
  7  |     private page:Page
  8  |     readonly objpim :Locator
  9  |     readonly objAdd :Locator
  10 |     readonly objFullname :Locator
  11 |     readonly objMnane :Locator
  12 |     readonly objLname :Locator
  13 |     readonly objEmpID :Locator
  14 |     readonly objPhotograph :Locator
  15 |     readonly objsave :Locator
  16 |     readonly objEmpdisplayID :Locator
  17 |     constructor(page:Page)
  18 |     {
  19 |     this.page =page
  20 |     this.objpim =page.getByRole('link',{name:'PIM'})
  21 |     this.objAdd =page.getByRole('button',{name:'Add'})
  22 |     this.objFullname =page.locator('#firstName');
  23 |      this.objMnane =page.locator('#middleName');
  24 |       this.objLname =page.locator('#lastName');
  25 |        this.objEmpID =page.locator('#employeeId');
  26 |         this.objPhotograph =page.locator('#photofile');
  27 |          this.objsave =page.getByRole('button',{name:'Save'})
  28 |           this.objEmpdisplayID =page.locator('#personal_txtEmployeeId')
  29 | 
  30 |     }
  31 | //method for Add Emp
  32 | async HRM_Emp(fname:string,mname:string,lname:string)
  33 | {
  34 | 
  35 | this.objpim.waitFor({state:'visible'})
  36 | this.objpim.click()
> 37 | this.objAdd.waitFor()
     |             ^ Error: locator.waitFor: Test ended.
  38 | this.objAdd.click()
  39 | this.objFullname.waitFor({state:'visible'})
  40 | this.objFullname.fill(fname)
  41 | this.objLname.fill(lname)
  42 | // capture employee id
  43 | const Exp_ID = this.objEmpID.inputValue()
  44 | this.objPhotograph.waitFor()
  45 | //this.objPhotograph.setInputFiles(imagepath)
  46 | this.objsave.click()
  47 | this.objEmpdisplayID.waitFor()
  48 | const act_id = this.objEmpdisplayID.inputValue()
  49 | expect(act_id).toBe(Exp_ID)
  50 | console.log(`Employee Added Success ${act_id} ${Exp_ID}`)
  51 | return act_id
  52 | 
  53 | }
  54 | 
  55 | }
```