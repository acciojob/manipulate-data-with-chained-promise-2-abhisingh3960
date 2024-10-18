//your JS code here. If required.
function fetchPosts(callback){
    console.log("Load Posts")
    callback()
}

function fetchPost(id,callback){
    console.log('Load Post data '+id)
    callback(id)
}

function fetchComments(id,callback){
    console.log("Comments of "+id)
    callback()
}

function fetchLikes(postId,commentId,callback){
    console.log("Likes for "+postId+" On Comment "+commentId)
    callback()
}



fetchPosts(()=>{
    let postId = "123"
    fetchPost(postId,()=>{
        fetchComments(postId,()=>{
            let commentId = "098"
            fetchLikes(postId,commentId,()=>{
                console.log("I got likes")
            })
        })
    })
})
