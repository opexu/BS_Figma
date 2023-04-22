figma.showUI( __html__, {
    width: 400,
    height: 500
});

figma.on("selectionchange", () => {
    console.log('selection change: ')
    const selection = figma.currentPage.selection[0];
    console.log('selection: ', selection)
    figma.ui.postMessage({
        type: 'vue',
        selection,
    })
}),

figma.on("close", () => figma.closePlugin() );

figma.ui.onmessage = msg => {
    switch( msg.type ){
        case 'create-rectangles': {
            const nodes: SceneNode[] = [];
            for (let i = 0; i < msg.count; i++) {
                const rect = figma.createRectangle();
                rect.x = i * 150;
                rect.fills = [{ type: 'SOLID', color: { r: 1, g: 0.5, b: 0 } }];
                figma.currentPage.appendChild(rect);
                nodes.push(rect);
            }
            figma.currentPage.selection = nodes;
            figma.viewport.scrollAndZoomIntoView(nodes);
            break;
        }
        case 'camera': {
            console.log('camera', JSON.parse(msg.camera));
            break;
        }
        case 'selected-text': {
            console.log('selectedText: ', msg.selectedText)
            break;
        }
    }
    
};
