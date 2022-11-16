
import {Template1,Template2,valuex,product} from "../components/Animal/AnimalInfo";
function StudentPage(){

    return (
        <div>
            <h1>StudentPage</h1>
            <h1>valuex = {valuex}</h1>
            <h1>product = {product.length}</h1>
            <Template1
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2M346rnNl-r3kzYahiRZlZZin6PzYvxQ8A&usqp=CAU"
                name="Dog"
                color={"black"}
                age={12}
            />
            <Template2
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW2M346rnNl-r3kzYahiRZlZZin6PzYvxQ8A&usqp=CAU"
                name="Dog"
                color={"black"}
                age={12}
            />
        </div>
    )
}

export default StudentPage;