"use strict";

import { test, expect } from "../global-setup";

let slug = "https://essential-addons.com/elementor/post-grid";
let heading = "Post Grid";

// test.describe("Post Grid", () => {
//   test.beforeEach(async ({ page }) => {
//     await page.goto(slug);
//     await expect(page.getByRole("heading", { name: heading, exact: true })).toBeVisible();
//   });

//   test("Test Section: Masonry Layout With Animation", async ({ page }) => {
//     await page.getByRole("heading", { name: "Masonry Layout With Animation" }).scrollIntoViewIfNeeded();
//     await expect(page.getByRole("heading", { name: "Masonry Layout With Animation" })).toBeVisible();
//     await expect(
//       page.getByText("Select source type as posts, set your post layout to masonry to give it an unique look")
//     ).toBeVisible();
//   });
// });
