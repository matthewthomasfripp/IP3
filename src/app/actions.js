'use server'

import puppeteer from 'puppeteer';

export async function getTopDeals() {

    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://www.trolley.co.uk/');

    const data = await page.evaluate(() => {
        const products = Array.from(document.querySelectorAll('.product-content'));
        return products.map(product => ({
            id: product.getAttribute('data-id'),
            brand: product.querySelector('._brand')?.innerText.trim(),
            name: product.querySelector('._title')?.innerText.trim(),
            shops: Array.from(product.querySelectorAll('._stores ._store_item')).map(item => ({
                name: item.querySelector('.store-logo')?.getAttribute('title').replace(/[^a-zA-Z]+/g, '').toLowerCase(),
                price: item.querySelector('._store_price')?.innerText.trim()
            })),
            quantity: product.querySelector('.tag._qty')?.innerText.trim(),
            reviews: product.querySelector('._reviews .count')?.innerText.trim(),
            review_width: product.querySelector('._reviews .-filled').getAttribute('style'),
            displayed_review: product.querySelector('.-review')?.innerText.trim(),
            href: product.querySelector('.product-link').getAttribute('href'),
            save_at_x: product.querySelector('._tag')?.innerText.trim(),
            percent_cheaper: product.querySelector('._tag._percent')?.innerText.trim()
        }));
    });

    console.log(data);

    await browser.close();
    return data;
}
// .collapse ._item
export async function getProductPage({ slug: [name, id] }) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto(`https://www.trolley.co.uk/product/${name}/${id}`);

    const data = await page.evaluate(pid => {
        const product = document.querySelector('.product-profile');

        return {
            id: pid,
            brand: product.querySelector('._brand').innerText,
            name: product.querySelector('._desc').innerText,
            shops: Array.from(product.querySelectorAll('.collapse ._item')).map(item => {

                const [newPrice, oldPrice] = item.querySelector('._price b')?.innerText.trim().split(' ');

                return {
                    name: item.querySelector('.store-logo')?.getAttribute('title').replace(/[^a-zA-Z]+/g, '').toLowerCase(),
                    eachPrice: item.querySelector('._price ._per-item')?.innerText.trim(),
                    newPrice,
                    oldPrice
                }
            }),
        }
    }, id);

    console.log(data);

    await browser.close();
    return data;
}