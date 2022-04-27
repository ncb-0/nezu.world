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

  // sample text randomizer
  let sampleStrings = [
    "Even if you say everything she feels is “simulated”, remember that for Yumi it’s REAL pain…",
    "Yes, I’m in a private place where I can speak freely… Her mood? Umm… More meds? Wha—",
    "REMEMBER WE HAD A RULE, YANG?! THE “NO MILITARY ANDROIDS IN MY HOUSE” ONE?!",
    "Hilariously, the pins are colour-coded by chakra. She’s the only robot I’ve seen with all seven.",
    "Your voice is unique! It reminds me of a game I played, with cute little singing turrets…",
    "(The Emotion Engine was reconnected, causing a rush of new emotions to flow through her!) “WOW!!!”",
    "He thinks of robots as simple machines, to be tooled with and reprogrammed as you see fit.",
    "“So what’d he string you up in? Drugs? Auto theft? Gambling?” “The second one, Feefs.”",
    "“The more I look at it—it—it resembles my proportions so closely?!” “Haha, the final version did have skin on top, so…”",
    "If the voice is right… then I’m not like you… or anyone else… and… and… UGH!!! IT’S WRONG!!!",
    "I can feel it… they’re stealing all our data as we speak… and right now they’re rummaging through my bunny pics.",
    "I’m just a crazy person. I don’t know what I’m doing. So why are we doing things my way…"
  ];

  let shuffledStrings = sampleStrings.sort(() => 0.5 - Math.random());

  console.log(shuffledStrings);

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

    // testerText.innerHTML = sampleStrings[Math.floor(Math.random() * sampleStrings.length)];
    testerText.innerHTML = shuffledStrings[i];
  }
}

document.onload = typeTester();