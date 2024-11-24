export interface DirectionsResponse {
    routes: any;
    type:     string;
    features: Feature[];
}

export interface Feature {
    type:       string;
    id:         number;
    geometry:   Geometry;
    properties: Properties;
}

export interface Geometry {
    type:        string;
    coordinates: number[];
}

export interface Properties {
    type?:        string;
    min_height?:  number;
    iso_3166_2:   string;
    height?:      number;
    underground?: string;
    extrude?:     string;
    iso_3166_1:   string;
    tilequery:    Tilequery;
    house_num?:   string;
    structure?:   string;
    oneway?:      string;
    len?:         number;
    class?:       string;
}

export interface Tilequery {
    distance: number;
    geometry: string;
    layer:    string;
}
