import React, { useContext, useEffect } from 'react';
import { AppContext } from '../AppState';

const MouseListener = () => {
    const { setMouseEvents } = useContext(AppContext)
    useEffect(() => {
        const handleMouseEvents = (event) => {
            switch (event.type) {

                case 'mousemove':
                    setMouseEvents(prev => ({
                        ...prev,
                        clientX: event.clientX,
                        clientY: event.clientY,
                        offsetWidth: event.target.offsetWidth,
                        offsetHeight: event.target.offsetHeight
                    }))
                    break;
                case 'mousedown':
                    setMouseEvents(prev => ({
                        ...prev,
                        clicking: true,
                        startPositionX:event.clientX,
                        startPositionY:event.clientY,
                    }))
                    break;
                case 'mouseup':
                    setMouseEvents(prev => ({
                        ...prev,
                        clicking: false,
                        startPositionX:0,
                        startPositionY:0,
                    }))
                    break;
                default:
                    break;
            }
        };

        // Add event listeners for mouse events
        document.addEventListener('mousemove', handleMouseEvents);
        document.addEventListener('mousedown', handleMouseEvents);
        document.addEventListener('mouseup', handleMouseEvents);
        // document.addEventListener('click', handleMouseEvents);

        // Clean up event listeners
        return () => {
            // document.removeEventListener('mousemove', handleMouseEvents);
            document.removeEventListener('mousedown', handleMouseEvents);
            document.removeEventListener('mouseup', handleMouseEvents);
            // document.removeEventListener('click', handleMouseEvents);
        };
    }, []);

    return <></>;
};

export default MouseListener;