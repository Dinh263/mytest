import { HeaderPage } from "../pages/header.page.js";
import { ContentPage } from "../pages/content.page.js";

export class SearchSteps {
    constructor(page){
        this.page = page;
        this.headerPage = new HeaderPage(page);
        this.contentPage = new ContentPage(page);

    }

    async searchForAProduct(itemName){
        await this.headerPage.setTxtSearchItem(itemName);
        await this.headerPage.clicBtnSearchItem();
    }

    async assertSearchItemCorrect(expectedItemName){
        await this.contentPage.waitForItemResultCompleteShown();
        await this.contentPage.asssertSearchResultCorrect(expectedItemName);
    }

}