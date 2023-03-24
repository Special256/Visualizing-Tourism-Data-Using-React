import React from 'react'
import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/map-marker'

const LocationPin = ({ text }) => (
    <div>
        <Icon icon={locationIcon} className="pin-icon" />
        <p>{text}</p>
    </div>
)

export default LocationPin