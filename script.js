// Define the map syle (OpenStreetMap raster tiles)
const style = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://a.tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution: '&copy; OpenStreetMap Contributors',
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: 'osm',
      type: 'raster',
      // override raster styles here to change image render
      paint: {
        'raster-contrast': 0.3,
        'raster-brightness-min': 0.1,
        'raster-brightness-max': 0.3,
        'raster-saturation': -1,
      },
      source: 'osm',
    },
  ],
};

// Initialise the map
const map = new maplibregl.Map({
  container: 'map',
  style: style,
  center: [-98, 38],
  zoom: 3,
});
