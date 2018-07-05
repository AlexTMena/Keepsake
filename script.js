//////////////// filter option/////////////////////

    var showPortfolio = 0;
    var forAll = "";
    var forFiltered = "";
    var nextBtn = "";
    var imgList= "";
    var imgattrb = "";
    var nextBtnList = "";

    function filterAll() {

        var sAll = document.getElementById('showAll');
        var sPrintDesign = document.getElementById('showPrintDesign');
        var sLogoDesign = document.getElementById('showLogoDesign');
        var sWebDesign = document.getElementById('showWebDesign');
        
        var printDesign = document.getElementsByClassName('print-design');
        var logoDesign = document.getElementsByClassName('logo-design');
        var webDesign = document.getElementsByClassName('web-design');

        for(var x=0; x< printDesign.length; x++) {
            printDesign[x].classList.remove('d-none');
        }

        for(var x=0; x< logoDesign.length; x++) {
            logoDesign[x].classList.remove('d-none');
        }

        for(var x=0; x<webDesign.length; x++) {
            webDesign[x].classList.remove('d-none');
        }

        sAll.classList.add('active');
        sPrintDesign.classList.remove('active');
        sLogoDesign.classList.remove('active');
        sWebDesign.classList.remove('active');

        showPortfolio = 0;
    }

    function filterPrintDesign() {

        var sAll = document.getElementById('showAll');
        var sPrintDesign = document.getElementById('showPrintDesign');
        var sLogoDesign = document.getElementById('showLogoDesign');
        var sWebDesign = document.getElementById('showWebDesign');
        
        var printDesign = document.getElementsByClassName('print-design');
        var logoDesign = document.getElementsByClassName('logo-design');
        var webDesign = document.getElementsByClassName('web-design');
        
        for(var i=0; i< logoDesign.length; i++) {
            logoDesign[i].classList.add('d-none');
        }

        for(var i=0; i< webDesign.length; i++) {
            webDesign[i].classList.add('d-none')
        }

        for(var i=0; i< printDesign.length; i++) {
            printDesign[i].classList.remove('d-none')
        }
        

        sPrintDesign.classList.add('active');
        sAll.classList.remove('active');
        sLogoDesign.classList.remove('active');
        sWebDesign.classList.remove('active');

        showPortfolio = 1;
    }

    function filterLogoDesign() {

        var sAll = document.getElementById('showAll');
        var sPrintDesign = document.getElementById('showPrintDesign');
        var sLogoDesign = document.getElementById('showLogoDesign');
        var sWebDesign = document.getElementById('showWebDesign');
        
        var printDesign = document.getElementsByClassName('print-design');
        var logoDesign = document.getElementsByClassName('logo-design');
        var webDesign = document.getElementsByClassName('web-design');

        for(var x=0; x< printDesign.length; x++) {
            printDesign[x].classList.add('d-none');
        }

        for(var x=0; x< logoDesign.length; x++) {
            logoDesign[x].classList.remove('d-none');
        }

        for(var x=0; x< webDesign.length; x++) {
            webDesign[x].classList.add('d-none');
        }

        sLogoDesign.classList.add('active');
        sAll.classList.remove('active');
        sPrintDesign.classList.remove('active');
        sWebDesign.classList.remove('active');
    
        showPortfolio = 2;
    }

    function filterWebDesign() {

        var sAll = document.getElementById('showAll');
        var sPrintDesign = document.getElementById('showPrintDesign');
        var sLogoDesign = document.getElementById('showLogoDesign');
        var sWebDesign = document.getElementById('showWebDesign');
        
        var printDesign = document.getElementsByClassName('print-design');
        var logoDesign = document.getElementsByClassName('logo-design');
        var webDesign = document.getElementsByClassName('web-design');

        for(var x=0; x< printDesign.length; x++) {
            printDesign[x].classList.add('d-none');
        }

        for(var x=0; x<logoDesign.length; x++) {
            logoDesign[x].classList.add('d-none');
        }

        for(var x=0; x< webDesign.length; x++) {
            webDesign[x].classList.remove('d-none');
        }

        sWebDesign.classList.add('active');
        sAll.classList.remove('active');
        sPrintDesign.classList.remove('active');
        sLogoDesign.classList.remove('active');
        
        showPortfolio = 3;
    }


    ////////////////////MODAL SETTINGS//////////////////

    function closeModal() {
        var closeLightbox = document.getElementById('lightbox-modal');
        closeLightbox.classList.add('display-none')
    }


    ////////////////////// Picture per click

    function showModal(forAll,forFiltered) {

        var lightboxElem = document.getElementById('lightbox-modal');
        lightboxElem.classList.remove('display-none');
      
        if (showPortfolio == 0) {
            var imgList = document.getElementById("protfolioHandler").children;
            var imgattrb = imgList[forAll].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',imgattrb);
            curPic = forAll;
            nextBtnList = imgList;

        }
        if (showPortfolio == 1) {
            var imgList = document.getElementsByClassName("print-design");
            var imgattrb = imgList[forFiltered].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',imgattrb);

            curPic = forFiltered;
            nextBtnList = imgList;
            
        }
        if (showPortfolio == 2) {
            var imgList = document.getElementsByClassName("logo-design");
            var imgattrb = imgList[forFiltered].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',imgattrb);

            curPic = forFiltered;
            nextBtnList = imgList;
        }
        if (showPortfolio == 3) {
            var imgList = document.getElementsByClassName("web-design");
            var imgattrb = imgList[forFiltered].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',imgattrb);

            curPic = forFiltered;
            nextBtnList = imgList;
        }
}

    function nextPic() {

        if (curPic>=nextBtnList.length-1) {
            curPic = 0;
            var toPresentPic = nextBtnList[curPic].getAttribute('src');
            document.getElementById('disModal').setAttribute('src', toPresentPic);
        }   else {
            curPic = curPic+1;
            var toPresentPic = nextBtnList[curPic].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',toPresentPic);
            }
        }

    function prevPic() {

        if (curPic == 0) {
            curPic = nextBtnList.length-1;
            var toPresentPic = nextBtnList[curPic].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',toPresentPic);
        } else {
            curPic = curPic-1;
            var toPresentPic = nextBtnList[curPic].getAttribute('src');
            document.getElementById('disModal').setAttribute('src',toPresentPic);
        }
    }