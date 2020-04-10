/* Nøtt: Bruk en drop-down-list, dvs et <select> - element til å velge skrift.type*/

/*
function tekstType() {
    const paragraph = document.getElementById("paragraph");
    const selectItem = document.getElementsByName("texttype");
    const selectedItem = Array.from(selectItem).filter(
      f => f.checked == true
    );
    const value = selectItem[0].value;
    if (value === "regular") {
      paragraph.style.fontStyle = "";
      paragraph.style.fontWeight = "";
    }
    if (value === "italic") {
      paragraph.style.fontStyle = "italic";
      paragraph.style.fontWeight = "";
    }
    if (value === "bold") {
      paragraph.style.fontStyle = "";
      paragraph.style.fontWeight = "bold";
    }
  }

  function textTypes(){
    const noeskjer = document.querySelector("#textType");
    const pp = document.getElementById("paragraph");
      document.body.style.fontStyle = noeskjer.value;
      document.body.style.fontWeight = noeskjer.value;
  }
  noeskjer.onchange = textTypes;/*
*/
  function tekstType (selectTag) {            
            // Returns the index of the selected option
            const whichSelected = selectTag.selectedIndex;

            // Returns the selected options values
            const selectState = selectTag.options[whichSelected].text;

            const paragraph = document.getElementById ("paragraph");
            paragraph.style.fontWeight = selectState;
            
            const selectItem = document.getElementsByName("texttype");
            const value = selectItem[0].value;
            if (value === "regular") {
                paragraph.style.fontStyle = "";
                paragraph.style.fontWeight = "";
              }
              if (value === "italic") {
                paragraph.style.fontStyle = "italic";
                paragraph.style.fontWeight = "";
              }
              if (value === "bold") {
                paragraph.style.fontStyle = "";
                paragraph.style.fontWeight = "bold";
              }
  }