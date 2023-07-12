import './Foot.css';

export default function Foot() {
  return (
    <footer id="footer">
        <div class="footer-top">
          <div class="container">
            <div class="row">

              <div class="col-lg-3 col-md-6 footer-contact">
                <h3>School</h3>
                <p>
                  Khargone road, Sanawad <br/>
                  City- Sanawad 451111<br/>
                  Madhya Pradesh <br/><br/>
                  <strong>Phone:</strong> +91-00000-00000<br/>
                  <strong>Email:</strong> info@example.com<br/>
                </p>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Useful Links</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Teachers Staff</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Course</h4>
                <ul>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Maths</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Biology</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Arts</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Commerce</a></li>
                  <li><i class="bx bx-chevron-right"></i> <a href="#">Agriculture</a></li>
                </ul>
              </div>

              <div class="col-lg-3 col-md-6 footer-links">
                <h4>Our Social Networks</h4>
                <div class="social-links mt-3">
                  <a href="#" class="twitter"><i class="bx bxl-twitter"></i></a>
                  <a href="#" class="facebook"><i class="bx bxl-facebook"></i></a>
                  <a href="#" class="instagram"><i class="bx bxl-instagram"></i></a>
                  <a href="#" class="google-plus"><i class="bx bxl-skype"></i></a>
                  <a href="#" class="linkedin"><i class="bx bxl-linkedin"></i></a>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div class="container footer-bottom clearfix">
          <div class="copyright">
            &copy; Copyright <strong><span>School</span></strong>. All Rights Reserved
          </div>
        </div>
      </footer>
  );
}