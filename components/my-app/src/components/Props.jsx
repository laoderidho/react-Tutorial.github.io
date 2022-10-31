import React from "react";
import TesBootstrap from "./TesBootstrap";

const button = ()=>{
    return alert ('Hello Ridho'); //props artinya memanggil property / kode untuk di jalankan dan di panggil ke dalam jsx nya 
  }
const aing = 'Fahreza'; 

const Props = ()=>{
    return (
        <div>
            <button onClick={()=>button()}>Klik Saya</button> {/* jika ingin memanggil function harus menggunakan function juga di dalam onclick */}
            <h1>Hello {aing}</h1>
            <TesBootstrap></TesBootstrap>
        </div>
    )
}

export default Props;