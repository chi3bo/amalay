let mybody = {
    "name": "bnshaab",
    "email": "bnsha123@gmail.com",
    "password": "Ahmed@123",
    "rePassword": "Ahmed@123",
    "phone": "01010700701"
}

async function sayHello() {
    let req = await fetch('https://ecommerce.routemisr.com/api/v1/auth/signup',
        {
            method: 'POST', body: JSON.stringify(mybody), headers: {
                'Content-Type': 'application/json' // تحديد نوع البيانات المرسلة
            },
        })
    let myData = await req.json()
    console.log(myData);
}

// sayHello()


/*
get ====> fetch علطول
POST ===> تاخد اوبشنز 
1- Method : post
2- body : stringfy(body)
3- headers: 'Content-Type': 'application/json'
*/