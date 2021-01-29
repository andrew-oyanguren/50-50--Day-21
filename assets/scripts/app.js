// ===== Variables ===== //

const header = document.getElementById('header');
const title = document.getElementById('title');
const excerpt = document.getElementById('excerpt');
const profile_img = document.getElementById('profile_img');
const profileName = document.getElementById('name');
const profileDate = document.getElementById('date');

const animated_bgs = document.querySelectorAll('.animated-bg');
const animated_bg_texts = document.querySelectorAll('.animated-bg-text');


// ===== Event Listeners ===== //

setTimeout(getData, 2500)

// ===== Functions ===== //

function getData() {
  header.innerHTML = ' <img src="https://images.unsplash.com/photo-1587614382346-4ec70e388b28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8bGFwdG9wfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=60" alt="Laptop" />';
  title.innerHTML = 'Lorem ipsum dolor sit amet';
  excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro, ullam?';
  profile_img.innerHTML = ' <img src="https://randomuser.me/api/portraits/men/45.jpg" alt="#">';
  profileName.innerText = 'John Doe';
  profileDate.innerText = 'Oct, 08, 2020';

  animated_bgs.forEach(bg => bg.classList.remove('animated-bg'));
  animated_bg_texts.forEach(bg => bg.classList.remove('animated-bg-texts'));
}