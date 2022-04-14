import React, { useRef } from 'react';
import FileSaver from 'file-saver';
const DataToFile = ({ dataToDownload }) => {
    const dataFileName = useRef('');

    const handleDownload = () => {
        const fileName = dataFileName.current.value;
        if (fileName.length === 0) {
            alert('You must name your file');
        }

        const dataToJson = [JSON.stringify(dataToDownload)];
        let blob = new Blob(dataToJson, {
            type: 'text/plain;charset=utf-8',
        });
        FileSaver.saveAs(blob, `${fileName}.json`);
    };
    return (
        <div>
            <h3>Download list</h3>
            <label htmlFor={'fileName'}>
                First Name:
                <input id={'fileName'} type="text" ref={dataFileName} />
            </label>
            <button onClick={handleDownload}>DownloadData</button>
        </div>
    );
};
export default DataToFile;
