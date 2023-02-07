import BasePage from "./Base.page";

class HomePage extends BasePage{
  constructor(page){
    super(page);
    // locators
    this.getDeleteAccountBtn = page.getByRole('link', {name: ' Delete Account'})
  }
  // methoods
  async navigate(){
    await super.navigate('/')
  }
}

export default HomePage