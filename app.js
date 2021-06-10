const ui = new UI;



const features = document.querySelector(".featuresField");
const popUp = document.querySelector(".features__popup")
const text = document.querySelector("#text")
const submit = document.querySelector("#submit")
const loading = document.querySelector(".loading")
const wrapper = document.querySelector(".wrapper")
const mainy = document.querySelector(".mainy")




const gitApi = "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"


submit.addEventListener("click", showProfileDetails)






function showProfileDetails(e){
 e.preventDefault()

 var textInput = text.value;
 
 if(textInput !== ""){
   loading.style.display = "block"

   fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', authorization: `Bearer ${gitApi}` },
    body: JSON.stringify({ query: `
    query {
        user(login:"${textInput}") {
          id
          url
          name
          login
          bio
          avatarUrl
          location
          company
          twitterUsername
          websiteUrl
  followers {
    totalCount
  }
  following{
    totalCount
  }
            repositories(first: 20) {
                totalCount
                nodes {
                    name
                    description
                    stargazerCount
                    forkCount
                    licenseInfo {
                        id
                        name
                    }
                    updatedAt
                    primaryLanguage {
                        id
                        color
                        name
                    }
                    isPrivate
                    isFork
                    owner {
                        id
                        resourcePath
                    }
                }
            }
        }
    }`  
    }),
})
.then(res => res.json())
.then(data => {
    ui.showProfile(data.data.user)
    ui.showRepo(data.data.user)
    console.log(data.data.user)
   return data
})
.then(() => {
    wrapper.style.display="block"
    mainy.style.display="none"
    loading.style.display = "none"
    textInput = ""
})
.catch(err => {
  alert(err.message)
  loading.style.display = "none"
  textInput = ""

})



 }else{
   alert("Please, you need to type in a username")
 }
}


window.addEventListener("scroll", stickyEffect)
wrapper.addEventListener("click", goBackToHomePage)


function stickyEffect(){

  if(window.scrollY >= 16){
    wrapper.children[1].children[0].classList.add('fixed');
    wrapper.children[1].children[0].children[0].style.visibility = "visible";
    // search.classList.add('remove')

  }else{

    wrapper.children[1].children[0].classList.remove('fixed');
    wrapper.children[1].children[0].children[0].style.visibility  = "hidden"
    // search.classList.remove('remove')

  }
}

function goBackToHomePage(e){
if(e.target.parentElement.classList.contains("header__right--1")){
  wrapper.style.display="none"
  // mainy.style.display="block"
  window.location.reload();
}


}


