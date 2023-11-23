function header(){
    return(
<div>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand"><img src="https://tuwaiq.edu.sa/img/logos/logo.svg" width={"250rem"}  /></a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div className="navItems">
  <a class="nav-link" href="#">  مركز الإختبارات </a>
  <a class="nav-link" href="#"> الأكاديميات التابعة </a>
  <a class="nav-link" href="#"> حول الأكاديمية </a>
  <a class="nav-link" href="#">المعسكرات والبرامج </a>
  <a class="nav-link" href="#">الرئيسية <span class="sr-only">(current)</span></a>

  </div>
  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
     <h4><a class="nav-link" href="#">تسجيل دخول</a>
      </h4> 
      </li>
    </ul>
  </div>
</nav>
</div>
    )
}
export default header