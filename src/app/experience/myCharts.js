// jQuery('document').ready(function () {
//             $("#chart-langlib").insertFusionCharts({
//                 type: "bar2d",
//                 width: "600",
//                 height: "400",
//                 dataFormat: "json",
//                 dataSource: {
//                     "chart": {
//         "caption": "LANGUAGES",
//         "showLabels": "0",
//         "showValues": "0",
//         "paletteColors": "#B76E79,#f6d9d5,#707070,#91a8d0,#1d4d9f",
//         "bgColor": "#E5E5E5",
//         "showBorder": "0",
//         "use3DLighting": "0",
//         "showShadow": "0",
//         "enableSmartLabels": "0",
//         "startingAngle": "310",
//         "showPercentValues": "0",
//         "showLegend": "1",
//         "legendShadow": "0",
//         "legendBorderAlpha": "0",
//         "defaultCenterLabel": "Languages I Know",
//         "centerLabel": "$label",
//         "centerLabelBold": "1",
//         "showTooltip": "1",
//         "decimals": "0",
//         "captionFontSize": "14",
//         "subcaptionFontSize": "14",
//         "subcaptionFontBold": "0",
//         "useDataPlotColorForLabels": "0",
//         "showHoverEffect": "1",
//         "toolTipBgColor": "#000000",
//         "toolTipBorderColor": "#E5E5E5",
//         "toolTipColor": "#FFFFFF"
//                     },
//                     "data": [
//         {
//             "label": "JAVA, C#",
//             "value": "80",
//             "toolText": "Advanced"
//         },
//         {
//             "label": "HTML5, CSS3, JS",
//             "value": "100",
//             "toolText": "Expert"

//         },
//         {
//             "label": "Verilog, C++, SQL Queries",
//             "value": "40",
//             "toolText": "Working Knowledge"
//         }
//     ]
//                 }
//             });
//         });     


var lang = {
  "html": "100%",
  "css": "90%",
  "javascript": "70%",
  "java": "55%",
  "angular": "65%",
  "c": "65%"
};

var multiply = 4;

$.each( lang, function( language, pourcent) {

  var delay = 700;
  
  setTimeout(function() {
    $('#'+language+'-pourcent').html(pourcent);
  },delay*multiply);
  
  multiply++;

});


 