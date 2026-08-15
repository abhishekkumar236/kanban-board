import React, { ComponentType } from "react";

export interface DraggableProps {
    children: React.ReactNode;
}

function Draggable<>(components: ComponentType) {
    return <div>Draggable</div>;
}

export default Draggable;
