import userData from '../fixtures/data-user.json'
import LoginPage from '../pages/loginPage';
import SendFailPage from '../pages/sendfailPage';

const loginPage = new LoginPage()
const sendFailPage = new SendFailPage

describe('Send money with insufficient balance', () => {
    it('It should display an error message when sending money without sufficient balance', () => {
        loginPage.acessLoginPage()
        loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

        loginPage.accessNewPay()
        sendFailPage.sendFaiLMoney()
        
    });
});