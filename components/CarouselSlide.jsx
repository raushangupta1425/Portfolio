import './css/CarouselSlide.css'
export const CarouselSlide = (Props) => {
    const {img1, img2, img3,img4} = Props;
    return (
        <>
        <div className="corouselSlide">
            <div className="carouselInner">
              <div className="carouselItem">
                <img src={img1} alt="Background Image" />
              </div>
              <div className="carouselItem">
                <img src={img2} alt="Background Image" />
              </div>
              <div className="carouselItem">
                <img src={img3} alt="Background Image" />
              </div>
              <div className="carouselItem">
                <img src={img4} alt="Background Image" />
              </div>
            </div>
          </div>
        </>
    )
}