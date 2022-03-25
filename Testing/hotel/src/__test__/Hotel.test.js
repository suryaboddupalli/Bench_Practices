import { FETCH_DATA } from "../Redux/Action"
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import hotelReducer from "../Redux/Reducer"
import HotelBook from "../Components/Hotels/HotelBook";
import userEvent from "@testing-library/user-event";


Enzyme.configure({ adapter: new Adapter() });

describe('fetch', () => {
    test('default State', () => {
        const newState = hotelReducer(undefined, {})
        expect(newState).toEqual({
            hotelDetails: [],
            currentItem: null
        })
    })

    test('receiving Data', () => {
        const data = [{
            hotelName: "Simhapuri",
            hotelLocation: "nellore",
            hotelDescription: "Single and Double bedRooms available",
            hotelImg: ""
        }, {
            hotelName: "NellGrands",
            hotelLocation: "nellore",
            hotelDescription: "Single and Double bedRooms available",
            hotelImg: ""
        }]
        const newState = hotelReducer(undefined, {
            type: FETCH_DATA,
            payload: data
        })
        expect(newState).toEqual(data)
    })
})

describe('Hotel Book', () => {
    test('render Button', () => {
        const { getByTextId } = render(<HotelBook />)
        expect(getByTextId('button')).toHaveTextContent('Book')
    })

    test('Data entered', () => {
        render(<Login />)
        const Name = screen.getByLabelText('Name')
        const Address = screen.getByLabelText('Address')
        const Mobile = screen.getByLabelText('Mobile')
        const Days = screen.getByLabelText('Days')
        const RoomType = screen.getByLabelText('RoomType')
        const IdType = screen.getByLabelText('IdType')
        const IdProof = screen.getByLabelText('IdProof')
        const FromDate = screen.getByLabelText('From')
        const ToDate = screen.getByLabelText('To')



        const button = screen.getByRole('button')

        expect(button).toBeDisabled()
        userEvent.type(Name, "surya")
        userEvent.type(Address, "Nellore")
        userEvent.type(Mobile, "903278878")
        userEvent.type(Days, "2")
        userEvent.type(RoomType, "Double BedRoom")
        userEvent.type(IdType, "Aadhar")
        userEvent.type(IdProof, "565434567")
        userEvent.type(FromDate, "22-3-2022")
        userEvent.type(ToDate, "24-3-2022")

        except(button).toBeEnabled()
    })

})