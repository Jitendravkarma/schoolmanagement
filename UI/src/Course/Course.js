import './Course.css';
export default function Course() {
  return (
    <div className="contain">
      <section id="services" class="services section-bg">
          <div class="container" data-aos="fade-up">

            <div class="section-title">
              <h2>Courses</h2>
              <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
            </div>

            <div class="row">
              <div class="col-xl-3 col-md-6 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
                <div class="icon-box">
                  <div class="icon"><i class="bx bxl-dribbble"></i></div>
                  <h4><a href="">Science</a></h4>
                  <p>Mathematics course</p>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="zoom-in" data-aos-delay="200">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-file"></i></div>
                  <h4><a href="">Science</a></h4>
                  <p>Biological course</p>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="300">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-tachometer"></i></div>
                  <h4><a href="">Agriculture</a></h4>
                  <p>Farming concepts course</p>
                </div>
              </div>

              <div class="col-xl-3 col-md-6 d-flex align-items-stretch mt-4 mt-xl-0" data-aos="zoom-in" data-aos-delay="400">
                <div class="icon-box">
                  <div class="icon"><i class="bx bx-layer"></i></div>
                  <h4><a href="">Arts</a></h4>
                  <p>Political, History type course</p>
                </div>
              </div>
            </div>
          </div>
        </section>
    </div>
  );
}