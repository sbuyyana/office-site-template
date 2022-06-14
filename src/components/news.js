export const News = (props) => {
  return (
    <>
      <div className="top-curve"></div>
      <div id="news" className="text-center">
        <div className="container">
          <div className="col-md-10 col-md-offset-1 section-title">
            <h2>News</h2>
          </div>
          <div className="row">
            {props.data
              ? props.data.map((d, i) => (
                  <div key={`${d.title}-${i}`} className="col-xs-12 col-md-12">
                    {" "}
                    <i className={d.icon}></i>
                    <p>{d.text}</p>
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
      <div class="bottom-curve"></div>
    </>
  );
};
