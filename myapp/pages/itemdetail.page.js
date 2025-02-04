export class ItemDetailPage{
    constructor(page){
        this.page = page;
        this.btnAddToBag = page.locator("button[title='Add to bag']");
        
    }


    async selectQuantity(quantity){
        const ddList = await this.page.locator("//div[@class='form-item quantity']/select");
        await ddList.selectOption(quantity);

    }

    async selectSize(size){
        await this.page.locator(`//button[text()='${size}']`).click();
    }

    async clickButtnAddToBag(){
        await this.btnAddToBag.click();
    }
    
}