import { nanoid } from 'nanoid';
import { contentTypeMeditation, contentTypeRitual, contentTypeConsultation } from '../../CatalogWrapper';

const checkWin = nanoid();
export const getPaylink = (order_id, customer_phone, customer_email, products, paid_content) => {
  let orderId = `order_id=${order_id}&`;
  let customerPhone = `customer_phone=${customer_phone}&`;
  let customerEmail = `customer_email=${customer_email}&`;
  let productsArr = `products[0][price]=${products[0].price.split(' ').join('')}&products[0][quantity]=1&products[0][name]=Обучающие материалы: ${products[0].name}&`;
  let customerExtra = `customer_extra=Полная оплата курса&`;
  let paidContent = `paid_content=${paid_content}&`;
  let urlSuccess = `urlSuccess=https://shop.astrologdemidova.ru/fortuna?che=${checkWin}&cust_email=${customer_email}&cust_phone=${customer_phone}&`;
  let urlSuccessOff = `urlSuccess=https://shop.astrologdemidova.ru/&`;
  let dO = `do=pay`

  let link = 'https://demidova.payform.ru/?' +
    orderId +
    customerPhone +
    customerEmail +
    productsArr +
    customerExtra +
    paidContent +
    urlSuccessOff +
    dO;
  return link;
}

/* рабочий вариант
import { nanoid } from 'nanoid';

export const getPaylink = (order_id, customer_phone, customer_email, products, paid_content) => {
  let checkWin = nanoid();
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
*/

export const getReviewUrl = (entity) => {
  switch (entity) {
      case contentTypeMeditation:
          return '/reviews/meditations';
      case contentTypeRitual:
          return '/reviews/rituals';
      case contentTypeConsultation:
          return '/reviews/consultations';
      default:
          return '/shop';
  }
};