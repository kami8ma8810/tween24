import { Updater } from "./Updater";
export declare class TransformUpdater implements Updater {
    static className: string;
    private static _chache;
    private _target;
    private _matrix;
    private _x;
    private _y;
    private _scaleX;
    private _scaleY;
    private _skewX;
    private _skewY;
    private _rotation;
    private _updateX;
    private _updateY;
    private _updateScaleX;
    private _updateScaleY;
    private _updateSkewX;
    private _updateSkewY;
    private _updateRotation;
    constructor(target: any);
    init(): void;
    addProp(key: string, value: number): void;
    addPropStr(key: string, value: string): void;
    update(progress: number): void;
    overwrite(updater: TransformUpdater): void;
    complete(): void;
    toString(): string;
}
