import NavBar from './components/NavBar'
import Footer from './components/Footer'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LandingPage from './routes/LandingPage'
import SelectSede from './routes/SelectSede'
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



function App() {
  return (
    <div className='font-RobotoSlab min-h-screen flex flex-col justify-between'>
      <Router>
        <NavBar />
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/sede' element={<SelectSede />} />
          <Route path='/login' element={<Login />} />
          <Route path='/home' element={<Home />} />
          <Route path='/paymenthistory' element={<PaymentHistory />} />
          <Route path='/personalsettings' element={<PersonalSettings />} />
          <Route path='/paymentmethods/creditcards' element={<PaymentMethodsCreditCard />} />
          <Route path='/paymentmethods/bankaccounts' element={<PaymentMethodsBankAccount />} />
          <Route path='/securitysettings' element={<SecuritySettings />} />
          <Route path='/searcher' element={<Searcher />} />
          <Route path='/paying/personaldata' element={<Paying />} />
          <Route path='/paying/paymentmethod' element={<Paying />} />
          <Route path='/paying/confirmation' element={<Paying />} />
          <Route path='/processingpayment' element={<ProcessingPayment />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App
