var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Infrastruktur_1 = new ol.format.GeoJSON();
var features_Infrastruktur_1 = format_Infrastruktur_1.readFeatures(json_Infrastruktur_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Infrastruktur_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Infrastruktur_1.addFeatures(features_Infrastruktur_1);
var lyr_Infrastruktur_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Infrastruktur_1, 
                style: style_Infrastruktur_1,
                popuplayertitle: "Infrastruktur",
                interactive: true,
                title: '<img src="styles/legend/Infrastruktur_1.png" /> Infrastruktur'
            });
var format_BatasIUP_2 = new ol.format.GeoJSON();
var features_BatasIUP_2 = format_BatasIUP_2.readFeatures(json_BatasIUP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BatasIUP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BatasIUP_2.addFeatures(features_BatasIUP_2);
var lyr_BatasIUP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BatasIUP_2, 
                style: style_BatasIUP_2,
                popuplayertitle: "Batas IUP",
                interactive: true,
                title: '<img src="styles/legend/BatasIUP_2.png" /> Batas IUP'
            });
var format_BadanJalan_3 = new ol.format.GeoJSON();
var features_BadanJalan_3 = format_BadanJalan_3.readFeatures(json_BadanJalan_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BadanJalan_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BadanJalan_3.addFeatures(features_BadanJalan_3);
var lyr_BadanJalan_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BadanJalan_3, 
                style: style_BadanJalan_3,
                popuplayertitle: "Badan Jalan",
                interactive: false,
                title: '<img src="styles/legend/BadanJalan_3.png" /> Badan Jalan'
            });
var format_HR1_4 = new ol.format.GeoJSON();
var features_HR1_4 = format_HR1_4.readFeatures(json_HR1_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HR1_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HR1_4.addFeatures(features_HR1_4);
var lyr_HR1_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HR1_4, 
                style: style_HR1_4,
                popuplayertitle: "HR1",
                interactive: true,
                title: '<img src="styles/legend/HR1_4.png" /> HR1'
            });
var format_Pit_5 = new ol.format.GeoJSON();
var features_Pit_5 = format_Pit_5.readFeatures(json_Pit_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pit_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pit_5.addFeatures(features_Pit_5);
var lyr_Pit_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pit_5, 
                style: style_Pit_5,
                popuplayertitle: "Pit",
                interactive: true,
                title: '<img src="styles/legend/Pit_5.png" /> Pit'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Infrastruktur_1.setVisible(true);lyr_BatasIUP_2.setVisible(true);lyr_BadanJalan_3.setVisible(true);lyr_HR1_4.setVisible(true);lyr_Pit_5.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Infrastruktur_1,lyr_BatasIUP_2,lyr_BadanJalan_3,lyr_HR1_4,lyr_Pit_5];
lyr_Infrastruktur_1.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Dok': 'Dok', });
lyr_BatasIUP_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_BadanJalan_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', });
lyr_HR1_4.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Lenght': 'Lenght', });
lyr_Pit_5.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'Description': 'Description', 'Dok': 'Dok', });
lyr_Infrastruktur_1.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Dok': 'ExternalResource', });
lyr_BatasIUP_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_BadanJalan_3.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', });
lyr_HR1_4.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Lenght': 'TextEdit', });
lyr_Pit_5.set('fieldImages', {'fid': 'TextEdit', 'Id': 'TextEdit', 'Description': 'TextEdit', 'Dok': 'ExternalResource', });
lyr_Infrastruktur_1.set('fieldLabels', {'fid': 'hidden field', 'Id': 'no label', 'Description': 'hidden field', 'Dok': 'hidden field', });
lyr_BatasIUP_2.set('fieldLabels', {'fid': 'hidden field', 'Name': 'hidden field', 'description': 'hidden field', 'timestamp': 'hidden field', 'begin': 'hidden field', 'end': 'hidden field', 'altitudeMode': 'hidden field', 'tessellate': 'hidden field', 'extrude': 'hidden field', 'visibility': 'hidden field', 'drawOrder': 'hidden field', 'icon': 'hidden field', });
lyr_BadanJalan_3.set('fieldLabels', {'fid': 'hidden field', 'Id': 'hidden field', 'Description': 'hidden field', });
lyr_HR1_4.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'Description': 'no label', 'Lenght': 'inline label - always visible', });
lyr_Pit_5.set('fieldLabels', {'fid': 'hidden field', 'Id': 'no label', 'Description': 'no label', 'Dok': 'no label', });
lyr_Pit_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});