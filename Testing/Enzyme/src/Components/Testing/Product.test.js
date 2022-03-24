import { FETCH_DATA } from "../../Redux/Actions"
import { DataReducer } from "../../Redux/Reducer"
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ProductList from "../Products/ProductList";

Enzyme.configure({ adapter: new Adapter() });

describe('fetch', () => {
    test('default State', () => {
        const newState = DataReducer(undefined, {})
        expect(newState).toEqual([])
    })

    test('receiving Data', () => {
        const data = [{ Name: "surya", Age: 21, ActiveStatus: true }, { Name: "naveen", Age: 21, ActiveStatus: true }]
        const newState = DataReducer(undefined, {
            type: FETCH_DATA,
            payload: data
        })
        expect(newState).toEqual(data)
    })
})


describe('Product List', () => {
    // test('Checking h1', () => {
    //     const wrapper = shallow(<ProductList />)
    //     expect(wrapper.find('h1').text()).toContain('UserData')
    //     // const data = { Name: "surya", Age: 21, ActiveStatus: true }
    //     // const wrapper = shallow(<Product data={data} />)
    //     // expect(wrapper.find('.name'), text()).toBe('surya')
    // })

    test('Data', () => {
        const data = { Name: "surya", Age: "21", ActiveStatus: true }
        const wrapper = shallow(<ProductList data={data} />)
        expect(wrapper.find('h2').text()).toContain(data.Name)
        expect(wrapper.find('p').text()).toContain(data.Age)

    })
})