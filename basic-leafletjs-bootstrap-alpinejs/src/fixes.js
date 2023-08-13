//Fixes  to Default Marker Icon  Imports
import shadowIconPng from "leaflet/dist/images/marker-shadow.png";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import retinaIconPng from "leaflet/dist/images/marker-icon-2x.png";


delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl: retinaIconPng,
    iconUrl: markerIconPng,
    shadowUrl: shadowIconPng,
});

// An alternative is to mirror all the marker images to 'dist/images' using the CopyWebPlugin