/*$(document).ready(function(){
  // font size slider
  $(".slider").on("input",function(){
    $(".tester").css("font-size", this.value + "px");
    $("#tcaption b span.size").text(this.value);
  });
  $("select#weight").change(function(){
    var weight = $("option:selected",this).val();
    $(".tester").css("font-weight",weight);
  });
  // $(".fselect").on("click", (event) => {
  //   $(".tester").css("font-feature-settings", event.target.dataset.feature);
  // });
  $("a.fselect").on("click", function(event) { $(".tester").css("font-feature-settings", function(_, old) {
    let feature = event.target.dataset.feature;
    let x = new Set(old.split(", "));
    if (old == "normal") {
      return feature;
    }
    if (x.has(feature)) {
      x.delete(feature);
    } else {
      x.add(feature);
    }
    // $(event.target).toggleClass("hover");
    console.log(x);
    return Array.from(x).join(", ");
  })});
  $("a.wselect").on("click",function(){
    $(this).attr("id", "hover");
    $("a.wselect").not(this).attr("id", "");
  });
  $("a.fselect").on("click",function(){
    $(this).toggleClass("hover");
  });
});*/

function typeTester() {
  let testers = document.querySelectorAll(".testercontainer");

  for (let i = 0; i < testers.length; i++) {
    let testerText         = testers[i].querySelector(".tester");

    // font size slider

    let fontSizeSlider     = testers[i].querySelector(".slider");

    fontSizeSlider.oninput = () => {
      let fontSize   = fontSizeSlider.value;
      let sliderText = testers[i].querySelector("span.size");
      sliderText.innerHTML = fontSize;
      testerText.style.fontSize = `${fontSize}px`;
    }

    // font weight selector

    let fontWeightSelector = testers[i].querySelector("select#weight");

    fontWeightSelector.onchange = () => {
      let fontWeight = fontWeightSelector.value;
      testerText.style.fontWeight = fontWeight;
    }
  }
}

document.onload = typeTester();