import { CLOUDINARY_RESTRO_IMAGE } from "../utils/constants";

const RestroCard = (props) => {
  // console.log(props.resData);

  const { resData } = props;

  const { cloudinaryImageId, name, sla, avgRating, areaName, cuisines } =
    resData?.info;

  return (
    <div className="res-card">
      <img
        className="res-img"
        alt="restro-image"
        src={CLOUDINARY_RESTRO_IMAGE + cloudinaryImageId}
      />
      <div className="details">
        <h3 className="res-name">{name}</h3>
        <p className="res-rating">
          {" "}
          <img
            src="https://cdn-icons-png.flaticon.com/128/3334/3334338.png"
            style={{ height: "12px", width: "12px" }}
          ></img>{" "}
          {avgRating} • {sla?.slaString}
        </p>
        <p
          className="res-cousines"
          style={{ fontWeight: "bold" }}
        >
          {cuisines.join(", ")}
        </p>
        <p className="res-areaName">{areaName}</p>
      </div>
    </div>
  );
};

export default RestroCard;
