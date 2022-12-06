// const Loading = () => {
//     return (
//         <div>

//         </div>
//     )
// }
import {
    Spinner
} from "react-bootstrap"

function Loading({loading}){
    // loading == props of component Loading
    return (
        <div>
            { loading && <div style={{textAlign:'center'}}>
                <Spinner animation="border" variant="secondary" /> 
            </div>}
        </div>
    )
}

export default Loading;