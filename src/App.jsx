import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import Login from './routes/Login'
import Home from './routes/Home'
import PaymentHistory from './routes/PaymentHistory'
import PersonalSettings from './routes/PersonalSettings'
import PaymentMethodsCreditCard from './routes/PaymentMethodsCreditCard'
import PaymentMethodsBankAccount from './routes/PaymentMethodsBankAccount'
import SecuritySettings from './routes/SecuritySettings'
import Searcher from './routes/Searcher'
import Paying from './routes/Paying'
import ProcessingPayment from './routes/ProcessingPayment'
import Logout from './routes/Logout'
import { UserProvider } from './contexts/UserContext'
import { SearchProvider } from './contexts/SearchContext'

function App() {
  return (
    <UserProvider>
      <SearchProvider>
        <div className='font-RobotoSlab min-h-screen flex flex-col justify-between'>
          <Router>
            <NavBar />
            <Routes>
              <Route path='/' element={<LandingPage />} />
              <Route path='/login' element={<Login />} />
              <Route path='/home' element={<Home />} />
              <Route path='/searcher' element={<Searcher />} />
              <Route path='/paymenthistory' element={<PaymentHistory />} />
              <Route path='/personalsettings' element={<PersonalSettings />} />
              <Route path='/paymentmethods/creditcards' element={<PaymentMethodsCreditCard />} />
              <Route path='/paymentmethods/bankaccounts' element={<PaymentMethodsBankAccount />} />
              <Route path='/securitysettings' element={<SecuritySettings />} />
              <Route path='/paying/personaldata' element={<Paying />} />
              <Route path='/paying/paymentmethod' element={<Paying />} />
              <Route path='/paying/confirmation' element={<Paying />} />
              <Route path='/processingpayment' element={<ProcessingPayment />} />
              <Route path='/logout' element={<Logout />} />
            </Routes>
            <Footer />
          </Router>
        </div>
      </SearchProvider>
    </UserProvider>
  )
}

export default App
