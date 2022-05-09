import React from "react";

const ShortCuts: React.FC = () => {
    return (
        <div className="min-w-min px-2">
            Below are the shortcuts that I am currently using.
            <section className="my-4">
                <h1 className="font-semibold text-l">Editing</h1>
                <div className="py-4 lg:px-4">
                    <table className="table-fixed divide-y divide-gray-300 border-collapse border-2 rounded-lg min-w-full">
                        <thead className="text-left bg-gray-50">
                            <tr>
                                <th className="font-semibold">Commands</th>
                                <th className="font-semibold">Shortcut</th>
                            </tr>
                        </thead>
                        <tbody className="text-left divide-gray-500">
                            <tr>
                                <td>Copy line</td>
                                <td>⇧⌥↓ / ⇧⌥↑</td>
                            </tr>
                            <tr>
                                <td>Move line</td>
                                <td>⌥↓ / ⌥↑</td>
                            </tr>
                            <tr>
                                <td>Delete line</td>
                                <td>⌘Del</td>
                            </tr>
                            <tr>
                                <td>Select all occurences</td>
                                <td>⇧⌘L</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <h1 className="font-semibold text-l">Navigating</h1>
                <div className="py-4 lg:px-4">
                    <table className="table-fixed divide-y divide-gray-300 border-collapse border-2 rounded-lg min-w-full">
                        <thead className="text-left bg-gray-50">
                            <tr>
                                <th className="font-semibold">Commands</th>
                                <th className="font-semibold">Shortcut</th>
                            </tr>
                        </thead>
                        <tbody className="text-left divide-gray-500">
                            <tr>
                                <td>Global find</td>
                                <td>⇧⌘F</td>
                            </tr>
                            <tr>
                                <td>Move line</td>
                                <td>option + cmd + down</td>
                            </tr>
                            <tr>
                                <td>Delete line</td>
                                <td>option + cmd + down</td>
                            </tr>
                            <tr>
                                <td>Select occurences</td>
                                <td>option + cmd + down</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ShortCuts;
