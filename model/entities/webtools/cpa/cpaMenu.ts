export const cpaMenu =  [
  { link: 'cpaAreWork', name: 'Вертикали' },
  { link: 'cpaTopOffers', name: 'Топ-офферы' },
  { link: 'cpaHowStart', name: 'Как начать?' },
  { link: 'cpaContacts', name: 'Контакты' }
]

export const scrollToSectionHandler = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    const correction = 70; // Измените это значение на нужное вам
    const topPosition = element.getBoundingClientRect().top + window.scrollY - correction;

    // Прокрутите страницу к якорю
    window.scrollTo({
      top: topPosition,
      behavior: "smooth", // Добавьте этот параметр для плавной прокрутки
    });
  }
}

export default cpaMenu
