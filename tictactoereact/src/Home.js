import React,{useState} from 'react'

function Home() {
    const [pOneName,setPOneName] = useState("")
    const [pTwoName,setPTwoName] = useState("")

    function setPLayerName(player){
        if(player=="one"){
            setPOneName()
        }
    }
    
    return (
        <div>
            <input type="text" />
            <button onClick={setPLayerName(one)}>Set Player 1 Name</button>

            <input type="text" />
            <button onClick={setPLayerName(two)}>Set Player 2 Name</button>
        </div>
    )
}

export default Home
