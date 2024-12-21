// @ts-check
import { MountObserver, seed, BeHive } from 'be-hive/be-hive.js';
import { emc as baseEMC } from 'be-bound/emc.js';
/** @import {AP} from './ts-refs/be-bound/types.d.ts'; */
/** @import {EMC} from './ts-refs/trans-render/be/types.d.ts' */

/**
 * @type {EMC<any, AP>}
 */
export const emc = {
    ...baseEMC,
    base: '🏳️',
    enhPropKey: '🏳️',
    importEnh: async () => {
        const { BeYielding } = await import('./be-yielding.js');
        return BeYielding;
    }
};
const mose = seed(emc);
MountObserver.synthesize(document, BeHive, mose);