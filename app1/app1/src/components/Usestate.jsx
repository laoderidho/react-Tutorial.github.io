import React,{ useState, useEffect } from "react";
import {Form, Button} from "react-bootstrap";

const Usestate = ()=>{
    const [Jumlah, setJumlah] = useState(1); //0 sebagai nilai Jumlah

    useEffect(()=>{
        if(Jumlah <=0){
            return alert(`Belanjaan Habis`)
        }
    }, [Jumlah])
    return (
        <div>
            <p>Jumlah Belanjaan : {Jumlah}</p>
            <Form>
                <Button onClick={()=>setJumlah(Jumlah+1)}  variant="success">Tambah Pembelian</Button>
                <br />
                <br />
                <Button onClick={()=>setJumlah(Jumlah-1)} variant="danger" disabled={Jumlah===0}>Kurangi Belanjaan</Button>
            </Form>
            
        </div>
    )
}

export default Usestate;