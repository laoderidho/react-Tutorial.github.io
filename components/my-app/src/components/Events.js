import React from "react"

const myEvents = (name)=>{
    name =  document.getElementById('name')
    return alert(`Hello ${name.value}`)
}

const Events = ()=>{
    return(
        <div className="create">
           <form>
                <label for="name">Masukkan nama</label>
                <input id="name" type="text"></input>
           </form>
           <br></br>
            <button onClick={()=>myEvents('name')}>Klik Dulu</button>
        </div>
    )
}

export default Events;