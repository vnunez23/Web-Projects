var show="false";

function setVisibilty(value) {

    if (show=="false") 
        {
            document.getElementById(value).style.visibility="visible";
            show="true";
        }
    else 
        {
            document.getElementById(value).style.visibility="hidden";
            show="false";
        }
}