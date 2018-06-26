// filter option

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
    }