import React, { Component } from 'react';

/*
    GoogleMaps api can already render onto screen
*/
class GoogleMap extends Component {
    /*
        Called after component rendered to screen
    */
    componentDidMount() {
        //create embedded google map inside the document
        new google.maps.Map(this.refs.map, {
            zoom: 12,
            center: {
                lat:this.props.lat,
                lng: this.props.lon
            }
        });
    }
    render() {
        return (
            <div ref="map" />
        )
    }
}

export default GoogleMap;