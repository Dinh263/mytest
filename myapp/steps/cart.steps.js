import { expect } from "@playwright/test";
import { ContentPage } from "../pages/content.page.js";
import { ItemDetailPage } from "../pages/itemdetail.page.js";
import { HeaderPage } from "../pages/header.page.js";
import { CheckOutPage } from "../pages/checkout.page.js";

export class CartSteps {
    constructor(page){
        this.page = page;
        this.contentPage = new ContentPage(page);
        this.itemdetailPage = new ItemDetailPage(page);
        this.headerPage = new HeaderPage(page);
        this.checkOutPage = new CheckOutPage(page);

    };

    async addToCart(itemName, quantity){
        await this.contentPage.clickOnItem(itemName);
        await this.itemdetailPage.selectQuantity(quantity);
        await this.itemdetailPage.clickButtnAddToBag();
    };

    async addToCartWithMultipleSizes(itemName, size){
        await this.contentPage.clickOnItem(itemName);
        await this.itemdetailPage.selectSize(size);
        await this.itemdetailPage.clickButtnAddToBag();
    }

    async goToCheckOutPage(){
        await this.headerPage.clickSpanHeaderCartSummary();
    }

    async assertItemAddedToCartCorrectly(itemName, quantity, price){
        await expect(this.checkOutPage.getItemNameElementAt(1)).toHaveText(itemName);
        await expect(this.checkOutPage.getItemPriceElementAt(1)).toHaveText(price);
        await expect(this.checkOutPage.getItemQuantityElementAt(1)).toHaveAttribute('value', quantity);
    }

    async assertItemMutipleSizeAddedToCartCorrectly(itemName, size, price){
        await expect(this.checkOutPage.getItemNameElementAt(1)).toHaveText(itemName);
        await expect(this.checkOutPage.getItemPriceElementAt(1)).toHaveText(price);
        await expect(this.checkOutPage.getItemSizeElementAt(1)).toHaveText(size);
    }

    
}