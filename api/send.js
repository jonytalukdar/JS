document.getElementById('submit').addEventListener('click', function () {
  const title = document.getElementById('title').value;
  const body = document.getElementById('body').value;
  const post = { title: title, body: body };
  nowPost(post);
});

function nowPost(postInfo) {
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify(postInfo),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  })
    .then((response) => response.json())
    .then((data) => console.log(data));
}
