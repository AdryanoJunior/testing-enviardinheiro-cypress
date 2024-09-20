import userData from '../fixtures/data-user.json'
import LoginPage from '../pages/loginPage'
import SendMoneyPage from '../pages/sendPage'

const loginPage = new LoginPage() 
const sendPage = new SendMoneyPage()

describe('Send money with sufficient balance', () => {
  
  it('must send money successfully', () => {
    loginPage.acessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    loginPage.accessNewPay()
    sendPage.sendMoney()

    sendPage.checkSuccessAlert()

  })
  
})