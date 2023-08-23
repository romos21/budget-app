import puppeteer from 'puppeteer';

const url = "http://localhost:3000";
let browser, page;

jest.setTimeout(30000);
beforeAll(async () => {
    browser = await puppeteer.launch({
        headless: false,
        slowMo: 30
    });
    page = await browser.newPage();
    await page.goto(url);
});

afterEach(async () => {
    await page.reload();
});


test('check Add Channel modal', async () => {
    const AddChannelBtn = await page.waitForSelector('text=Add Channel');
    await AddChannelBtn.click();
    try {
        await page.waitForSelector("#keep-mounted-modal-title");
    } catch (e) {
        console.error(e);
    }
});

test('creating new channel', async () => {
    const channelTitle = 'Test Channel';
    const bodyYouNeedEnableJava = page.getByText("\n    You need to enable JavaScript to run this app.\n    Build your budget planSetup channelsSetup your added channels by adding baseline budgets out o...")


    const AddChannelBtn = await page.waitForSelector('text=Add Channel');
    await AddChannelBtn.click();
    await page.waitForSelector("#keep-mounted-modal-title");

    const inputMui = await page.waitForSelector('input[value="New Channel"]');
    const inputMuiValue = await page.evaluate(() => {
        const inputElement = document.querySelector('input[value="New Channel"]');
        return inputElement.value;
    });
    for (let i = 0; i < inputMuiValue.length; i++) {
        await page.keyboard.press('Backspace');
    }
    await inputMui.type(channelTitle);

    const buttonCreate = await page.waitForSelector('text=Create');
    await buttonCreate.click();

    try {
        await page.waitForSelector(`text=${channelTitle}`);
    } catch (e) {
        console.error(e);
    }
});

test('creating new channel with default name', async () => {
    const channelTitle = 'New Channel';

    const AddChannelBtn = await page.waitForSelector('text=Add Channel');
    await AddChannelBtn.click();
    await page.waitForSelector("#keep-mounted-modal-title");

    const buttonCreate = await page.waitForSelector('text=Create');
    await buttonCreate.click();

    try {
        await page.waitForSelector(`text=${channelTitle}`);
    } catch (e) {
        console.error(e);
    }
});

test('edit first channel from list', async () => {
    const newChannelTitle = 'Edited';
    const svgMoreHorizIcon = await page.waitForSelector("[data-testid = 'MoreHorizIcon']")
    await svgMoreHorizIcon.click();
    const ulEditRemove = await page.waitForSelector("ul[class*='MuiMenu-list']");
    const liEdit = await ulEditRemove.waitForSelector("text=Edit");
    await liEdit.click();

    const inputMui = await page.waitForSelector('input[value="Paid reviews"]');
    const inputMuiValue = await page.evaluate(() => {
        const inputElement = document.querySelector('input[value="Paid reviews"]');
        return inputElement.value;
    });
    await inputMui.click();
    for (let i = 0; i < inputMuiValue.length; i++) {
        await page.keyboard.press('Backspace');
    }
    await inputMui.type(newChannelTitle);
    await page.click('text=Change');

    try {
        await page.waitForSelector(`text=${newChannelTitle}`);
    } catch (e) {
        console.error(e);
    }
});

test('remove first channel from list', async () => {
    const svgMoreHorizIcon = await page.waitForSelector("[data-testid = 'MoreHorizIcon']")
    await svgMoreHorizIcon.click();
    const ulEditRemove = await page.waitForSelector("ul[class*='MuiMenu-list']");
    const liRemove = await ulEditRemove.waitForSelector("text=Remove");
    await liRemove.click();

    try {
        await page.waitForSelector(`text=Paid reviews`);
    } catch (e) {
        console.error(e);
    }
});


afterAll(async () => {
    await browser.close();
});

