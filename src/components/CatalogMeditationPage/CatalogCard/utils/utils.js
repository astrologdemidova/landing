
export const getPaylink = (order_id, customer_phone, customer_email, products, paid_content) => {

  let link = `https://demidova.payform.ru/?order_id=${order_id}&customer_phone=${customer_phone}&customer_email=${customer_email}&products[0][price]=${products[0].price.split(' ').join('')}&products[0][quantity]=1&products[0][name]=Обучающие материалы: ${products[0].name}&customer_extra=Полная оплата курса&paid_content=${paid_content}&urlSuccess=https://meditations.astrologdemidova.ru&do=pay`;

  return link;
}
