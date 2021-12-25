// FOLLOWING CODES ARE MOCK SERVER IMPLEMENTATION
// YOU NEED TO BUILD YOUR OWN SERVER
// IF YOU NEED HELP ABOUT SERVER SIDE IMPLEMENTATION
// CONTACT US AT support@ui-lib.com
import productDatabase from 'data/product-database'
import Mock from '../mock'

const section4Data = productDatabase.slice(179, 188)
Mock.onGet('/api/grocery-section4/products').reply(async () => {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 1000))
    return [200, section4Data]
  } catch (err) {
    console.error(err)
    return [500, { message: 'Internal server error' }]
  }
})

const section5Data = productDatabase.slice(229, 241)
Mock.onGet('/api/grocery-section5/products').reply(() => {
  try {
    return [200, section5Data]
  } catch (err) {
    console.error(err)
    return [500, { message: 'Internal server error' }]
  }
})

const section7Data = productDatabase.slice(190, 199)
Mock.onGet('/api/grocery-section7/products').reply(() => {
  try {
    return [200, section7Data]
  } catch (err) {
    console.error(err)
    return [500, { message: 'Internal server error' }]
  }
})

const section8Data = productDatabase.slice(197, 206)
Mock.onGet('/api/grocery-section8/products').reply(() => {
  try {
    return [200, section8Data]
  } catch (err) {
    console.error(err)
    return [500, { message: 'Internal server error' }]
  }
})
