import React from 'react';
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api';
import { Location } from '../types';

const CONTAINER_STYLE = {
    width: '100%',
    height: '100%',
    borderRadius: '0.75rem',
};

const DEFAULT_CENTER = {
    lat: 40.7128,
    lng: -74.0060, // NYC Default
};

interface MapProps {
    markers?: { id: string; position: Location; title?: string; type?: string }[];
    center?: Location;
}

const API_KEY = import.meta.env.VITE_GOOGLE_MAPS_KEY || '';

export const MapPreview: React.FC<MapProps> = ({ markers = [], center = DEFAULT_CENTER }) => {
    const { isLoaded, loadError } = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: API_KEY,
    });

    if (!API_KEY) {
        return (
            <div className="glass-panel" style={{ height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: '1rem', color: 'var(--color-text-secondary)' }}>
                <h3 className="text-warning">Map Configuration Required</h3>
                <p>Please add VITE_GOOGLE_MAPS_KEY to your .env file.</p>
            </div>
        );
    }

    if (loadError) {
        return <div className="glass-panel text-critical p-4">Map failed to load.</div>;
    }

    return isLoaded ? (
        <div style={{ height: '300px', width: '100%', borderRadius: '12px', overflow: 'hidden' }}>
            <GoogleMap
                mapContainerStyle={CONTAINER_STYLE}
                center={center}
                zoom={12}
                options={{
                    disableDefaultUI: true,
                    styles: [ /* Dark Mode Map Styles could go here */]
                }}
            >
                {markers.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.position.lat, lng: marker.position.lng }}
                        title={marker.title}
                    />
                ))}
            </GoogleMap>
        </div>
    ) : (
        <div className="glass-panel p-4">Loading Map...</div>
    );
};
