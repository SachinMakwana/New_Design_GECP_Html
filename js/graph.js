function year22(){
    am5.ready(function() {
                
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            endAngle: 270
          })
        );
        
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270
          })
        );
        
        series.states.create("hidden", {
          endAngle: -90
        });
        
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        
        
            series.data.setAll([{
                category: "civil",
                value: 501.9
              }, {
                category: "EC",
                value: 301.9
              }, {
                category: "EE",
                value: 201.1
              }, {
                category: "cse",
                value: 165.8
              }, {
                category: "MECHANICAL",
                value: 139.9
              }]);
              series.appear(1000, 100);
        
        
        });
}
  
function month(){
    am5.ready(function() {
                
        // Create root element
        // https://www.amcharts.com/docs/v5/getting-started/#Root_element
        var root = am5.Root.new("chartdiv");
        
        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
          am5themes_Animated.new(root)
        ]);
        
        // Create chart
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/
        var chart = root.container.children.push(
          am5percent.PieChart.new(root, {
            endAngle: 270
          })
        );
        
        // Create series
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Series
        var series = chart.series.push(
          am5percent.PieSeries.new(root, {
            valueField: "value",
            categoryField: "category",
            endAngle: 270
          })
        );
        
        series.states.create("hidden", {
          endAngle: -90
        });
        
        // Set data
        // https://www.amcharts.com/docs/v5/charts/percent-charts/pie-chart/#Setting_data
        
        
            series.data.setAll([{
                category: "NISHIKA",
                value: 501.9
              }, {
                category: "EC",
                value: 301.9
              }, {
                category: "EE",
                value: 201.1
              }, {
                category: "NAMRATA",
                value: 165.8
              }, {
                category: "MECHANICAL",
                value: 139.9
              }]);
              series.appear(1000, 100);
        
        
        });
}
