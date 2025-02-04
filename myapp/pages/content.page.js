export class ContentPage{
    constructor(page){
        this.page = page;
    }

    async waitForItemResultCompleteShown(){
        // wait for all items shown on the page.
        const divMainContent = "//div[@id='products']//div[contains(@class,'products')]/div";
        await this.page.waitForSelector(divMainContent);
        const containDiv = this.page.locator(divMainContent);
        const count = await containDiv.count();
    }


    
    async asssertSearchResultCorrect(expectedName){
        expectedName = expectedName.toLowerCase();
        const lbelItemName = "//div[@id='products']//div[contains(@class,'products')]/div//h4";
        const listItemFound = await this.page.locator(lbelItemName);
        const count = await listItemFound.count();
        var temp = 0;
        for(var i = 0; i<count; i++){
            const text = await listItemFound.nth(i).textContent();
            if(text.toLowerCase().includes(expectedName)){
                temp++;
            }
        }
        if(temp === 0){
            throw new Error(`No item found with name '${expectedName}'`);
        }
    }


    async clickOnItem(itemName){
        itemName = itemName.toUpperCase();
        await this.page.locator(`//h4/a[translate(text(), 'abcdefghijklmnopqrstuvwxyz', 'ABCDEFGHIJKLMNOPQRSTUVWXYZ')='${itemName}']`).click();
    }





    
}