// filter option

    function filterAll() {

        var sAll = document.getElementById('showAll');
        var sPrintDesign = document.getElementById('showPrintDesign');
        var sLogoDesign = document.getElementById('showLogoDesign');
        var sWebDesign = document.getElementById('showWebDesign');
        
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

        sWebDesign.classList.add('active');
        sAll.classList.remove('active');
        sPrintDesign.classList.remove('active');
        sLogoDesign.classList.remove('active');
    }