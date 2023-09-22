import MixedVinyl from './vinyl.js';
import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';
import {fileOpen} from 'browser-fs-access';

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.input').forEach(element => {
        element.addEventListener('keyup', onChanged);
    })
});

function onChanged() {
    output(
        document.getElementById('title').value,
        document.getElementById('year').value,
    );
}

function output(title, year) {
    const mix = new MixedVinyl(title, year);
    document.getElementById('output').innerHTML = _.camelCase(mix.describe());
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('browse').addEventListener('click', async () => {
        const file = await fileOpen({
            mimeTypes: ['text/plain'],
        });
        document.getElementById('content').innerHTML = await file.text();
    });
});
