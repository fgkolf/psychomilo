const animateHeroImage = () => {
  const heroImage = document.querySelector('.hero-image');
  if (heroImage.classList.contains('white')) {
    heroImage.classList.remove('white');
  } else {
    heroImage.classList.add('white');
  }
};

export default animateHeroImage;
