import { Typography } from '@mui/material'
import Navbar from '../../components/Navbar'
import ProductList from '../../components/Products/ProductList'
import ShoppingCart from '../../components/Cart/ShoppingCart'
import Footer from '../../components/Footer'

function Home() {
  return (
    <>
      <Navbar/>
      <Typography 
        variant='h2' 
        sx={{textAlign: 'center', margin: '50px 0'}}
      >
        New Arrivals
      </Typography>
      <ProductList />
      <Footer />
    </>
  )
}

export default Home