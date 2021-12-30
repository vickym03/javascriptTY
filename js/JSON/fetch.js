const url ='https://jsonplaceholder.typicode.com/posts'
const fetchPost = () =>{
    fetch(url) .then((response)=>{
        console.log(response)
        return response.json()
    }).then((data)=>{
        console.log(data)
        let postData = '<ol>'
        data.map((post) =>{
            //template literals (ES6)
            postData +=`<li> ${post.title}</li>`
        })
        postData +='</ol>'
        const divElement = document.getElementById('users')
        divElement.innerHTML = postData
        console.log("postData", postData)
    }).catch(err =>{
        console.log(err)
        console.log(err.message)
    })
}

fetchPost()

function savePost(){
    const post ={
        userId :1000,
        title: "JavaScript end Game",
        body:"JavaScript JavaScript"
    }
    fetch(url, {
        method: "POST",
        body: JSON.stringify(post),
        header:{
            'Content-Type' : 'application/json'
        }
    }).then((response) =>{
        console.log(response);
        return response.json()
    }).then(data =>{
        console.log("Added post", data);
    })
}