// store.tsx
import { useAtom } from 'jotai';
import { atomWithStorage, createJSONStorage } from 'jotai/utils'
export const addrAtom = atomWithStorage('addr', "");