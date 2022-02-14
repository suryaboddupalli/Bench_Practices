import { useForm } from "react-hook-form";
import { useState } from "react";
import { person } from "../Types";

function Example() {
  const { register, handleSubmit } = useForm<person>();

  const [json, setJson] = useState<object>();

  const onSubmit = (data: person) => {
    setJson(data);
  };
  console.log(json);

  return (
    <div>
      <div>Sign Up Form</div>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="card ps-5 me-5">
          <h4 className="text-center">Personal Details</h4>
          <br />
          <div className="form-group me-5 ">
            <label className="form-label">FirstName &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("firstName")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">LastName &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("lastName")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Date Of Birth &nbsp;</label>
            <input
              type="date"
              className="form-control"
              {...register("dateOfBirth")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Gender : &nbsp; &nbsp;</label>
            <input
              type="radio"
              value="male"
              {...register("gender", { required: true })}
            />
            Male &nbsp;
            <input
              type="radio"
              value="female"
              {...register("gender", { required: true })}
            />
            Female &nbsp;
            <input
              type="radio"
              value="others"
              {...register("gender", { required: true })}
            />
            others &nbsp;
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Mobile Number &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("mobile")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Alternate Mobile Number &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("altMobile")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Email &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("email")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Address &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("address")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Pincode &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("pincode")}
              required={true}
            />
          </div>
          <br />
        </div>
        <br />
        <div className="card ps-5 me-5">
          <h4 className="text-center">Education Details</h4>
          <br />
          <div className="form-group me-5">
            <label className="form-label">College Name &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("collegeName")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Degree &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("degree")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Branch &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("branch")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Location &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("location")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Year of Passing &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("yearOfPass")}
              required={true}
            />
          </div>
          <br />
          <div className="form-group me-5">
            <label className="form-label">Percentage/CGPA &nbsp;</label>
            <input
              type="text"
              className="form-control"
              {...register("percent")}
              required={true}
            />
          </div>
          <br />
        </div>
        <br />
        <div className="  d-md-flex justify-content-md-end">
          <button className="btn btn-primary ">Next</button>
        </div>
      </form>
    </div>
  );
}

export default Example;
