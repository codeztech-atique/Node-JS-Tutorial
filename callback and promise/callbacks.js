// Explanation of callbacks it wait until unless createPost method data push to const posts
// Wait for 2 second then execute the code.
// Sample

const posts = [
    { title: 'Title 1', body: 'I am the first Element in array' },
    { title: 'Title 2', body: 'I am the second Element in array' },
    { title: 'Title 3', body: 'I am the third Element in array' }
 ];
 
 function getPosts() {  // fetching the data from the array
     setTimeout(() => {
        let output = "";
        posts.forEach(element => {
            output = output + element.title+' '+element.body+"\n";
        });
        console.log(output);
     }, 1000); // 1 sec
 }
 
 function createPost(data, callback) {
     setTimeout(() => {
       posts.push(data);
       callback();
     }, 2000)
 }

 createPost({title:'Title 4', body:'I am the fourth Element in array'}, getPosts); // entry point
 