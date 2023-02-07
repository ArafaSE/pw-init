class BasePage{
    constructor(page){
        this.page = page;
        this.BaseUrl = 'https://automationexercise.com'
    }
    async navigate(path){
        await this.page.goto(`${this.BaseUrl}/${path}`)
    }

    async getElementByText(text){
        return await this.page.getByText(text);
    }
}

export default BasePage