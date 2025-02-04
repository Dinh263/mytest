import { StatementSync } from "node:sqlite";

export class HeaderPage {
    constructor(page){
        this.page = page;
        this.txtSearchItem = page.getByPlaceholder('Search David Jones');
        this.btnSearchitem = page.locator('//button[@title="Search Now"]');
        this.spanHeaderCartSummary = page.locator('div[class="header-cart-summary"] a');
    }

    async setTxtSearchItem(itemName){
        await this.txtSearchItem.fill(itemName);
    }

    async clicBtnSearchItem(){
        await this.btnSearchitem.click();
    }

    async clickSpanHeaderCartSummary() {
        await this.page.locator("//a[text()='Checkout']").click();
    }
}