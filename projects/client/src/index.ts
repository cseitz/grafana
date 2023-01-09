import axios from 'axios';

export const bruh = 'hi there';

console.log(axios);

import GrafanaPrometheus from './sources/prometheus.js';
import GrafanaLoki from './sources/loki.js';

// export namespace Grafana {
//     export const Prometheus = GrafanaPrometheus;
//     export const Loki = GrafanaLoki;
// }

export class Grafana {
    static Prometheus = GrafanaPrometheus;
    static Loki = GrafanaLoki;
}

const uuh = new Grafana.Loki();

console.log({ uuh })