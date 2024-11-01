import Image from "next/image";

interface FeatureData {
  icon: string;
  text: string;
}

interface TabData {
  id: string;
  title: string;
  description: string;
  features: FeatureData[];
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
}

interface BlockPlatformProps {
  tabs: TabData[];
}

const BlockPlatform: React.FC<BlockPlatformProps> = ({ tabs }) => {
  return (
    <div className="container container-xxl">
      <div className="nk-block">
        <div className="row justify-content-center">
          <div className="col-xl-6 col-lg-8">
            <ul className="nav tab-nav tab-nav-btn-bdr-s2 justify-content-center justify-content-sm-between pb-4 pb-sm-5">
              <li><a className="active" data-bs-toggle="tab" href="#tab-1-1">FOR Participators</a></li>
              <li className="tab-nav-sap d-none d-sm-block"></li>
              <li><a data-bs-toggle="tab" href="#tab-1-2">For Traders</a></li>
            </ul>
          </div>
        </div>
        <div className="tab-content">
          {tabs.map((tab, index) => (
            <div className={`tab-pane fade${index === 0 ? ' show active' : ''}`} id={tab.id} key={tab.id}>
              <div className="row align-items-center justify-content-between gutter-vr-40px">
                <div className="col-lg-6 order-lg-last">
                  <div className="nk-block-img nk-block-ca">
                    <div className="nk-circle-animation nk-df-center fast"></div>
                    <div
                      className="shadow rounded"
                      style={{ position: "relative", display: "flex", justifyContent: "center", alignItems: "center", height: "auto" }}
                    >
                      <Image
                        src={tab.image.src}
                        alt={tab.image.alt}
                        width={tab.image.width}
                        height={tab.image.height}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="nk-block-text mgb-m30">
                    <h2 className="title title-md">{tab.title}</h2>
                    <p>{tab.description}</p>
                    {tab.features.map((feature, i) => (
                      <div className="feature feature-inline feature-middle" key={i}>
                        <div className="feature-icon feature-icon-md">
                          <em className={`icon icon-md icon-grd ikon ${feature.icon}`}></em>
                        </div>
                        <div className="feature-text">
                          <p>{feature.text}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlockPlatform;
