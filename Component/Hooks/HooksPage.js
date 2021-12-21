import Form from './Form'
import { userContext } from './Form'
import Addcart from './Addcart'
import Increment from './Increment'
import CustomHook from './CustomHook'

function HooksPage() {
    return (
        <div>
            <Form />
            <userContext.Consumer>
                {data => <p>{data.name}</p>}
            </userContext.Consumer>
            <Addcart />
            <Increment />
            <CustomHook />
        </div>
    )
}
export default HooksPage