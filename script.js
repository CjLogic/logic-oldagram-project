//increment like counter

let likeBtn = document.getElementById("likeBtn");
let like = document.getElementById("like");
let currentLike = 15137;
let comment = document.getElementById("comment");
let userName = document.getElementById("username");
let commentCount = 0; // Track the number of comments

function incrementLikeCounter() {
  const likeCounterElement = document.getElementById("like");
  currentLike += 1;
  likeCounterElement.textContent = currentLike.toLocaleString() + " likes";
}

function commentBtn() {
  document.getElementById("comment-section").classList.toggle("hidden");
}

document.getElementById("post").addEventListener("click", function () {
  const commentInput = document.getElementById("comment-input");
  const commentList = document.getElementById("comment-list");
  let userName = "User777 ";

  // Get the comment value and clear the input
  const commentValue = commentInput.value;
  commentInput.value = "";

  // Create a new list item and add it to the comment list
  const newComment = document.createElement("p");
  newComment.textContent = userName + commentValue;
  commentList.appendChild(newComment);

  // Increment the comment count
  commentCount++;

  // when 3 comments are added, remove second comment from list
  if (commentCount > 3) {
    commentList.innerHTML = "";
    commentCount = 0;
    commentList.appendChild(newComment);
  }
});
