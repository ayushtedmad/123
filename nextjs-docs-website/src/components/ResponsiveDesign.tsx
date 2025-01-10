import React from 'react';

const ResponsiveDesign: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-4">
            <h1 className="text-2xl font-bold">Responsive Design Example</h1>
            <p className="mt-4 text-center">
                This is a demonstration of responsive design principles. Resize the window to see how the layout adapts to different screen sizes.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl">Column 1</h2>
                    <p>This column will adjust based on screen size.</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl">Column 2</h2>
                    <p>This column will adjust based on screen size.</p>
                </div>
                <div className="p-4 border rounded shadow">
                    <h2 className="text-xl">Column 3</h2>
                    <p>This column will adjust based on screen size.</p>
                </div>
            </div>
        </div>
    );
};

export default ResponsiveDesign;