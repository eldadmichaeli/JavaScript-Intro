// https://medium.com/@raihan_tazdid/callback-hell-in-javascript-all-you-need-to-know-296f7f5d3c1
//Callback Hell is a situation in JavaScript where multiple nested callback functions
//make your code look like it’s been through a blender on the highest setting.
// This typically occurs when dealing with asynchronous operations,
// such as making API requests or handling file I/O,
// where one operation depends on the result of another or previous One.
// Here’s an example of what callback hell might look like:

getUser(1, function(user) {
    console.log("User fetched:", user);

    getPosts(user.id, function(posts) {
        console.log("Posts fetched:", posts);

        getComments(posts[0].id, function(comments) {
            console.log("Comments fetched for post 1:", comments);

            getComments(posts[1].id, function(comments) {
                console.log("Comments fetched for post 2:", comments);
                // More nested callbacks as needed
            });
        });
    });
});

// Fake API simulation
function getUser(id, callback) {
    setTimeout(() => callback({ id: 1, name: "John Doe" }), 1000);
}

function getPosts(userId, callback) {
    setTimeout(() => callback([{ id: 1, title: "Post 1" }, { id: 2, title: "Post 2" }]), 1000);
}

function getComments(postId, callback) {
    setTimeout(() => callback(["Comment 1", "Comment 2"]), 1000);
}