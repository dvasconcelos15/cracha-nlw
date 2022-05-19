const LinksSocialMedia = {
  github: 'dvasconcelos15',
  youtube: 'dvasconcelos15',
  facebook: 'dvasconcelos15',
  instagram: 'dvasconcelos15',
  twitter: 'dvasconcelos15'
}

function changeSocialMediaLinks() {
  for (let li of socialLinks.children) {
    const social = li.getAttribute('class')

    li.children[0].href = `https://${social}.com/${LinksSocialMedia[social]}`
  }
}

changeSocialMediaLinks()

function getGithubProfileInfos() {
  const url = `https://api.github.com/users/${LinksSocialMedia.github}`

  fetch(url)
    .then(response => response.json())
    .then(data => {
      userName.textContent = data.name
      userBio.textContent = data.bio
      userLogin.textContent = data.html_url
      userLink.href = data.html_url
      userImage.src = data.avatar_url
    })
}

getGithubProfileInfos()
