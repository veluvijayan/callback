randomDog="https://dog.ceo/api/breeds/image/random";

async function foo(){
    try {
        let resp1=await fetch(randomDog);
        let result=await resp1.json();
        let resp=result.message;
        console.log(resp);
        if (resp) {
            let object=document.createElement("object");
            object.data=resp;
            document.body.append(object);
    
        } else {
            document.body,append("No data");
        }
        let object=document.createElement("object");
        object.data=result.data.message;
        document.body.append(object);

       
    } catch (error) {
        console.log(error);
    }
}
foo();