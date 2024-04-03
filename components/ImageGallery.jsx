"use client"
import ImageGallery from "react-image-gallery";
import React from "react";

class MyGallery extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <ImageGallery
            {...this.props} />;
    }
}

export default MyGallery;