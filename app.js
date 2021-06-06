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




