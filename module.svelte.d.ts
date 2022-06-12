import { SvelteComponentTyped } from "svelte";
declare const __propDef: {
    props: {
        condensed?: boolean | undefined;
    };
    events: {
        [evt: string]: CustomEvent<any>;
    };
    slots: {};
};
export declare type ModuleProps = typeof __propDef.props;
export declare type ModuleEvents = typeof __propDef.events;
export declare type ModuleSlots = typeof __propDef.slots;
export default class Module extends SvelteComponentTyped<ModuleProps, ModuleEvents, ModuleSlots> {
}
export {};
