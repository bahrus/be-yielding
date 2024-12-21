import {BeBound} from 'be-bound/be-bound.js';
/** @import {Actions, PAP, AllProps, AP, BAP, Binding} from './ts-refs/be-bound/types.d.ts' */;

class BeYielding extends BeBound{
    addLocalAbs(localAbsObj, remoteShareObj){}

    /**
     * 
     * @param {BAP} self 
     * @param {Binding} binding 
     * @returns 
     */
       async reconcileValues(self, binding) {
        const { enhancedElement } = self;
        const { localAbsObj, localShareObj, remoteAbsObj, remoteShareObj} = binding;
        const localVal = await localAbsObj.getValue();
        remoteShareObj.setValue(localVal);
    }

}

await BeYielding.bootUp();
export { BeYielding };