am5.ready(function () {


  var root = am5.Root.new("chartdiv1");


  root.setThemes([
    am5themes_Animated.new(root)
  ]);



  var chart = root.container.children.push(am5xy.XYChart.new(root, {
    panX: true,
    panY: true,
    wheelX: "panX",
    wheelY: "zoomX",
    pinchZoomX: true
  }));

  


  var cursor = chart.set("cursor", am5xy.XYCursor.new(root, {}));
  cursor.lineY.set("visible", false);



  var xRenderer = am5xy.AxisRendererX.new(root, { minGridDistance: 30 });
  xRenderer.labels.template.setAll({
    rotation: -90,
    centerY: am5.p50,
    centerX: am5.p100,
    paddingRight: 15
  });

  var xAxis = chart.xAxes.push(am5xy.CategoryAxis.new(root, {
    maxDeviation: 0.3,
    categoryField: "country",
    renderer: xRenderer,
    tooltip: am5.Tooltip.new(root, {})
  }));

  var yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
    maxDeviation: 0.3,
    renderer: am5xy.AxisRendererY.new(root, {})
  }));



  var series = chart.series.push(am5xy.ColumnSeries.new(root, {
    name: "Series 1",
    xAxis: xAxis,
    yAxis: yAxis,
    valueYField: "value",
    sequencedInterpolation: true,
    categoryXField: "country",
    tooltip: am5.Tooltip.new(root, {
      labelText: "{valueY}"
    })
  }));

  series.columns.template.setAll({ cornerRadiusTL: 5, cornerRadiusTR: 5 });
  series.columns.template.adapters.add("fill", function (fill, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });

  series.columns.template.adapters.add("stroke", function (stroke, target) {
    return chart.get("colors").getIndex(series.columns.indexOf(target));
  });


  // Set data
  var data = [{
    country: "2016",
    value: 150
  }, {
    country: "2017",
    value: 200
  }, {
    country: "2019",
    value: 350
  }, {
    country: "2020",
    value: 390
  }, {
    country: "2021",
    value: 413
  }, {
    country: "2022",
    value: 500
  
  }];

  xAxis.data.setAll(data);
  series.data.setAll(data);

  

  series.appear(1000);
  chart.appear(1000, 100);

});