const { sum, pqformel } = require("./calc");
const puppeteer = require("puppeteer");
test("beräkna summan av 2 och 3 till 5", () => {
expect(sum(2, 3)).toBe(5);
} );

test("pq test 1", () =>{
    expect(pqformel(2, -3)).toBe("svar 1 = 1 svar 2 = -3")
})

test("pq test 1", () =>{
    expect(pqformel(-4, -5)).toBe("svar 1 = 5 svar 2 = -1")
})

test("pq test 1", () =>{
    expect(pqformel(3, 2)).toBe("svar 1 = -1 svar 2 = -2")
})

test("pq test 1", () =>{
    expect(pqformel(10, 16)).toBe("svar 1 = -2 svar 2 = -8")
})

test("pq test 1", () =>{
    expect(pqformel(6, 8)).toBe("svar 1 = -2 svar 2 = -4")
})

test("Vad som ska göras", async () => {
    const browser = await puppeteer.launch({
      headless: false,
      slowMo: 70,
      args: ["--window-size=1920, 1080"]
    });
  
    const page = await browser.newPage();
    await page.goto(
    "file:///C:/Users/Philipalexander.ols/Desktop/Webbutveckling/mattesidan/index.html"
    );
  // Här skriver du vad som ska göras på sidan
  await page.click("#p");
  await page.type("#p", "6");
  await page.click("#q");
  await page.type("#q", "8");
  await page.click("#submit");
  const final_result = await page.$eval("#pqformelsvar1", el => el.textContent);
  await expect(final_result). toBe("-2");
  });
  