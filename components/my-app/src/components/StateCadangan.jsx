

const StateCadangan = ({navValue})=>{ //nav value sebagai parameter
    return (
        <div>
            <h1>{!navValue ? 'Hello': navValue}</h1> {/* Memanggil navValue */}
        </div>
    )
}
export default StateCadangan;