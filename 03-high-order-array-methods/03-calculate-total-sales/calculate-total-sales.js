function calculateTotalSalesWithTax(products, taxRate) {
  const totalSales = products.reduce((sum, product) => sum + product.price * product.quantity, 0)
  const taxAmount = (totalSales * taxRate) / 100

  return totalSales + taxAmount
}

module.exports = calculateTotalSalesWithTax;
