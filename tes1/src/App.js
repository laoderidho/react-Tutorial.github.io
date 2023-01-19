import { useState} from 'react'


export default function App() {


  const [name, setName] = useState('');

  const myFunc = el=>{
    setName(el.target.value)
  }
  return (
    <div>
        <form action="">
          <label for="">
            Name:
            <input type="text"  onChange={myFunc}/>
          </label>
        </form>
        <h1>nama : {name}</h1>
        <button>Klik me</button>
    </div>
  )
}
