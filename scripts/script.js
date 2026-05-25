const button = document.getElementById('showSummary');
const aside = document.getElementById('summaryCard');
const overlay = document.querySelector('.summary-overlay');

const burgerIcon = document.querySelector('.hamburger-menu');
const closeBtn = document.querySelector('.close');
const mobileNav = document.querySelector('.mobile-nav');

const skillCards = document.querySelectorAll('.skill-card');
const years = document.querySelectorAll('.skill-experience');
const recentlyUsed = document.querySelectorAll('.skill-recently-used');

const whatAmIWorkingOnBtn = document.getElementById('whatAmIWorkingOnBtn');
const latestProjectPanel = document.querySelector('.latest-project-container');
const latestProjectOverlay = document.querySelector('.latest-project-overlay');
const latestProjectCloseBtn = document.querySelector('.close-btn');

button.addEventListener('click', () => {
  aside.classList.toggle('showHideAside');
  if (aside.classList.contains('showHideAside')) {
    overlay.classList.add('summary-overlay-show');
  } else {
    overlay.classList.remove('summary-overlay-show');
  }
});

overlay.addEventListener('click', () => {
  aside.classList.toggle('showHideAside');
  overlay.classList.remove('summary-overlay-show');
});

function toggleHamburgerMenu() {
  const hamburgerMenu = document.getElementsByClassName('hamburger-menu');

  hamburgerMenu.classList.toggle('');
}

for (let i = 0; i < skillCards.length; i++) {
  const card = skillCards[i];
  card.addEventListener('mouseover', () => {
    years[i].style.display = 'block';
    recentlyUsed[i].style.display = 'block';
  });

  card.addEventListener('mouseout', () => {
    years[i].style.display = 'none';
    recentlyUsed[i].style.display = 'none';
  });
}

const navItems = document.querySelectorAll('.domain-item');
const domainTabs = document.querySelectorAll('.domain-item-details');

for (let i = 0; i < navItems.length; i++) {
  const tab = domainTabs[i];
  tab.classList.remove('showDetail');
  navItems[i].addEventListener('mouseover', () => {
    domainTabs.forEach((item) => item.classList.remove('showDetail'));
    tab.classList.add('showDetail');
  });
}

function hideMobileNav() {
  mobileNav.classList.remove('showMobileNav');
}

burgerIcon.addEventListener('click', () => {
  mobileNav.classList.add('showMobileNav');
});

closeBtn.addEventListener('click', hideMobileNav);

function handleOverlayAndLatestProject() {
  latestProjectPanel.classList.toggle('show-latest-project-container');
  latestProjectOverlay.classList.toggle('latest-project-overlay-show');
}

whatAmIWorkingOnBtn.addEventListener('click', handleOverlayAndLatestProject);

latestProjectOverlay.addEventListener('click', handleOverlayAndLatestProject);
latestProjectCloseBtn.addEventListener('click', handleOverlayAndLatestProject);
