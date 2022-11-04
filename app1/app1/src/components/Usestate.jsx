import React,{ useState } from "react";
import {Form, Button} from "react-bootstrap";

const Usestate = ()=>{
    const [Jumlah, setJumlah] = useState(0); //0 sebagai nilai Jumlah
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