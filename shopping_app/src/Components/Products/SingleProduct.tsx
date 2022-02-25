import { connect } from "react-redux";
import { RootState } from "../../Redux/Store";

function SingleProduct({ currentItem }: any) {
  return (
    <div className="card">
      <div className="ms-5">
        <img
          src={currentItem.Image}
          alt={"img"}
          className="img-fluid"
          style={{ width: 500, height: 300 }}
        />
      </div>
      <div className="ms-3">
        <h5>{currentItem.Title} </h5>
        <span>Rs.{currentItem.Price}</span>
        <p>color - {currentItem.color}</p>
        <p>Storage - {currentItem.Memory}</p>
        <p>Rear Camera - {currentItem.RearCamera}</p>
        <p>Front camera - {currentItem.FrontCamera}</p>
        <p>Processor - {currentItem.Processor}</p>
        <p>Display - {currentItem.Display}</p>
        <p>Battery - {currentItem.Battery}</p>
      </div>{" "}
    </div>
  );
}

const mapStateToProps = (state: RootState) => {
  return {
    currentItem: state.Product.data,
  };
};

export default connect(mapStateToProps)(SingleProduct);
