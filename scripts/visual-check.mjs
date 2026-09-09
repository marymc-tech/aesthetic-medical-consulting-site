import { chromium } from "playwright";
const base = "http://localhost:3100";
const pages = ["/", "/medical-director-services", "/good-faith-exams", "/training-and-mentorship", "/resources", "/about", "/faqs", "/contact", "/blog"];
const sizes = { desktop: [1440, 900], tablet: [834, 1112], mobile: [390, 844] };
const browser = await chromium.launch({ executablePath: process.env.CHROME_PATH || "/opt/pw-browsers/chromium-1194/chrome-linux/chrome" }).catch(async () => chromium.launch());
const errors = [];
for (const [name, [w, h]] of Object.entries(sizes)) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  page.on("pageerror", (e) => errors.push(`${name} pageerror: ${e.message}`));
  page.on("console", (m) => { if (m.type() === "error") errors.push(`${name} console: ${m.text()}`); });
  for (const p of pages) {
    await page.goto(base + p, { waitUntil: "networkidle" });
    // scroll to trigger reveals so full-page shot shows everything
    await page.evaluate(async () => { for (let y = 0; y < document.body.scrollHeight; y += 600) { window.scrollTo({ top: y, behavior: 'instant' }); await new Promise(r => setTimeout(r, 80)); } window.scrollTo({ top: 0, behavior: 'instant' }); });
    await page.waitForTimeout(400);
    const sw = await page.evaluate(() => document.documentElement.scrollWidth);
    if (sw > w) errors.push(`${name} ${p}: horizontal overflow ${sw}>${w}`);
    await page.screenshot({ path: `/tmp/shots/${name}${p === "/" ? "_home" : p.replaceAll("/", "_")}.png`, fullPage: true });
  }
  // mobile menu test
  if (name === "mobile") {
    await page.goto(base + "/", { waitUntil: "networkidle" });
    await page.click('button[aria-controls="mobile-nav"]');
    await page.waitForTimeout(300);
    await page.screenshot({ path: `/tmp/shots/mobile_menu.png` });
    await page.click('#mobile-nav a[href="/faqs"]');
    await page.waitForURL("**/faqs");
  }
  // form test (desktop)
  if (name === "desktop") {
    await page.goto(base + "/contact", { waitUntil: "networkidle" });
    await page.click('button[type="submit"]');
    await page.waitForTimeout(300);
    const errCount = await page.locator('p[id^="err-"]').count();
    if (errCount < 4) errors.push(`form: expected client validation errors, got ${errCount}`);
    await page.fill("#name", "Test Nurse"); await page.fill("#business", "Test Spa");
    await page.fill("#email", "test@example.com"); await page.fill("#phone", "602-555-0100");
    await page.selectOption("#state", "Arizona"); await page.fill("#title", "RN");
    await page.check("#svc-1"); await page.fill("#message", "Testing the form.");
    await page.click('button[type="submit"]');
    await page.waitForSelector('[role="status"]', { timeout: 8000 }).catch(() => errors.push("form: no success state"));
    await page.screenshot({ path: `/tmp/shots/desktop_form_success.png` });
  }
  await ctx.close();
}
await browser.close();
console.log(errors.length ? "ISSUES:\n" + errors.join("\n") : "No console errors, no overflow, form OK.");
