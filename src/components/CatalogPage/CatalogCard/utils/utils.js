export const getPaylink = (order_id, customer_phone, customer_email, products, paid_content) => {
  let orderId = `order_id=${order_id}&`;
  let customerPhone = `customer_phone=${customer_phone}&`;
  let customerEmail = `customer_email=${customer_email}&`;
  let productsArr = `products[0][price]=${products[0].price.split(' ').join('')}&products[0][quantity]=1&products[0][name]=Обучающие материалы: ${products[0].name}&`;
  let customerExtra = `customer_extra=Полная оплата курса&`;
  let paidContent = `paid_content=${paid_content}&`;
  let urlSuccess = `urlSuccess=https://shop.astrologdemidova.ru/fortuna?cust_email=${customer_email}&cust_phone=${customer_phone}&`;
  let dO = `do=pay`

  let link = 'https://demidova.payform.ru/?' +
    orderId +
    customerPhone +
    customerEmail +
    productsArr +
    customerExtra +
    paidContent +
    urlSuccess +
    dO;

  return link;
}
