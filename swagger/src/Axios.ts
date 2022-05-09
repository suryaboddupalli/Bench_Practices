import axios from 'axios'

type persondata = {
    name:string,
    age:number
}

const data:persondata= {
    name:'surya',
    age:20
}

axios.get('apilink')
.then((res)=>{
    console.log(res)
}).catch(err=>{
    console.log(err)
})

axios.get('apilink/${id}')
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})


axios.post('apilink',data)
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

axios({
    method: 'post',
    url: 'apilink',
    data:data
  }).then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

axios.put('apilink/${id}',data)
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})

axios.delete('apilink/${id}')
.then((res)=>{
    console.log(res)
}).catch((err)=>{
    console.log(err)
})