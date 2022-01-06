const student = require('../models/studentSchema')

const studentData = async(req,res)=>{
    try{
        const { firstName,
        lastName,
        dateOfBirth,
        gender,
        mobile,
        altMobile,
        email,
        address,
        pincode,
        collegeName,
        degree,
        branch,
        location,
        yearOfPass,
        percent} = req.body
        const newStudent = new student(
            { firstName,
            lastName,
            dateOfBirth,
            gender,
            mobile,
            altMobile,
            email,
            address,
            pincode,
            collegeName,
            degree,
            branch,
            location,
            yearOfPass,
            percent}
        )
        newStudent.save();
        res.send('Data saved')

    }catch(err){
        res.send(err)
    }

}

export default studentData