import {test} from '@playwright/test';
import { SearchSteps } from '../steps/search.steps';
import { CartSteps } from '../steps/cart.steps';

test.beforeEach('Open Site', async ({page})=>{
    await page.goto('https://www.davidjones.com/');
});

test('Search a product with one size and add to cart', async ({page})=>{
    const searchSteps = new SearchSteps(page);
    const cartSteps = new CartSteps(page);
    var itemSearchName = "PAPER BRAID HAT WITH GG BOW";
    var quantity = '2';
    var price = '47.20'
    await searchSteps.searchForAProduct(itemSearchName);
    await searchSteps.assertSearchItemCorrect(itemSearchName);
    await cartSteps.addToCart(itemSearchName, quantity);
    await cartSteps.goToCheckOutPage();
    await cartSteps.assertItemAddedToCartCorrectly(itemSearchName, quantity, price);
    
});

test('Search a product with multiple sizes and add to cart successflly', async({page})=>{
    const searchSteps = new SearchSteps(page);
    const cartSteps = new CartSteps(page);
    var itemSearchName = "Polo Bear Pile Fleece Hoodie";
    var size = 'S';
    var price = '199.50'
    await searchSteps.searchForAProduct(itemSearchName);
    await searchSteps.assertSearchItemCorrect(itemSearchName);
    await cartSteps.addToCartWithMultipleSizes(itemSearchName, size);
    await cartSteps.goToCheckOutPage();
    await cartSteps.assertItemMutipleSizeAddedToCartCorrectly(itemSearchName, size, price);
    
});