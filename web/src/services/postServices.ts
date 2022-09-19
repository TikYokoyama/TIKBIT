import axios from 'axios'

interface Post{
    id: string,
    userName: string,
    coment: string
}

export async function createPost(post: Post) {

    // const userName = post.userName
    // const coment = post.coment

    // const body = JSON.stringify(post)
    
    // axios.post('http://localhost:5500/', body)
    //     // .then(response => response.data)
    //     .then(response => JSON.stringify(response))
    //     .catch(error => console.log(error))

    const options = {
        method:"POST",
        body: JSON.stringify(post),
        headers:{
            "Content-Type": "application/json"
        }
    };

    const response = await fetch('http://localhost:5500/', options);
    const responseContent = await response.json();
    console.log(responseContent);
    
}

export async function getPosts() {
    const options = {
        method: 'GET',
    };

    await fetch(`http://localhost:5500/`, options);
    console.log("Deletado com sucesso!");
}

export async function deletePost(post:Post){
    // await axios.delete(`${api}/${post.id}`)

    console.log(post.id);
    
    const options = {
        method: 'DELETE',
    };

    await fetch(`http://localhost:5500/${post.id}`, options);
    console.log("Deletado com sucesso!");
        
}

export async function updatePost(post:Post) {
    const options = {
        method:"PUT",
        body: JSON.stringify(post),
        headers:{
            "Content-Type": "application/json"
        }
    };

    const response = await fetch(`http://localhost:5500/${post.id}`, options);
    const responseContent = await response.json();
    console.log(responseContent);
}