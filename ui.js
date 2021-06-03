class UI {
  constructor(){
    this.profile = document.querySelector('.wrapper');
  }

  showProfile(data){
    this.profile.innerHTML =
    `
    <header>
    <div class="header__left">
    <div class="header__left--logo">
    <img src="/img/logo-github.svg" alt="logo" />
    </div>
    <div class="header__left--input">
    <input type="text" placeholder="Search or jump to..." />
    <div id="input__empty">/</div>
    </div>
    <ul class="header__left--list">
    <li class="header__left--listitem">Pull requests</li>
    <li class="header__left--listitem">Issues</li>
    <li class="header__left--listitem">Marketplace</li>
    <li class="header__left--listitem">Explore</li>
    </ul>
  </div>
  <div class="header__right">
    <div class="header__right--1">
      <ion-icon class="icon notifications" name="notifications-outline" title="notifications"></ion-icon>
    </div>
    <div class="header__right--2">
      <ion-icon class="icon add" name="add-outline" title="add"></ion-icon>
      <ion-icon class="icon caretdown" name="caret-down-outline" title="caretdown"></ion-icon>
    </div>
    <div class="header__right--3">
      <img src=${data.avatarUrl} alt="profile-image">
      <ion-icon class="icon caretdown" name="caret-down-outline" title="caretdown"></ion-icon>
    </div>
  </div>
  </header>
<!-- FEATURES SECTION -->
  <section class="section">
     <div class="featuresField">
     <div class="features__popup">
       <img src=${data.avatarUrl} alt="kosh"/>
       <div class="features__popup--content">
         <p>${data.login}</p>
         <button type="submit">Follow</button>
       </div>
     </div>

    <div class="features">
     <div class="features__items">
      <img src="/img/book-outline.svg" class="icon book" alt="overview">
      <a href="#">Overview</a>
     </div>
     <div class="features__items repo">
      <img src="img/repo.svg" alt="repo">
      <a href="#">Repositories <span class="features__items--span">45</span></a>
    </div>
    <div class="features__items">
      <img src="/img/browsers-outline.svg" class="icon browser" alt="projects">
      <a href="#">Projects</a>
    </div>
    <div class="features__items">
      <img src="/img/cube-outline.svg" class="icon browser" alt="packages">
      <a href="#">Packages</a>
    </div>
    </div>
  </div>
  </section>
  
  <!-- MAIN SECTION -->
  <section>
  <div class="main">
   <div class="main__left">
   <div class="main__left--img">
   <img src=${data.avatarUrl} alt="kosh" />
   <span class="smiley">
    <img src="/img/Smiley-512.png" alt="smiley" />
   </span>
   </div>
   <p class="main__left--paragraph">${data.name}<span>${data.login}</span></p>
   <a href="#" class="main__left--button">Follow</a>
   <p class="main__left--bio">${data.bio}</p>

   <div class="main__left--ff">
     <div class="main__left--ff-left">
      <img src="/img/people-outline.svg" class="icon people" alt="follower|following">
      <p><strong>${data.followers.totalCount}</strong> followers . <strong>${data.following.totalCount}</strong> following .</p>
     </div>
     <div class="main__left--ff-right">
      <img src="/img/star-outline.svg" class="icon star" alt="star">
     </div>
   </div>

   <ul class="main__left--list">
     <li class="main__left--listitem">
      <img src="/img/business-outline.svg" class="icon business" alt="business">
      <p>${data.company}</p>
     </li>
     <li class="main__left--listitem">
      <img src="/img/location-outline.svg" class="icon location" alt="location">
      <p>${data.location}</p>
     </li>
     <li class="main__left--listitem">
      <img src="/img/link-outline.svg" class="icon link" alt="link">
      <p><a href=${data.websiteUrl}>${data.websiteUrl}</a></p>
     </li>
     <li class="main__left--listitem">
      <img src="/img/logo-twitter.svg" class="icon twitter" alt="twitter">
      <p>${data.twitterUsername}</p>
     </li>
   </ul>
   
   </div>

   <div class="main__right">
    <div class="main__right--input">
      <input type="text" placeholder="Find a repository" disabled/>
      <div class="main__right--select">
        <select name="Type" disabled="disabled">
          <option value="Type">Type</option>
        </select>
        <select name="Type" disabled="disabled">
          <option value="Type">Language</option>
        </select>
        <select name="Type" disabled="disabled">
          <option value="Type">Sort</option>
        </select>
      </div> 
    </div>
    <div class="main__right--repolists">
     
    <div 

   </div>
  </div>
  </section>


  <!-- FOOTER -->
  <footer class="footer">
    <ul class="footer__lists">
      <li class="footer__listitem">&copy;2021 Github,Inc</li>
      <li class="footer__listitem"><a href="#">Terms</a></li>
      <li class="footer__listitem"><a href="#">Privacy</a></li>
      <li class="footer__listitem"><a href="#">Security</a></li>
      <li class="footer__listitem"><a href="#">Status</a></li>
      <li class="footer__listitem"><a href="#">Docs</a></li>
      
    </ul>

    <img src="/img/github.png" alt="logo" />
    
    <ul class="footer__lists">
      <li class="footer__listitem"><a href="#">Contact Github</a></li>
      <li class="footer__listitem"><a href="#">Pricing</a></li>
      <li class="footer__listitem"><a href="#">API</a></li>
      <li class="footer__listitem"><a href="#">Training</a></li>
      <li class="footer__listitem"><a href="#">Blog</a></li>
      <li class="footer__listitem"><a href="#">About</a></li>
    </ul>
  </footer>
    
    
    `
  }

  showRepo(repo){
  const repoWrapper =  document.querySelector(".main__right--repolists")

   let output = "";

   repo.repositories.nodes.forEach((repo) => {
     output += `
     <div class="repoCover">
<div class="repoContent">
<h3>${repo.name}</h3>
<p>${repo.description}</p>
<div class="main__right--repoinfos">
  <div class="main__right--repoinfo">
   
   <!-- BEFORE SVG-->

   <svg xmlns="http://www.w3.org/2000/svg" width="512" height="512" viewBox="0 0 512 512"><title>ionicons-v5-e</title><path d="M448,256c0-106-86-192-192-192S64,150,64,256s86,192,192,192S448,362,448,256Z" style="fill:${repo.primaryLanguage.color};stroke:${repo.primaryLanguage.color};stroke-miterlimit:10;stroke-width:32px"/></svg>
   
   <!-- AFTER SVG -->
   <span>${repo.primaryLanguage.name}</span>
  </div>
  <div class="main__right--repoinfo">
   <img src="/img/star-outline.svg" class="icon star" alt="star">
   <span class="exclusive">${repo.stargazerCount}</span>
  </div>
  <div class="main__right--repoinfo">
   <img src="/img/git-network-outline.svg" class="icon fork" alt="fork">
   <span class="exclusive">${repo.forkCount}</span>
  </div>
  <div class="main__right--repoinfo">
    <p>Updated ${repo.updatedAt}</p>
  </div>
</div>
</div>
<div class="repoStar" type="submit">
 <img src="/img/star-outline.svg" class="icon star" alt="star">
 <span>Star</span>
</div>
</div>

     `
   })

repoWrapper.innerHTML = output;
  }
}