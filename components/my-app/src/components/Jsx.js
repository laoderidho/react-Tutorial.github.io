import React from "react"

function FormatName(user){
    return `${user.firstName} ${user.lastName}`; //ini juga bisa di bilang props
}

const user = {
    firstName: 'Ridho',
    lastName : 'Fahreza'
}
const Jsx = ()=>{
    return (
        <div>
            <h1>Hello, {FormatName(user)}</h1> {/* ini adalah sintax jsx sama seperti sintaks html yang memanggil props */}
        </div>
    )
}

// aturan dalam jsx div tidak boleh 2 karena 1 div melambangkan 1 body 
export default Jsx;