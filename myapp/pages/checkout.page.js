export class CheckOutPage{
    constructor(page){
        this.page = page;
        this.lbelBag = this.page.locator("//span[@class='breadcrumb-label' and text()='Bag']");
        
        
    }


    getItemPriceElementAt(index){
        return this.page.locator(`//div[@class='cart']//tbody/tr[${index}]/td[@class='qty']//span[@itemprop='price']/span[2]`);
    }

    getItemNameElementAt(index){
        return this.page.locator(`//div[@class='cart']//tbody/tr[${index}]//h4[@class='item-name']/a`);
    }

    getItemQuantityElementAt(index){
        return this.page.locator(`//div[@class='cart']//tbody/tr[${index}]//td[@class='qty']//input`);
    }

    getItemSizeElementAt(index){
        return this.page.locator(`//div[@class='cart']//tbody/tr[${index}]//p[@class='size']/span[2]`);
    }
    
}