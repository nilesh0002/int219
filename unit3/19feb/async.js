function getdata(){
            return new Promise(resolve=>{
                setInterval(()=>{
                    resolve("data received")},2000)
            })
        }  
        async function showdata(){
            const data=await getdata()
            console.log(data)
        } 
        showdata()
