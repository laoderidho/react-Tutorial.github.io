import React,{ useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap";

const UseEffect = ()=>{
    const [pacarSaya, setPacarSaya] = useState(1)
    
    // useEffect(()=>{
    //    alert('Tes 12') //akan tereksekusi jika ada perubahan data di dalam parameter pacarSaya
    // })
    useEffect(()=>{
        if(pacarSaya<=0){
            alert('pacar tidak ada Silahkan cari lagi')
        }
    }, [pacarSaya])//array tersebut menandakan parameter

    return (
        <div>
            <p>Jumlah Pacar : {pacarSaya}</p>
            <Form>
                <Button onClick={()=>setPacarSaya(pacarSaya+1)}className="m-3" >Klik Tambah Pacar</Button>

                <Button onClick={()=>setPacarSaya(pacarSaya-1)} variant="danger" disabled={pacarSaya===0}>putuskan Pacar</Button>
            </Form>
        </div>
    )
}

export default UseEffect;