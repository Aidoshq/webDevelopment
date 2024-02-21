export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    rating: number;
    url: string;
    imgURL: string;
    link: string;
  };
  
  export const products = [
    {
      id: 1,
      name: "Apple iPhone 11",
      price: 304880,
      description: "Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/2"
    },
    {
      id: 2,
      name: "Apple Watch Series 8 45mm",
      price: 237618,
      description: "Смарт-часы Apple Watch Series 8 45 мм Aluminum черный",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-watch-series-8-45-mm-aluminum-chernyi-106362847/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0b/h04/63158967959582/apple-watch-series-8-41-mm-cernyj-106362847-1.jpg",
      link: "https://t.me/angularwebdev2023/3"
    },
    {
      id: 3,
      name: "Samsung Galaxy S22",
      price: 348770,
      description: "Samsung Galaxy S22 просто великолепен.  Утонченные лицевые панели гармонично сочетаются с изысканным корпусом. Роскошный вид дополняет лаконичная система линейных камер",
      rating: 5,
      url: "https://kaspi.kz/shop/p/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h21/h7a/62349965197342/samsung-galaxy-s22-8-gb-128-gb-chernyi-103662719-1.jpg",
      link: "https://t.me/angularwebdev2023/6"
    },
    {
      id: 4,
      name: "Xiaomi Mi Band 7",
      price: 21898,
      description: "«Умный» трекер ждали как пользователи прошлых версий девайса, так и те, кто впервые решился приобрести себе столь технологичное устройство.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/xiaomi-mi-band-7-chernyi-105075100/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h76/h2e/51135083642910/xiaomi-mi-band-7-chernyi-105075100-1.jpg",
      link: "https://t.me/angularwebdev2023/10"
    },
    {
      id: 5,
      name: "Apple iPhone 11",
      price: 302300,
      description: "Функциональный и стильный смартфон Apple iPhone 11 в металлическом корпусе способен обеспечить не только повседневное общение и развлечения, но и продуктивную работу.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-iphone-11-128gb-slim-box-chernyi-100692388/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h0a/h2e/31489167622174/apple-iphone-11-128gb-slim-box-cernyj-100692388-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/8"
    },
    {
      id: 6,
      name: "Samsung Galaxy Watch 4",
      price: 95977,
      description: "Умные часы Samsung - это не просто гаджет, а ваш верный спутник на пути к достижению задач и самосовершенствованию.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/samsung-galaxy-watch-4-classic-sm-r890nzkacis-46-mm-chernyi-chernyi-102170938/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h31/h9b/62047597559838/samsung-galaxy-watch-4-classic-sm-r890-cernyj-102170938-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/9"
    },
    {
      id: 7,
      name: "Amazon Kindle Paperwhite 2021",
      price: 161000,
      description: "Электронная книга Amazon Kindle Paperwhite 2021.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/amazon-kindle-paperwhite-2021-chernyi-102838488/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h6a/ha1/47093254455326/amazon-kindle-paper-2021-chernyi-102838488-1.jpg",
      link: "https://t.me/angularwebdev2023/11"
    },
    {
      id: 8,
      name: "Apple AirPods Max",
      price: 365990,
      description: "Bluetooth гарнитура Apple AirPods Max сможет полностью изменить ваше представление о полноразмерных наушниках. Данная модель разработана с применением первоклассных материалов и передовых технологий.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/apple-airpods-max-sinii-101180956/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h84/h0d/46659800498206/apple-airpods-max-sinij-101180956-1-Container.jpg",
      link: "https://t.me/angularwebdev2023/12"
    },
    {
      id: 9,
      name: "Яндекс Станция Лайт",
      price: 37464,
      description: "Яндекс.Станция Лайт — это яркая и компактная умная колонка, которая управляется голосом и сенсорными кнопками. Она здорово украсит интерьер и сможет развлечь ребенка: матовый корпус приятно держать в руках, а расцветка порадует глаз.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/jandeks-stantsija-lait-birjuzovyi-101808994/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h36/h98/49342279876638/yandeks-stantsiya-lait-biryuzovyi-101808994-1.jpg",
      link: "https://t.me/angularwebdev2023/13"
    },
    {
      id: 10,
      name: "Kieslect K11",
      price: 24980,
      description: "Умные часы Kieslect K11 оснащены постоянно включенным полноэкранным сенсорным дисплеем с разрешением 1.39 Ultra Amoled.",
      rating: 5,
      url: "https://kaspi.kz/shop/p/kieslect-k11-chernyi-104947291/?c=750000000#!/item",
      imgURL: "https://resources.cdn-kaspi.kz/shop/medias/sys_master/images/images/h5c/h60/51661437468702/xiaomi-kieslect-k11-cernyj-104947291-1.jpg",
      link: "https://t.me/angularwebdev2023/14"
    },
  ];
  
  
  /*
  Copyright Google LLC. All Rights Reserved.
  Use of this source code is governed by an MIT-style license that
  can be found in the LICENSE file at https://angular.io/license
  */