// Loading Animation
window.addEventListener('load', () => {
  const loader = document.querySelector('.loader');
  loader.style.display = 'none';
});

// Particle Background
particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles.js loaded');
});

// Typing Animation
const typingElement = document.querySelector('.typing');
const texts = ["TechNexus", "Innovation", "Future"];
let index = 0;
let charIndex = 0;

const type = () => {
  if (charIndex < texts[index].length) {
    typingElement.textContent += texts[index].charAt(charIndex);
    charIndex++;
    setTimeout(type, 100);
  } else {
    setTimeout(erase, 2000);
  }
};

const erase = () => {
  if (charIndex > 0) {
    typingElement.textContent = texts[index].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(erase, 50);
  } else {
    index = (index + 1) % texts.length;
    setTimeout(type, 500);
  }
};

type();

// Sticky Navbar
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  header.classList.toggle('scrolled', window.scrollY > 50);
});

// Hamburger Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Dark/Light Mode Toggle
const themeToggle = document.querySelector('.theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
  body.classList.toggle('light-theme');
  const isLightTheme = body.classList.contains('light-theme');
  localStorage.setItem('theme', isLightTheme ? 'light' : 'dark');
});

// Load Saved Theme
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
  body.classList.add('light-theme');
}

// Contact Form Validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();
  alert('Thank you for your message! We will get back to you soon.');
  contactForm.reset();
});

// Blog Post Page
const articleCards = document.querySelectorAll('.article-card');
const blogPostSection = document.querySelector('.blog-post');
const postTitle = document.querySelector('.post-title');
const postImage = document.querySelector('.post-image');
const postContent = document.querySelector('.post-content');
const backButton = document.querySelector('.back-button');

articleCards.forEach((card) => {
  card.addEventListener('click', () => {
    blogPostSection.classList.remove('hidden');
    document.querySelector('.articles').classList.add('hidden');
    postTitle.textContent = card.querySelector('h3').textContent;
    postImage.src = card.querySelector('img').src;
    postContent.textContent = card.querySelector('p').textContent;
  });
});

backButton.addEventListener('click', () => {
  blogPostSection.classList.add('hidden');
  document.querySelector('.articles').classList.remove('hidden');
});

// Comments Section
const commentForm = document.getElementById('comment-form');
const commentsContainer = document.querySelector('.comments');

commentForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const commentText = document.getElementById('comment').value;
  if (commentText.trim() !== '') {
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
    commentElement.textContent = commentText;
    commentsContainer.appendChild(commentElement);
    document.getElementById('comment').value = '';
  }
});

// Search Bar
const searchInput = document.getElementById('search');
const articleSlider = document.querySelector('.article-slider');

searchInput.addEventListener('input', () => {
  const searchTerm = searchInput.value.toLowerCase();
  const articles = document.querySelectorAll('.article-card');

  articles.forEach((article) => {
    const title = article.querySelector('h3').textContent.toLowerCase();
    if (title.includes(searchTerm)) {
      article.style.display = 'block';
    } else {
      article.style.display = 'none';
    }
  });
});