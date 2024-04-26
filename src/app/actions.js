'use server'

import puppeteer from 'puppeteer'
import { cookies } from 'next/headers'

export async function wishlistAdd(product) {
  cookies().set(`p-${product.id}`, JSON.stringify(product))
}

export async function wishlistRemove(id) {
  cookies().delete(`p-${id}`)
}

export async function getTopDeals() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto('https://www.trolley.co.uk/')

  const data = await page.evaluate(() => {
    const products = Array.from(document.querySelectorAll('.product-content'))
    return products.map((product) => ({
      id: product.getAttribute('data-id'),
      brand: product.querySelector('._brand')?.innerText.trim(),
      name: product.querySelector('._title')?.innerText.trim(),
      shops: Array.from(product.querySelectorAll('._stores ._store_item')).map(
        (item) => ({
          name: item
            .querySelector('.store-logo')
            ?.getAttribute('title')
            .replace(/[^a-zA-Z]+/g, '')
            .toLowerCase(),
          price: item.querySelector('._store_price')?.innerText.trim(),
        })
      ),
      tags: Array.from(product.querySelectorAll('.tag_bar .tag')).map(
        (tag) => ({
          text: tag?.innerText.trim(),
          type:
            ['size', 'qty'].find((x) => tag.classList.toString().includes(x)) ||
            'default',
        })
      ),
      more_x: product.querySelector('._stores a:last-child div')?.innerText,
      quantity: product.querySelector('.tag._qty')?.innerText.trim(),
      reviews: product.querySelector('._reviews .count')?.innerText.trim(),
      review_width: Number(
        (product
          .querySelector('._reviews .-filled')
          .getAttribute('style')
          .replace(/[^0-9]/g, '') /
          60) *
          5
      ),
      displayed_review: product.querySelector('.-review')?.innerText.trim(),
      href: product.querySelector('.product-link').getAttribute('href'),
      save_at_x: product.querySelector('._tag')?.innerText.trim(),
      percent_cheaper: product
        .querySelector('._tag._percent')
        ?.innerText.trim(),
    }))
  })

  console.log(data[0].tags)

  await browser.close()
  return data
}
// .collapse ._item
export async function getProductPage({ slug: [name, id] }) {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`https://www.trolley.co.uk/product/${name}/${id}`)

  const data = await page.evaluate((pid) => {
    const product = document.querySelector('.product-profile')

    return {
      id: pid,
      brand: product.querySelector('._brand').innerText,
      name: product.querySelector('._desc').innerText,
      shops: Array.from(product.querySelectorAll('.collapse ._item')).map(
        (item) => {
          const [newPrice, oldPrice] = item
            .querySelector('._price b')
            ?.innerText.trim()
            .split(' ')

          return {
            name: item
              .querySelector('.store-logo')
              ?.getAttribute('title')
              .replace(/[^a-zA-Z]+/g, '')
              .toLowerCase(),
            eachPrice: item
              .querySelector('._price ._per-item')
              ?.innerText.trim(),
            newPrice,
            oldPrice,
          }
        }
      ),
      alternatives: Array.from(
        product.querySelectorAll('.store-alternatives a')
      ).map((alt) => {
        const [title, price, per_x] = Array.from(
          alt.querySelectorAll('div > div')
        ).map((x) => x?.innerText)

        return {
          id: alt.getAttribute('href').split('/').at(-1),
          shop: alt
            .querySelector('svg')
            .getAttribute('title')
            .replace(/[^a-zA-Z]+/g, '')
            .toLowerCase(),
          title,
          price,
          per_x: per_x.slice(0, -1),
        }
      }),
      description: Array.from(
        product.querySelectorAll('.product-description li')
      ).map((li) => li?.innerText),
      reviews: product.querySelector('.rating-overlay div div:last-child')
        ?.innerText,
      review_avg: product.querySelector('._rating-avg')?.innerText,
      review_width: Number(
        (product
          .querySelector('._fill-overlay')
          .getAttribute('style')
          .replace(/[^0-9]/g, '') /
          100) *
          5
      ),
      review_bars: Array.from(
        product.querySelectorAll('.review-dis .bar > div')
      ).map((bar) => Number(bar.getAttribute('style').replace(/[^0-9.]/g, ''))),
      review_arr: Array.from(
        product.querySelectorAll('.top-reviews > div')
      ).map((review) => [
        review?.innerText,
        Number(
          (review
            .querySelector('.stars-overlay')
            .getAttribute('style')
            .replace(/[^0-9]/g, '') /
            80) *
            5
        ),
      ]),
      tag: product.querySelector('.-d-grey-filled')?.innerText,
    }
  }, id)

  console.log(data)

  await browser.close()
  return data
}

export async function getDealsPage(slug) {
  const id = slug?.[1] || ''

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`https://www.trolley.co.uk/deals/?stores=${id}`)

  const data = await page.evaluate(() => {
    const stores = Array.from(
      document.querySelectorAll('.store-items > a')
    ).map((bar) => ({
      name: bar
        .querySelector('.store-logo')
        ?.getAttribute('title')
        .replace(/[^a-zA-Z]+/g, '')
        .toLowerCase(),
      id: bar.getAttribute('href').replace(/[^0-9]/g, ''),
    }))

    const products = Array.from(
      document.querySelectorAll('.products-grid > div')
    ).map((product) => ({
      id: product.getAttribute('data-id'),
      brand: product.querySelector('._brand')?.innerText.trim(),
      name: product.querySelector('._desc')?.innerText.trim(),
      tag: product.querySelector('._size')?.innerText.trim().split('\n')[0],
      price: product.querySelector('._price')?.innerText.trim().split('\n')[0],
      store: product
        .querySelector('._price div svg')
        .classList.toString()
        .split('-')[2],
      time: product.querySelector('._time').innerText,
      href: product.querySelector('a').getAttribute('href'),
      change: product.querySelector('.-price-changes').innerText.split('  '),
    }))

    return { stores, products }
  })

  console.log(data)

  await browser.close()
  return data
}

export async function getSearchPage(slug) {
  const q = slug.join('')

  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`https://www.trolley.co.uk/search/?q=${q}`)

  const data = await page.evaluate(() => {
    const products = Array.from(
      document.querySelectorAll('.products-grid > div')
    ).map((product) => ({
      id: product.getAttribute('data-id'),
      brand: product.querySelector('._brand')?.innerText.trim(),
      name: product.querySelector('._desc')?.innerText.trim(),
      tag: product.querySelector('._size')?.innerText.trim().split('\n')[0],
      price: product.querySelector('._price')?.innerText.trim().split('\n')[0],
      store: product
        .querySelector('._price div svg')
        .classList.toString()
        .split('-')[2],
      href: product.querySelector('a').getAttribute('href'),
      per_x: product.querySelector('._per-item')?.innerText.trim(),
    }))

    return { products }
  })

  console.log(data)

  await browser.close()
  return data
}

export async function getExplorePage() {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()

  await page.goto(`https://www.trolley.co.uk/explore`)

  const data = await page.evaluate(() => {
    const categories = Array.from(document.querySelectorAll('section')).map(
      (category) => ({
        name: category.querySelector('h2').innerText,
        products: Array.from(
          category.querySelectorAll('.products-grid > div')
        ).map((product) => ({
          id: product.getAttribute('data-id'),
          brand: product.querySelector('._brand')?.innerText.trim(),
          name: product.querySelector('._desc')?.innerText.trim(),
          tag: product.querySelector('._size')?.innerText.trim().split('\n')[0],
          price: product
            .querySelector('._price')
            ?.innerText.trim()
            .split('\n')[0],
          href: product.querySelector('a').getAttribute('href'),
          per_x: product.querySelector('._per-item')?.innerText.trim(),
        })),
      })
    )

    return { categories }
  })

  console.log(data.categories)

  await browser.close()
  return data
}
