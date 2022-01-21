const MOBILE_NUMBER_LENGTH = 10

const BookingValidation = (data)=>{
    var errors ='';
    
    if(!data.Name){
        errors = "FirstName is Required"
    }else if(!data.Mobile){
        errors = "Mobile Number is Required"
    }else if (data.Phone.length === MOBILE_NUMBER_LENGTH) {
        errors = 'Please enter valid Mobile NUmber'
    }else if(!data.Address){
        errors = "Address Number is Required"
    }else if(!data.RoomType){
        errors = "RoomType is Required"
    }else if(!data.IdType){
        errors = "IdType is Required"
    }else if(!data.IdNumber){
        errors = "IdNumber Number is Required"
    }
    return errors
}
export default BookingValidation