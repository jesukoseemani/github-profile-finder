const features = document.querySelector(".featuresField");
const popUp = document.querySelector(".features__popup")
const search = document.querySelector(".search")
const text = document.querySelector("#text")
const submit = document.querySelector("#submit")
const loading = document.querySelector(".loading")
const wrapper = document.querySelector(".wrapper")
const mainy = document.querySelector(".mainy")

const featuresTop = features.offsetTop;

const gitApi = "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"


// window.addEventListener("scroll", stickyEffect)
submit.addEventListener("click", showProfileDetails)


function showProfileDetails(e){
 e.preventDefault()

 var textInput = text.value;

 console.log(textInput)
 
 if(textInput !== ""){
   loading.style.display = "block"

   fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', authorization: `Bearer ${gitApi}` },
    body: JSON.stringify({ query: `
    query {
        user(login:${textInput}) {
          id
          url
          name
          login
          bio
          avatarUrl
          location
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
.then(data => console.log(data))
.then(() => {
    wrapper.style.display="auto"
    mainy.style.display="none"
    loading.style.display = "none"
    textInput = ""
})
.catch(err => alert(err.message))



 }else{
   alert("Please, you need to type in a username")
 }
}

// function stickyEffect(){
 
//   if(window.scrollY >= featuresTop){
//     features.classList.add('fixed');
//     popUp.style.visibility = "visible"
//     search.classList.add('remove')
//   }else{
//     features.classList.remove('fixed');
//     popUp.style.visibility = "hidden"
//     search.classList.remove('remove')

//   }
// }




