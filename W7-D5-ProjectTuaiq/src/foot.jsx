import React from 'react'

function foot() {
  return (
    <div>
        <footer class="text-center"  >
        <div class="container pt-4">
          <section class="mb-4" >
            <div className="container-footer" >
            <div className="twuiq-logo1-footer" >
            <a href=""><img src="https://tuwaiq.edu.sa/img/logos/logos2.svg" alt="" width="150px" height="80px"></img></a>
        </div>
        <div className="all-icons-footer">
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body"
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fa-brands fa-discord"></i
            ></a>
            
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fa-brands fa-x-twitter"></i>
            </a>
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fa-brands fa-youtube"></i
            ></a>
           
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fa-brands fa-snapchat"></i
            ></a>
            <a
              data-mdb-ripple-init
              class="btn btn-link btn-floating btn-lg text-body "
              href="#!"
              role="button"
              data-mdb-ripple-color="dark"
              ><i class="fab fa-linkedin"></i
            ></a>
            <p >@TuwaiqAcademy</p>
        </div>
           <div className="first-ul-footer">
            <ul type ="none">
                <li>شارك كمدرب</li>
                <li>حول الأكاديمية</li>
            </ul>

            </div>
            <div className= "second-ul-footer">
                <ul type ="none" >
                <li>الشروط والأحكام</li>
                <li>سياسة الخصوصية</li>
            </ul>
        </div>
            <div className="twuiq-logo2-footer">

            <a href=""><img src="https://tuwaiq.edu.sa/img/logos/logo.svg" alt="" width="150px" height="80px"></img></a>
</div>
          </section>
        </div>
      
        <div class="text-center p-3 color:white">
            جميع الحقوق محفوظة لأكاديمية طويق 2023        
        </div>
    </div>

      </footer>


    </div>
  )
}

export default foot