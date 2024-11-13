"use strict";

import { test, expect } from "../global-setup";

let slug = "/woocommerce-elements/woo-product-grid/";

test.describe("Woo Product Grid - Default Preset", () => {
  let heading = "Hurayra Automation 241107 Default Preset";
  let widget = null;
  let item0 = null;
  let item1 = null;
  let item2 = null;

  test.beforeEach(async ({ page }) => {
    await page.goto(slug);
    await page.waitForLoadState("networkidle");
    await page.getByRole("heading", { name: heading, exact: true }).scrollIntoViewIfNeeded();
    await expect.soft(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
    await page.getByRole("heading", { name: heading, exact: true }).click();

    widget = page.getByTestId("e0fdb4d").locator(".elementor-widget-container");
    item0 = widget.locator("ul.products > li").nth(0);
    item1 = widget.locator("ul.products > li").nth(1);
    item2 = widget.locator("ul.products > li").nth(2);
  });

  // test.fail("Test Contents", async ({ page }) => {
  //   await expect.soft(page.locator('ul').filter({ hasText: 'Sale241107 Out of stock241110' })).toBeVisible();
  //   await expect.soft(page.getByRole('link', { name: 'Out of stock241107' })).toBeVisible();
  //   await expect.soft(page.getByText('Sale241107').first()).toBeVisible();
  //   await expect.soft(page.getByRole('link', { name: 'Out of stock241107' })).toBeVisible();
  //   await expect.soft(page.getByText('Hurayra Automation 241107 DONOTDELETE').first()).toBeVisible();
  //   await expect.soft(page.getByRole('link', { name: 'Hurayra Automation Product 00', exact: true })).toBeVisible();
  //   await expect.soft(page.getByText('Rated 1.00 out of').first()).toBeVisible();
  //   await expect.soft(page.locator('li').filter({ hasText: 'Sale241107 Out of stock241107' }).getByLabel('Rated 1.00 out of')).toBeVisible();
  //   await expect.soft(page.getByText('100.00৳ Original price was:')).toBeVisible();
  //   await expect.soft(page.getByText('100.00৳', { exact: true })).toBeVisible();
  //   await expect.soft(page.getByText('90.00৳', { exact: true })).toBeVisible();
  //   await expect.soft(page.getByRole('link', { name: 'Read more about “Hurayra' })).toBeVisible();
  //   await expect.soft(page.getByTitle('Compare').first()).toBeVisible();
  //   await expect.soft(page.getByText('Hurayra Automation 241107 DONOTDELETE Hurayra Automation Product 00Rated 1.00')).toBeVisible();
  //   await expect.soft(page.getByLabel('Read more about “Hurayra').first()).toBeHidden();
  //   await page.getByRole("link", { name: "Out of stock241107" }).hover();
  //   await page.waitForTimeout(500);
  //   await expect.soft(page.getByLabel("Read more about “Hurayra").first()).toBeVisible();
  // });

  test("Test Style Tab -> Products", async ({ page }) => {
    // alignment center
    // content background color #fefefe
    // padding 3px
    // Border type dotted
    // Border width 2px
    // Border color #00ff00 normal, #0000ff hover
    // Box Shadow 1 2 13 4
    // Border radius 4px

    await expect.soft(item1).toHaveCSS("text-align", "center");
    await expect.soft(item1).toHaveCSS("background-color", "rgb(254, 254, 254)");
    await expect.soft(item1).toHaveCSS("padding", "3px");
    await expect.soft(item1).toHaveCSS("border-style", "dotted");
    await expect.soft(item1).toHaveCSS("border-width", "2px");
    await expect.soft(item1).toHaveCSS("border-color", "rgb(0, 255, 0)");
    await item1.hover();
    await page.waitForTimeout(500);
    await expect.soft(item1).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(item1).toHaveCSS("box-shadow", "rgba(0, 0, 0, 0.5) 1px 2px 13px 4px");
    await expect.soft(item1).toHaveCSS("border-radius", "4px");
  });

  test("Test Style Tab -> Color & typography", async ({ page }) => {
    // Product title color #ff0000
    // Product Title Typography
    // Font Family Tahoma
    // Size 11px
    // Weight 500
    // Transform Uppercase
    // Style Normal
    // Decoration Underline
    // Line height 11px
    // Letter Spacing 1.1
    // Word Spacing 1px

    let title = item2.getByRole("heading", { name: "Hurayra Automation Product 02", exact: true });
    await expect.soft(title).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(title).toHaveCSS("font-size", "11px");
    await expect.soft(title).toHaveCSS("font-weight", "500");
    await expect.soft(title).toHaveCSS("text-transform", "uppercase");
    await expect.soft(title).toHaveCSS("font-style", "normal");
    await expect.soft(title).toHaveCSS("text-decoration", "underline solid rgb(255, 0, 0)");
    await expect.soft(title).toHaveCSS("line-height", "11px");
    await expect.soft(title).toHaveCSS("letter-spacing", "1.1px");
    await expect.soft(title).toHaveCSS("word-spacing", "1px");

    // Product Price Color #00ff00
    // Product sale price color #00ffff
    // Produc Price Typography
    // Font Family Verdana
    // Size 12px
    // Weight 600
    // Transform lowercase
    // Style italic
    // Decoration Overline
    // Line height 12px
    // Letter Spacing 1.2
    // Word Spacing 2px

    let priceSection = item2.locator("span.price");
    let priceBefore = item2.getByText("102.00৳", { exact: true });
    let priceAfter = item2.getByText("92.00৳", { exact: true });
    
    await expect.soft(priceBefore).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(priceAfter).toHaveCSS("color", "rgb(0, 255, 255)");
    
    await expect.soft(priceSection).toHaveCSS("font-family", /Verdana/);
    await expect.soft(priceSection).toHaveCSS("font-size", "12px");
    await expect.soft(priceSection).toHaveCSS("font-weight", "600");
    await expect.soft(priceSection).toHaveCSS("text-transform", "lowercase");
    await expect.soft(priceSection).toHaveCSS("font-style", "italic");
    await expect.soft(priceSection).toHaveCSS("text-decoration", "overline solid rgb(0, 255, 0)");
    await expect.soft(priceSection).toHaveCSS("line-height", "12px");
    await expect.soft(priceSection).toHaveCSS("letter-spacing", "1.2px");
    await expect.soft(priceSection).toHaveCSS("word-spacing", "2px");

    // Star rating color #0000ff
    // Produc Price Typography
    // Font Family Helvetica
    // Size 13px
    // Weight 700
    // Transform Capitalize
    // Style oblique
    // Decoration line through
    // Line height 13px
    // Letter Spacing 1.3
    // Word Spacing 3px

    let starRating = item2.locator("div.star-rating");
    await expect.soft(starRating).toHaveCSS("color", "rgb(54, 65, 81)");
    await expect.soft(starRating).toHaveCSS("font-family", /Helvetica/);
    await expect.soft(starRating).toHaveCSS("font-size", "13px");
    await expect.soft(starRating).toHaveCSS("font-weight", "700");
    await expect.soft(starRating).toHaveCSS("text-transform", "capitalize");
    await expect.soft(starRating).toHaveCSS("font-style", "italic");
    await expect.soft(starRating).toHaveCSS("text-decoration", "line-through solid rgb(54, 65, 81)");
    await expect.soft(starRating).toHaveCSS("line-height", "13px");
    await expect.soft(starRating).toHaveCSS("letter-spacing", "1.3px");
    await expect.soft(starRating).toHaveCSS("word-spacing", "3px");
  });

  test("Test Style Tab -> Button Styles", async ({ page }) => {
    // Button padding 15px
    // Radius 14px
    // Button color #ff0000
    // Background #00ffff
    // Border type double
    // border width 3px
    // Border color #0000ff
    // Hover button color #00ff00
    // Hover background color #0000ff
    // Hover border color #00ffff

    // Font Family Verdana
    // Size 15px
    // Weight 500
    // Transform capitalize
    // Style italic
    // Decoration Underline
    // Line height 15px
    // Letter Spacing 1.5
    // Word Spacing 5px

    let button = item2.getByRole("link", { name: "Add to cart: “Hurayra Automation Product 02”" });
    await expect.soft(button).toHaveCSS("padding", "15px");
    await expect.soft(button).toHaveCSS("border-radius", "14px");
    await expect.soft(button).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(button).toHaveCSS("background-color", "rgb(0, 255, 255)");
    await expect.soft(button).toHaveCSS("border-style", "double");
    await expect.soft(button).toHaveCSS("border-width", "3px");
    await expect.soft(button).toHaveCSS("border-color", "rgb(0, 0, 255)");

    await button.hover();
    await page.waitForTimeout(500);

    await expect.soft(button).toHaveCSS("color", "rgb(0, 255, 0)");
    await expect.soft(button).toHaveCSS("background-color", "rgb(0, 0, 255)");
    await expect.soft(button).toHaveCSS("border-color", "rgb(0, 255, 255)");

    await expect.soft(button).toHaveCSS("font-family", /Verdana/);
    await expect.soft(button).toHaveCSS("font-size", "15px");
    await expect.soft(button).toHaveCSS("font-weight", "500");
    await expect.soft(button).toHaveCSS("text-transform", "capitalize");
    await expect.soft(button).toHaveCSS("font-style", "italic");
    await expect.soft(button).toHaveCSS("text-decoration", "underline solid rgb(0, 255, 0)");
    await expect.soft(button).toHaveCSS("line-height", "15px");
    await expect.soft(button).toHaveCSS("letter-spacing", "1.5px");
    await expect.soft(button).toHaveCSS("word-spacing", "5px");
  });

  test("Test Style Tab -> Sale Badge Style", async ({ page }) => {
    // Sale Badge Color #ff0000
    // Sale Badge Background #00ff00
    // Font Family Arial
    // Size 13px
    // Weight 300
    // Transform uppercase
    // Style italic
    // Decoration Underline
    // Line height 13px
    // Letter Spacing 1.3
    // Word Spacing 3px
    let saleBadge = item0.getByText("Sale241107");
    await expect.soft(saleBadge).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(saleBadge).toHaveCSS("background-color", "rgb(0, 255, 0)");
    await expect.soft(saleBadge).toHaveCSS("font-family", /Arial/);
    await expect.soft(saleBadge).toHaveCSS("font-size", "13px");
    await expect.soft(saleBadge).toHaveCSS("font-weight", "300");
    await expect.soft(saleBadge).toHaveCSS("text-transform", "uppercase");
    await expect.soft(saleBadge).toHaveCSS("font-style", "italic");
    await expect.soft(saleBadge).toHaveCSS("text-decoration", "underline solid rgb(255, 0, 0)");
    await expect.soft(saleBadge).toHaveCSS("line-height", "13px");
    await expect.soft(saleBadge).toHaveCSS("letter-spacing", "1.3px");
    await expect.soft(saleBadge).toHaveCSS("word-spacing", "3px");

    // Stock out badge color #0000ff
    // Stock out badge background #ffff00
    // Font Family Tahoma
    // Size 14px
    // Weight 400
    // Transform lowercase
    // Style normal
    // Decoration line though
    // Line height 14px
    // Letter Spacing 1.4
    // Word Spacing 4px
    let stockOutBadge = item0.getByText("Out of stock241107");
    await expect.soft(stockOutBadge).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(stockOutBadge).toHaveCSS("background-color", "rgb(255, 255, 0)");
    await expect.soft(stockOutBadge).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(stockOutBadge).toHaveCSS("font-size", "14px");
    await expect.soft(stockOutBadge).toHaveCSS("font-weight", "400");
    await expect.soft(stockOutBadge).toHaveCSS("text-transform", "lowercase");
    await expect.soft(stockOutBadge).toHaveCSS("font-style", "normal");
    await expect.soft(stockOutBadge).toHaveCSS("text-decoration", "line-through solid rgb(0, 0, 255)");
    await expect.soft(stockOutBadge).toHaveCSS("line-height", "14px");
    await expect.soft(stockOutBadge).toHaveCSS("letter-spacing", "1.4px");
    await expect.soft(stockOutBadge).toHaveCSS("word-spacing", "4px");
  });

  test("Test Style Tab -> Pagination", async ({ page }) => {
    // alignment right
    // Top spacing 16px
    // Font Times New Roman
    // Size 17px
    // Weight 700
    // Line height 17px
    // Letter spacing 1.7px
    // Word spacing 7px

    let paginationButton1 = widget.locator("a.page-numbers").getByText("1");
    let paginationButton2 = widget.locator("a.page-numbers").getByText("2");
    let paginationButtonNext = widget.locator("a.page-numbers").getByText("->");

    await expect.soft(widget.locator("nav.eael-woo-pagination")).toHaveCSS("text-align", "right");
    await expect.soft(widget.locator("nav.eael-woo-pagination")).toHaveCSS("margin-top", "16px");
    await expect.soft(paginationButton1).toHaveCSS("font-family", /Times New Roman/);
    await expect.soft(paginationButton1).toHaveCSS("font-size", "17px");
    await expect.soft(paginationButton1).toHaveCSS("font-weight", "700");
    await expect.soft(paginationButton1).toHaveCSS("line-height", "17px");
    await expect.soft(paginationButton1).toHaveCSS("letter-spacing", "1.7px");
    await expect.soft(paginationButton1).toHaveCSS("word-spacing", "7px");

    //// Normal
    // Text Color red
    // Background Color green
    // Border type solid
    // Border width 7px
    // Border Color blue
    // Border Radius 17px
    await expect.soft(paginationButton2).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(paginationButton2).toHaveCSS("background-color", "rgb(0, 255, 0)");
    await expect.soft(paginationButton2).toHaveCSS("border-style", "solid");
    await expect.soft(paginationButton2).toHaveCSS("border-width", "7px");
    await expect.soft(paginationButton2).toHaveCSS("border-color", "rgb(0, 0, 255)");
    await expect.soft(paginationButton2).toHaveCSS("border-radius", "17px");

    //// Hover
    // Text color #ffff00
    // Background color #00ffff
    // Border color #ff00ff
    await paginationButton2.hover();
    await page.waitForTimeout(500);
    await expect.soft(paginationButton2).toHaveCSS("color", "rgb(255, 255, 0)");
    await expect.soft(paginationButton2).toHaveCSS("background-color", "rgb(0, 255, 255)");
    await expect.soft(paginationButton2).toHaveCSS("border-color", "rgb(255, 0, 255)");

    //// Active
    // Text color #000000
    // Background color #ffffff
    // Border color #ffff00
    await paginationButtonNext.click();
    await page.waitForTimeout(1000);
    await expect.soft(paginationButton2).toHaveCSS("color", "rgb(0, 0, 0)");
    await expect.soft(paginationButton2).toHaveCSS("background-color", "rgb(255, 255, 255)");
    await expect.soft(paginationButton2).toHaveCSS("border-color", "rgb(255, 255, 0)");

    // Loader color #ffff00
  });

  test("Test Style Tab -> Compare Button", async ({ page }) => {
    // Padding 13px
    // Radius 31px
    // Button Color Normal red, hover blue
    // Background color normal green, hover black
    // Border color normal red, hover white
    // Border type dashed
    // Border width 3px
    // Typography
    // Font Family Tahoma
    // Size 13px
    // Weight 300
    // Transform lowercase
    // Style italic
    // Decoration overline
    // Line height 13px
    // Letter Spacing 1.3
    // Word Spacing 3px

    let compareLink = item0.locator("a.eael-wc-compare");

    await expect.soft(compareLink).toHaveCSS("padding", "13px");
    await expect.soft(compareLink).toHaveCSS("border-radius", "31px");
    await expect.soft(compareLink).toHaveCSS("color", "rgb(255, 0, 0)");
    await expect.soft(compareLink).toHaveCSS("background-color", "rgb(0, 255, 0)");
    await expect.soft(compareLink).toHaveCSS("border-color", "rgb(255, 0, 0)");
    await expect.soft(compareLink).toHaveCSS("border-style", "dashed");
    await expect.soft(compareLink).toHaveCSS("border-width", "3px");

    await expect.soft(compareLink).toHaveCSS("font-family", /Tahoma/);
    await expect.soft(compareLink).toHaveCSS("font-size", "13px");
    await expect.soft(compareLink).toHaveCSS("font-weight", "300");
    await expect.soft(compareLink).toHaveCSS("text-transform", "lowercase");
    await expect.soft(compareLink).toHaveCSS("font-style", "italic");
    await expect.soft(compareLink).toHaveCSS("text-decoration", "overline solid rgb(255, 0, 0)");
    await expect.soft(compareLink).toHaveCSS("line-height", "13px");
    await expect.soft(compareLink).toHaveCSS("letter-spacing", "1.3px");
    await expect.soft(compareLink).toHaveCSS("word-spacing", "3px");

    await compareLink.hover();
    await page.waitForTimeout(500);

    await expect.soft(compareLink).toHaveCSS("color", "rgb(0, 0, 255)");
    await expect.soft(compareLink).toHaveCSS("background-color", "rgb(0, 0, 0)");
    await expect.soft(compareLink).toHaveCSS("border-color", "rgb(255, 255, 255)");
  });
});
