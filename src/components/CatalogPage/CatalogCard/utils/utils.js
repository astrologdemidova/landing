
export const getPaylink = (order_id, customer_phone, customer_email, products, paid_content) => {

  let link = `https://demidova.payform.ru/?order_id=${order_id}&customer_phone=${customer_phone}&customer_email=${customer_email}&products[0][price]=${products[0].price.split(' ').join('')}&products[0][quantity]=1&products[0][name]=Обучающие материалы: ${products[0].name}&discount_value=49&customer_extra=Полная оплата курса&paid_content=${paid_content}&urlSuccess=https://shop.astrologdemidova.ru/fortuna`;

  // let response = customer_phone && customer_email ? await fetch(link) : null;
  // let shotLink;

  // if (response.ok) {
  //   shotLink = await response.text();
  //   console.log('###', shotLink);
  // } else {
  //   console.log("Ошибка HTTP: " + response.status);
  // }


  return link;
}
