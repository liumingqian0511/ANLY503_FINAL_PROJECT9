var gd = document.getElementById('myDiv');

var categoricalDimensionLabels = [
'Platform',
'Publisher',
'Developer',
'Category',
'Rating'
];

d3.csv(
'https://raw.githubusercontent.com/XinXiang0307/ANLY503/main/cleaned_video_game.csv',
function(gameData) {
    // Preprocess Data
    var Critic_Score = gameData.map(function(row) { return row['Critic_Score'] });
    var User_Score = gameData.map(function(row) { return row['User_Score'] });

    var categoricalDimensions = categoricalDimensionLabels.map(
    function(dimLabel) {
        // Extract column
        var values = gameData.map(function(row) {return row[dimLabel]});

        return {
        values: values,
        label: dimLabel
        };
    }
    );

    // Colors
    var color = new Int8Array(gameData.length);
    var colorscale = [[0, '#D3D3D3'], [0.33, '#D3D3D3'],
                    [0.33, '#0FDDE5'], [0.66, '#0FDDE5'],
                    [0.66, '#F77670'], [1.0, '#F77670']];

    // Layout
    var layout = {
    width: 800,
    height: 1000,
    xaxis: {title: 'User Score'},
    yaxis: {domain: [0.6, 1], title: 'Critic Score'},
    dragmode: 'lasso',
    hovermode: 'closest'
    };

    // Build Traces
    var traces = [
    {type: 'scatter',
    x: User_Score,
    y: Critic_Score,
    marker: {color: color,
                colorscale: colorscale,
                cmin: -0.5,
                cmax: 2.5,
                showscale: true,
                colorbar: {tickvals: [0, 1, 2],
                        ticktext: ['Initial','Choice 1', 'Choice 2']}},
    mode: 'markers',
    },
    {type: 'parcats',
    domain: {y: [0, 0.5]},
    dimensions:categoricalDimensions,
    line: {
        colorscale: colorscale,
        cmin: -0.5,
        cmax: 2.5,
        color: color,
        shape: 'hspline'},
    labelfont: {size: 16},
    margin: {t: 10, r: 20, b: 20, l: 20}
    }
    ];

    // Make plot
    Plotly.newPlot('myDiv', traces, layout);

    // Update color on selection and click
    var update_color = function(points_data) {
    var new_color = color;
    var color_value = document.querySelector('input[name="rate"]:checked').value;
    console.log(color_value);
    var selection = []
    for(var i = 0; i < points_data.points.length; i++) {
        new_color[points_data.points[i].pointNumber] = color_value;
        selection.push(points_data.points[i].pointNumber);
    }

    // Update selected points in scatter plot
    Plotly.restyle('myDiv', {'marker.color': [new_color]}, 0);

    // Update color of selected paths in parallel categories diagram
    Plotly.restyle('myDiv', {'line.color':[new_color]}, 1)
            };

            gd.on('plotly_selected', update_color);
            gd.on('plotly_click', update_color);
        });
