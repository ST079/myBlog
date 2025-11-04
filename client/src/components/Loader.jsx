import Logo from "../assets/logo.png";

export const BlogLoader = () => {
  const handelErrorImg = (e) => {
    e.target.src = Logo;
  };

  return (
    <div className="row">
      <div className="col-sm-8">
        <div className="card mb-3 border-0" style={{ maxWidth: "540" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-head d-flex justify-content-between align-items-center mb-2">
                  <button className="custom cursor-pointer placeholder-glow w-25">
                    <span className="placeholder col-12"></span>
                  </button>
                  <p className="placeholder-glow w-25">
                    <span className="placeholder col-12"></span>
                  </p>
                </div>
                <h6 className="card-title placeholder-glow">
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-10"></span>
                </h6>
                <p
                  className="card-text lh-sm placeholder-glow"
                  style={{ fontSize: "14px" }}
                >
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-10"></span>
                </p>
                <div className="card-text d-flex justify-content-between align-items-center">
                  <div className="blog-btns">
                    <button className="blog-btn btn">
                      <i className="fa-solid fa-ellipsis fs-6"></i>
                    </button>
                    <button className="blog-btn btn">
                      <i className="fa-duotone fa-solid fa-bookmark"></i>
                    </button>
                  </div>

                  <p className="text-body-secondary blog-details placeholder-glow w-50">
                    <i className="fa-regular fa-id-card"></i>{" "}
                    <span className="placeholder col-10"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={""}
                className="img-fluid rounded-start default-img"
                alt="..."
                onError={(e) => {
                  handelErrorImg(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card mb-3 border-0" style={{ maxWidth: "540" }}>
          <div className="row g-0">
            <div className="col-md-8">
              <div className="card-body">
                <div className="card-head d-flex justify-content-between align-items-center mb-2">
                  <button className="custom cursor-pointer placeholder-glow w-25">
                    <span className="placeholder col-12"></span>
                  </button>
                  <p className="placeholder-glow w-25">
                    <span className="placeholder col-12"></span>
                  </p>
                </div>
                <h6 className="card-title placeholder-glow">
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-10"></span>
                </h6>
                <p
                  className="card-text lh-sm placeholder-glow"
                  style={{ fontSize: "14px" }}
                >
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-10"></span>
                  <span className="placeholder col-10"></span>
                </p>
                <div className="card-text d-flex justify-content-between align-items-center">
                  <div className="blog-btns">
                    <button className="blog-btn btn">
                      <i className="fa-solid fa-ellipsis fs-6"></i>
                    </button>
                    <button className="blog-btn btn">
                      <i className="fa-duotone fa-solid fa-bookmark"></i>
                    </button>
                  </div>

                  <p className="text-body-secondary blog-details placeholder-glow w-50">
                    <i className="fa-regular fa-id-card"></i>{" "}
                    <span className="placeholder col-10"></span>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <img
                src={""}
                className="img-fluid rounded-start default-img"
                alt="..."
                onError={(e) => {
                  handelErrorImg(e);
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const UserLoader = () => {
  return <div> userLoader</div>;
};
