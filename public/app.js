import MixedVinyl from './vinyl.js';
import _ from 'https://cdn.jsdelivr.net/npm/lodash@4.17.21/+esm';

const mix = new MixedVinyl('Awesome Mix Vol. 1', 2014);
console.log(_.camelCase(mix.describe()));
