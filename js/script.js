//div where profile information appears
const overview = document.querySelector(".overview");
const username = "melissariska";

const gitProfileInfo = async function () {
   const profileInfo = await fetch(`https://api.github.com/users/${username}`);
   const data = await profileInfo.json();
   console.log(data);
   displayProfileInfo(data);
};

gitProfileInfo();



const displayProfileInfo = function (data) {
    const div = document.createElement("div");
    div.classList.add("user-info");
    div.innerHTML = `
    <figure>
      <img alt="user avatar" src=${data.avatar_url} />
    </figure>
    <div>
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Bio:</strong> ${data.bio}</p>
      <p><strong>Location:</strong> ${data.location}</p>
      <p><strong>Number of public repos:</strong> ${data.public_repos}</p>
    </div>`;
    overview.append(div);
}
