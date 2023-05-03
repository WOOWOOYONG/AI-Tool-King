const selectBtn = document.querySelector('.app_select');
const appSelectOptions = document.querySelector('.app_select_options');
const sortBtn = document.querySelector('.app_select_sort_wrapper');
const appSortOptions = document.querySelector('.sort_options');

const openMobileMenuBtn = document.querySelector('.mobile_menu_btn');
const closeMobileMenuBtn = document.querySelector('.mobile_menu_close_btn');
const footerBottom = document.querySelector('.footer_bottom');
const backToTopBtn = document.querySelector('.back_link');
const mobileMenuList = document.querySelector('.navbar_list');

const questionItems = document.querySelectorAll('.question_item');

// dropdown options
const dropdownActive = (list) => {
  list.classList.toggle('hide_dropdown');
};

selectBtn.addEventListener('click', () => {
  dropdownActive(appSelectOptions);
});

sortBtn.addEventListener('click', () => {
  dropdownActive(appSortOptions);
});

// mobile menu

const toggleMobileMenu = () => {
  openMobileMenuBtn.classList.toggle('hide');
  closeMobileMenuBtn.classList.toggle('hide');
  footerBottom.classList.toggle('mobile_footer_bottom');
  backToTopBtn.classList.toggle('hide');
  mobileMenuList.classList.toggle('show');
  document.body.classList.toggle('stay');
};

openMobileMenuBtn.addEventListener('click', toggleMobileMenu);

closeMobileMenuBtn.addEventListener('click', toggleMobileMenu);

// FAQ
questionItems.forEach((q) => {
  q.addEventListener('click', () => {
    q.classList.toggle('question_item_active');
  });
});

//Swiper
function initSwiper() {
  const swiper = new Swiper('#comment-swiper', {
    slidesPerView: 1,

    breakpoints: {
      1043: {
        slidesPerView: 3,
      },
      768: {
        slidesPerView: 2,
      },

      0: {
        slidesPerView: 1,
      },
    },
    spaceBetween: 24,
    pagination: {
      /* 我想將分頁圓點綁在哪個 class */
      el: '.swiper-pagination',
      /* 將輪播設定為可以點擊分頁圓點來切換圖片 */
      clickable: true,
      dynamicBullets: true,
    },
  });
}

initSwiper();
