/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { ChangeDetectionStrategy, Component, ContentChild, ContentChildren, Directive, ElementRef, Optional, ViewEncapsulation, Attribute, ChangeDetectorRef, EventEmitter, forwardRef, Inject, Input, Output, ViewChild, NgModule } from '@angular/core';
import { MatLine, MatLineSetter, mixinDisableRipple, MatCommonModule, MatLineModule, MatPseudoCheckboxModule, MatRippleModule } from '@angular/material/core';
import { FocusKeyManager } from '@angular/cdk/a11y';
import { coerceBooleanProperty } from '@angular/cdk/coercion';
import { SelectionModel } from '@angular/cdk/collections';
import { SPACE, ENTER, HOME, END, UP_ARROW, DOWN_ARROW, A } from '@angular/cdk/keycodes';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MatDividerModule } from '@angular/material/divider';

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
class MatListBase {
}
/** @type {?} */
const _MatListMixinBase = mixinDisableRipple(MatListBase);
/**
 * \@docs-private
 */
class MatListItemBase {
}
/** @type {?} */
const _MatListItemMixinBase = mixinDisableRipple(MatListItemBase);
class MatNavList extends _MatListMixinBase {
}
MatNavList.decorators = [
    { type: Component, args: [{selector: 'mat-nav-list',
                exportAs: 'matNavList',
                host: {
                    'role': 'navigation',
                    'class': 'mat-nav-list'
                },
                template: "<ng-content></ng-content>",
                styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{margin:0}.mat-list,.mat-nav-list,.mat-selection-list{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{height:48px;line-height:16px}.mat-list .mat-subheader:first-child,.mat-nav-list .mat-subheader:first-child,.mat-selection-list .mat-subheader:first-child{margin-top:-8px}.mat-list .mat-list-item,.mat-list .mat-list-option,.mat-nav-list .mat-list-item,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-item,.mat-selection-list .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent}.mat-list .mat-list-item .mat-list-item-content,.mat-list .mat-list-option .mat-list-item-content,.mat-nav-list .mat-list-item .mat-list-item-content,.mat-nav-list .mat-list-option .mat-list-item-content,.mat-selection-list .mat-list-item .mat-list-item-content,.mat-selection-list .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list .mat-list-item .mat-list-item-content-reverse,.mat-list .mat-list-option .mat-list-item-content-reverse,.mat-nav-list .mat-list-item .mat-list-item-content-reverse,.mat-nav-list .mat-list-option .mat-list-item-content-reverse,.mat-selection-list .mat-list-item .mat-list-item-content-reverse,.mat-selection-list .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list .mat-list-item .mat-list-item-ripple,.mat-list .mat-list-option .mat-list-item-ripple,.mat-nav-list .mat-list-item .mat-list-item-ripple,.mat-nav-list .mat-list-option .mat-list-item-ripple,.mat-selection-list .mat-list-item .mat-list-item-ripple,.mat-selection-list .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list .mat-list-item.mat-list-item-with-avatar,.mat-list .mat-list-option.mat-list-item-with-avatar,.mat-nav-list .mat-list-item.mat-list-item-with-avatar,.mat-nav-list .mat-list-option.mat-list-item-with-avatar,.mat-selection-list .mat-list-item.mat-list-item-with-avatar,.mat-selection-list .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list .mat-list-item.mat-2-line,.mat-list .mat-list-option.mat-2-line,.mat-nav-list .mat-list-item.mat-2-line,.mat-nav-list .mat-list-option.mat-2-line,.mat-selection-list .mat-list-item.mat-2-line,.mat-selection-list .mat-list-option.mat-2-line{height:72px}.mat-list .mat-list-item.mat-3-line,.mat-list .mat-list-option.mat-3-line,.mat-nav-list .mat-list-item.mat-3-line,.mat-nav-list .mat-list-option.mat-3-line,.mat-selection-list .mat-list-item.mat-3-line,.mat-selection-list .mat-list-option.mat-3-line{height:88px}.mat-list .mat-list-item.mat-multi-line,.mat-list .mat-list-option.mat-multi-line,.mat-nav-list .mat-list-item.mat-multi-line,.mat-nav-list .mat-list-option.mat-multi-line,.mat-selection-list .mat-list-item.mat-multi-line,.mat-selection-list .mat-list-option.mat-multi-line{height:auto}.mat-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list .mat-list-option.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-option.mat-multi-line .mat-list-item-content,.mat-selection-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-selection-list .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list .mat-list-item .mat-list-text,.mat-list .mat-list-option .mat-list-text,.mat-nav-list .mat-list-item .mat-list-text,.mat-nav-list .mat-list-option .mat-list-text,.mat-selection-list .mat-list-item .mat-list-text,.mat-selection-list .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list .mat-list-item .mat-list-text>*,.mat-list .mat-list-option .mat-list-text>*,.mat-nav-list .mat-list-item .mat-list-text>*,.mat-nav-list .mat-list-option .mat-list-text>*,.mat-selection-list .mat-list-item .mat-list-text>*,.mat-selection-list .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list .mat-list-item .mat-list-text:empty,.mat-list .mat-list-option .mat-list-text:empty,.mat-nav-list .mat-list-item .mat-list-text:empty,.mat-nav-list .mat-list-option .mat-list-text:empty,.mat-selection-list .mat-list-item .mat-list-text:empty,.mat-selection-list .mat-list-option .mat-list-text:empty{display:none}.mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list .mat-list-item .mat-list-avatar,.mat-list .mat-list-option .mat-list-avatar,.mat-nav-list .mat-list-item .mat-list-avatar,.mat-nav-list .mat-list-option .mat-list-avatar,.mat-selection-list .mat-list-item .mat-list-avatar,.mat-selection-list .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-nav-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-nav-list .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-selection-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-selection-list .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list .mat-list-item .mat-list-icon,.mat-list .mat-list-option .mat-list-icon,.mat-nav-list .mat-list-item .mat-list-icon,.mat-nav-list .mat-list-option .mat-list-icon,.mat-selection-list .mat-list-item .mat-list-icon,.mat-selection-list .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-nav-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-nav-list .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-selection-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-selection-list .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list .mat-list-item .mat-divider,.mat-list .mat-list-option .mat-divider,.mat-nav-list .mat-list-item .mat-divider,.mat-nav-list .mat-list-option .mat-divider,.mat-selection-list .mat-list-item .mat-divider,.mat-selection-list .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list .mat-list-item .mat-divider,[dir=rtl] .mat-list .mat-list-option .mat-divider,[dir=rtl] .mat-nav-list .mat-list-item .mat-divider,[dir=rtl] .mat-nav-list .mat-list-option .mat-divider,[dir=rtl] .mat-selection-list .mat-list-item .mat-divider,[dir=rtl] .mat-selection-list .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list .mat-list-item .mat-divider.mat-divider-inset,.mat-list .mat-list-option .mat-divider.mat-divider-inset,.mat-nav-list .mat-list-item .mat-divider.mat-divider-inset,.mat-nav-list .mat-list-option .mat-divider.mat-divider-inset,.mat-selection-list .mat-list-item .mat-divider.mat-divider-inset,.mat-selection-list .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list[dense],.mat-nav-list[dense],.mat-selection-list[dense]{padding-top:4px;display:block}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{height:40px;line-height:8px}.mat-list[dense] .mat-subheader:first-child,.mat-nav-list[dense] .mat-subheader:first-child,.mat-selection-list[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list[dense] .mat-list-item,.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent}.mat-list[dense] .mat-list-item .mat-list-item-content,.mat-list[dense] .mat-list-option .mat-list-item-content,.mat-nav-list[dense] .mat-list-item .mat-list-item-content,.mat-nav-list[dense] .mat-list-option .mat-list-item-content,.mat-selection-list[dense] .mat-list-item .mat-list-item-content,.mat-selection-list[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list[dense] .mat-list-option .mat-list-item-content-reverse,.mat-nav-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-nav-list[dense] .mat-list-option .mat-list-item-content-reverse,.mat-selection-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-selection-list[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list[dense] .mat-list-item .mat-list-item-ripple,.mat-list[dense] .mat-list-option .mat-list-item-ripple,.mat-nav-list[dense] .mat-list-item .mat-list-item-ripple,.mat-nav-list[dense] .mat-list-option .mat-list-item-ripple,.mat-selection-list[dense] .mat-list-item .mat-list-item-ripple,.mat-selection-list[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list[dense] .mat-list-item.mat-2-line,.mat-list[dense] .mat-list-option.mat-2-line,.mat-nav-list[dense] .mat-list-item.mat-2-line,.mat-nav-list[dense] .mat-list-option.mat-2-line,.mat-selection-list[dense] .mat-list-item.mat-2-line,.mat-selection-list[dense] .mat-list-option.mat-2-line{height:60px}.mat-list[dense] .mat-list-item.mat-3-line,.mat-list[dense] .mat-list-option.mat-3-line,.mat-nav-list[dense] .mat-list-item.mat-3-line,.mat-nav-list[dense] .mat-list-option.mat-3-line,.mat-selection-list[dense] .mat-list-item.mat-3-line,.mat-selection-list[dense] .mat-list-option.mat-3-line{height:76px}.mat-list[dense] .mat-list-item.mat-multi-line,.mat-list[dense] .mat-list-option.mat-multi-line,.mat-nav-list[dense] .mat-list-item.mat-multi-line,.mat-nav-list[dense] .mat-list-option.mat-multi-line,.mat-selection-list[dense] .mat-list-item.mat-multi-line,.mat-selection-list[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content,.mat-selection-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-selection-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list[dense] .mat-list-item .mat-list-text,.mat-list[dense] .mat-list-option .mat-list-text,.mat-nav-list[dense] .mat-list-item .mat-list-text,.mat-nav-list[dense] .mat-list-option .mat-list-text,.mat-selection-list[dense] .mat-list-item .mat-list-text,.mat-selection-list[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list[dense] .mat-list-item .mat-list-text>*,.mat-list[dense] .mat-list-option .mat-list-text>*,.mat-nav-list[dense] .mat-list-item .mat-list-text>*,.mat-nav-list[dense] .mat-list-option .mat-list-text>*,.mat-selection-list[dense] .mat-list-item .mat-list-text>*,.mat-selection-list[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list[dense] .mat-list-item .mat-list-text:empty,.mat-list[dense] .mat-list-option .mat-list-text:empty,.mat-nav-list[dense] .mat-list-item .mat-list-text:empty,.mat-nav-list[dense] .mat-list-option .mat-list-text:empty,.mat-selection-list[dense] .mat-list-item .mat-list-text:empty,.mat-selection-list[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list[dense] .mat-list-item .mat-list-avatar,.mat-list[dense] .mat-list-option .mat-list-avatar,.mat-nav-list[dense] .mat-list-item .mat-list-avatar,.mat-nav-list[dense] .mat-list-option .mat-list-avatar,.mat-selection-list[dense] .mat-list-item .mat-list-avatar,.mat-selection-list[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list[dense] .mat-list-item .mat-list-icon,.mat-list[dense] .mat-list-option .mat-list-icon,.mat-nav-list[dense] .mat-list-item .mat-list-icon,.mat-nav-list[dense] .mat-list-option .mat-list-icon,.mat-selection-list[dense] .mat-list-item .mat-list-icon,.mat-selection-list[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list[dense] .mat-list-item .mat-divider,.mat-list[dense] .mat-list-option .mat-divider,.mat-nav-list[dense] .mat-list-item .mat-divider,.mat-nav-list[dense] .mat-list-option .mat-divider,.mat-selection-list[dense] .mat-list-item .mat-divider,.mat-selection-list[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list[dense] .mat-list-option .mat-divider,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-divider,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-divider.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-divider.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (hover:none){.mat-list-option:hover,.mat-nav-list .mat-list-item:hover{background:0 0}}"],
                inputs: ['disableRipple'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
class MatList extends _MatListMixinBase {
}
MatList.decorators = [
    { type: Component, args: [{selector: 'mat-list, mat-action-list',
                exportAs: 'matList',
                template: "<ng-content></ng-content>",
                host: { 'class': 'mat-list' },
                styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{margin:0}.mat-list,.mat-nav-list,.mat-selection-list{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{height:48px;line-height:16px}.mat-list .mat-subheader:first-child,.mat-nav-list .mat-subheader:first-child,.mat-selection-list .mat-subheader:first-child{margin-top:-8px}.mat-list .mat-list-item,.mat-list .mat-list-option,.mat-nav-list .mat-list-item,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-item,.mat-selection-list .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent}.mat-list .mat-list-item .mat-list-item-content,.mat-list .mat-list-option .mat-list-item-content,.mat-nav-list .mat-list-item .mat-list-item-content,.mat-nav-list .mat-list-option .mat-list-item-content,.mat-selection-list .mat-list-item .mat-list-item-content,.mat-selection-list .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list .mat-list-item .mat-list-item-content-reverse,.mat-list .mat-list-option .mat-list-item-content-reverse,.mat-nav-list .mat-list-item .mat-list-item-content-reverse,.mat-nav-list .mat-list-option .mat-list-item-content-reverse,.mat-selection-list .mat-list-item .mat-list-item-content-reverse,.mat-selection-list .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list .mat-list-item .mat-list-item-ripple,.mat-list .mat-list-option .mat-list-item-ripple,.mat-nav-list .mat-list-item .mat-list-item-ripple,.mat-nav-list .mat-list-option .mat-list-item-ripple,.mat-selection-list .mat-list-item .mat-list-item-ripple,.mat-selection-list .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list .mat-list-item.mat-list-item-with-avatar,.mat-list .mat-list-option.mat-list-item-with-avatar,.mat-nav-list .mat-list-item.mat-list-item-with-avatar,.mat-nav-list .mat-list-option.mat-list-item-with-avatar,.mat-selection-list .mat-list-item.mat-list-item-with-avatar,.mat-selection-list .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list .mat-list-item.mat-2-line,.mat-list .mat-list-option.mat-2-line,.mat-nav-list .mat-list-item.mat-2-line,.mat-nav-list .mat-list-option.mat-2-line,.mat-selection-list .mat-list-item.mat-2-line,.mat-selection-list .mat-list-option.mat-2-line{height:72px}.mat-list .mat-list-item.mat-3-line,.mat-list .mat-list-option.mat-3-line,.mat-nav-list .mat-list-item.mat-3-line,.mat-nav-list .mat-list-option.mat-3-line,.mat-selection-list .mat-list-item.mat-3-line,.mat-selection-list .mat-list-option.mat-3-line{height:88px}.mat-list .mat-list-item.mat-multi-line,.mat-list .mat-list-option.mat-multi-line,.mat-nav-list .mat-list-item.mat-multi-line,.mat-nav-list .mat-list-option.mat-multi-line,.mat-selection-list .mat-list-item.mat-multi-line,.mat-selection-list .mat-list-option.mat-multi-line{height:auto}.mat-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list .mat-list-option.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-option.mat-multi-line .mat-list-item-content,.mat-selection-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-selection-list .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list .mat-list-item .mat-list-text,.mat-list .mat-list-option .mat-list-text,.mat-nav-list .mat-list-item .mat-list-text,.mat-nav-list .mat-list-option .mat-list-text,.mat-selection-list .mat-list-item .mat-list-text,.mat-selection-list .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list .mat-list-item .mat-list-text>*,.mat-list .mat-list-option .mat-list-text>*,.mat-nav-list .mat-list-item .mat-list-text>*,.mat-nav-list .mat-list-option .mat-list-text>*,.mat-selection-list .mat-list-item .mat-list-text>*,.mat-selection-list .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list .mat-list-item .mat-list-text:empty,.mat-list .mat-list-option .mat-list-text:empty,.mat-nav-list .mat-list-item .mat-list-text:empty,.mat-nav-list .mat-list-option .mat-list-text:empty,.mat-selection-list .mat-list-item .mat-list-text:empty,.mat-selection-list .mat-list-option .mat-list-text:empty{display:none}.mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list .mat-list-item .mat-list-avatar,.mat-list .mat-list-option .mat-list-avatar,.mat-nav-list .mat-list-item .mat-list-avatar,.mat-nav-list .mat-list-option .mat-list-avatar,.mat-selection-list .mat-list-item .mat-list-avatar,.mat-selection-list .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-nav-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-nav-list .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-selection-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-selection-list .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list .mat-list-item .mat-list-icon,.mat-list .mat-list-option .mat-list-icon,.mat-nav-list .mat-list-item .mat-list-icon,.mat-nav-list .mat-list-option .mat-list-icon,.mat-selection-list .mat-list-item .mat-list-icon,.mat-selection-list .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-nav-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-nav-list .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-selection-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-selection-list .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list .mat-list-item .mat-divider,.mat-list .mat-list-option .mat-divider,.mat-nav-list .mat-list-item .mat-divider,.mat-nav-list .mat-list-option .mat-divider,.mat-selection-list .mat-list-item .mat-divider,.mat-selection-list .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list .mat-list-item .mat-divider,[dir=rtl] .mat-list .mat-list-option .mat-divider,[dir=rtl] .mat-nav-list .mat-list-item .mat-divider,[dir=rtl] .mat-nav-list .mat-list-option .mat-divider,[dir=rtl] .mat-selection-list .mat-list-item .mat-divider,[dir=rtl] .mat-selection-list .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list .mat-list-item .mat-divider.mat-divider-inset,.mat-list .mat-list-option .mat-divider.mat-divider-inset,.mat-nav-list .mat-list-item .mat-divider.mat-divider-inset,.mat-nav-list .mat-list-option .mat-divider.mat-divider-inset,.mat-selection-list .mat-list-item .mat-divider.mat-divider-inset,.mat-selection-list .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list[dense],.mat-nav-list[dense],.mat-selection-list[dense]{padding-top:4px;display:block}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{height:40px;line-height:8px}.mat-list[dense] .mat-subheader:first-child,.mat-nav-list[dense] .mat-subheader:first-child,.mat-selection-list[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list[dense] .mat-list-item,.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent}.mat-list[dense] .mat-list-item .mat-list-item-content,.mat-list[dense] .mat-list-option .mat-list-item-content,.mat-nav-list[dense] .mat-list-item .mat-list-item-content,.mat-nav-list[dense] .mat-list-option .mat-list-item-content,.mat-selection-list[dense] .mat-list-item .mat-list-item-content,.mat-selection-list[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list[dense] .mat-list-option .mat-list-item-content-reverse,.mat-nav-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-nav-list[dense] .mat-list-option .mat-list-item-content-reverse,.mat-selection-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-selection-list[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list[dense] .mat-list-item .mat-list-item-ripple,.mat-list[dense] .mat-list-option .mat-list-item-ripple,.mat-nav-list[dense] .mat-list-item .mat-list-item-ripple,.mat-nav-list[dense] .mat-list-option .mat-list-item-ripple,.mat-selection-list[dense] .mat-list-item .mat-list-item-ripple,.mat-selection-list[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list[dense] .mat-list-item.mat-2-line,.mat-list[dense] .mat-list-option.mat-2-line,.mat-nav-list[dense] .mat-list-item.mat-2-line,.mat-nav-list[dense] .mat-list-option.mat-2-line,.mat-selection-list[dense] .mat-list-item.mat-2-line,.mat-selection-list[dense] .mat-list-option.mat-2-line{height:60px}.mat-list[dense] .mat-list-item.mat-3-line,.mat-list[dense] .mat-list-option.mat-3-line,.mat-nav-list[dense] .mat-list-item.mat-3-line,.mat-nav-list[dense] .mat-list-option.mat-3-line,.mat-selection-list[dense] .mat-list-item.mat-3-line,.mat-selection-list[dense] .mat-list-option.mat-3-line{height:76px}.mat-list[dense] .mat-list-item.mat-multi-line,.mat-list[dense] .mat-list-option.mat-multi-line,.mat-nav-list[dense] .mat-list-item.mat-multi-line,.mat-nav-list[dense] .mat-list-option.mat-multi-line,.mat-selection-list[dense] .mat-list-item.mat-multi-line,.mat-selection-list[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content,.mat-selection-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-selection-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list[dense] .mat-list-item .mat-list-text,.mat-list[dense] .mat-list-option .mat-list-text,.mat-nav-list[dense] .mat-list-item .mat-list-text,.mat-nav-list[dense] .mat-list-option .mat-list-text,.mat-selection-list[dense] .mat-list-item .mat-list-text,.mat-selection-list[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list[dense] .mat-list-item .mat-list-text>*,.mat-list[dense] .mat-list-option .mat-list-text>*,.mat-nav-list[dense] .mat-list-item .mat-list-text>*,.mat-nav-list[dense] .mat-list-option .mat-list-text>*,.mat-selection-list[dense] .mat-list-item .mat-list-text>*,.mat-selection-list[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list[dense] .mat-list-item .mat-list-text:empty,.mat-list[dense] .mat-list-option .mat-list-text:empty,.mat-nav-list[dense] .mat-list-item .mat-list-text:empty,.mat-nav-list[dense] .mat-list-option .mat-list-text:empty,.mat-selection-list[dense] .mat-list-item .mat-list-text:empty,.mat-selection-list[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list[dense] .mat-list-item .mat-list-avatar,.mat-list[dense] .mat-list-option .mat-list-avatar,.mat-nav-list[dense] .mat-list-item .mat-list-avatar,.mat-nav-list[dense] .mat-list-option .mat-list-avatar,.mat-selection-list[dense] .mat-list-item .mat-list-avatar,.mat-selection-list[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list[dense] .mat-list-item .mat-list-icon,.mat-list[dense] .mat-list-option .mat-list-icon,.mat-nav-list[dense] .mat-list-item .mat-list-icon,.mat-nav-list[dense] .mat-list-option .mat-list-icon,.mat-selection-list[dense] .mat-list-item .mat-list-icon,.mat-selection-list[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list[dense] .mat-list-item .mat-divider,.mat-list[dense] .mat-list-option .mat-divider,.mat-nav-list[dense] .mat-list-item .mat-divider,.mat-nav-list[dense] .mat-list-option .mat-divider,.mat-selection-list[dense] .mat-list-item .mat-divider,.mat-selection-list[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list[dense] .mat-list-option .mat-divider,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-divider,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-divider.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-divider.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (hover:none){.mat-list-option:hover,.mat-nav-list .mat-list-item:hover{background:0 0}}"],
                inputs: ['disableRipple'],
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
class MatListAvatarCssMatStyler {
}
MatListAvatarCssMatStyler.decorators = [
    { type: Directive, args: [{
                selector: '[mat-list-avatar], [matListAvatar]',
                host: { 'class': 'mat-list-avatar' }
            },] },
];
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
class MatListIconCssMatStyler {
}
MatListIconCssMatStyler.decorators = [
    { type: Directive, args: [{
                selector: '[mat-list-icon], [matListIcon]',
                host: { 'class': 'mat-list-icon' }
            },] },
];
/**
 * Directive whose purpose is to add the mat- CSS styling to this selector.
 * \@docs-private
 */
class MatListSubheaderCssMatStyler {
}
MatListSubheaderCssMatStyler.decorators = [
    { type: Directive, args: [{
                selector: '[mat-subheader], [matSubheader]',
                host: { 'class': 'mat-subheader' }
            },] },
];
/**
 * An item within a Material Design list.
 */
class MatListItem extends _MatListItemMixinBase {
    /**
     * @param {?} _element
     * @param {?} _navList
     */
    constructor(_element, _navList) {
        super();
        this._element = _element;
        this._navList = _navList;
        this._isNavList = false;
        this._isNavList = !!_navList;
        /** @type {?} */
        const element = this._getHostElement();
        if (element.nodeName && element.nodeName.toLowerCase() === 'button'
            && !element.hasAttribute('type')) {
            element.setAttribute('type', 'button');
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // TODO: consider turning the setter into a function, it doesn't do anything as a class.
        // tslint:disable-next-line:no-unused-expression
        new MatLineSetter(this._lines, this._element);
    }
    /**
     * Whether this list item should show a ripple effect when clicked.
     * @return {?}
     */
    _isRippleDisabled() {
        return !this._isNavList || this.disableRipple || this._navList.disableRipple;
    }
    /**
     * Retrieves the DOM element of the component host.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
}
MatListItem.decorators = [
    { type: Component, args: [{selector: 'mat-list-item, a[mat-list-item], button[mat-list-item]',
                exportAs: 'matListItem',
                host: {
                    'class': 'mat-list-item',
                    // @breaking-change 7.0.0 Remove `mat-list-item-avatar` in favor of `mat-list-item-with-avatar`.
                    '[class.mat-list-item-avatar]': '_avatar || _icon',
                    '[class.mat-list-item-with-avatar]': '_avatar || _icon',
                },
                inputs: ['disableRipple'],
                template: "<div class=\"mat-list-item-content\"><div class=\"mat-list-item-ripple\" mat-ripple [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"_isRippleDisabled()\"></div><ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\"></ng-content><div class=\"mat-list-text\"><ng-content select=\"[mat-line], [matLine]\"></ng-content></div><ng-content></ng-content></div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MatListItem.ctorParameters = () => [
    { type: ElementRef },
    { type: MatNavList, decorators: [{ type: Optional }] }
];
MatListItem.propDecorators = {
    _lines: [{ type: ContentChildren, args: [MatLine,] }],
    _avatar: [{ type: ContentChild, args: [MatListAvatarCssMatStyler,] }],
    _icon: [{ type: ContentChild, args: [MatListIconCssMatStyler,] }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
/**
 * \@docs-private
 */
class MatSelectionListBase {
}
/** @type {?} */
const _MatSelectionListMixinBase = mixinDisableRipple(MatSelectionListBase);
/**
 * \@docs-private
 */
class MatListOptionBase {
}
/** @type {?} */
const _MatListOptionMixinBase = mixinDisableRipple(MatListOptionBase);
/** *
 * \@docs-private
  @type {?} */
const MAT_SELECTION_LIST_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => MatSelectionList),
    multi: true
};
/**
 * Change event that is being fired whenever the selected state of an option changes.
 */
class MatSelectionListChange {
    /**
     * @param {?} source
     * @param {?} option
     */
    constructor(source, option) {
        this.source = source;
        this.option = option;
    }
}
/**
 * Component for list-options of selection-list. Each list-option can automatically
 * generate a checkbox and can put current item into the selectionModel of selection-list
 * if the current item is selected.
 */
class MatListOption extends _MatListOptionMixinBase {
    /**
     * @param {?} _element
     * @param {?} _changeDetector
     * @param {?} selectionList
     */
    constructor(_element, _changeDetector, /** @docs-private */
    selectionList) {
        super();
        this._element = _element;
        this._changeDetector = _changeDetector;
        this.selectionList = selectionList;
        this._selected = false;
        this._disabled = false;
        /**
         * Whether the label should appear before or after the checkbox. Defaults to 'after'
         */
        this.checkboxPosition = 'after';
    }
    /**
     * Whether the option is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled || (this.selectionList && this.selectionList.disabled); }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        /** @type {?} */
        const newValue = coerceBooleanProperty(value);
        if (newValue !== this._disabled) {
            this._disabled = newValue;
            this._changeDetector.markForCheck();
        }
    }
    /**
     * Whether the option is selected.
     * @return {?}
     */
    get selected() { return this.selectionList.selectedOptions.isSelected(this); }
    /**
     * @param {?} value
     * @return {?}
     */
    set selected(value) {
        /** @type {?} */
        const isSelected = coerceBooleanProperty(value);
        if (isSelected !== this._selected) {
            this._setSelected(isSelected);
            this.selectionList._reportValueChange();
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        /** @type {?} */
        const wasSelected = this._selected;
        Promise.resolve().then(() => {
            if (this._selected || wasSelected) {
                this.selected = true;
                this._changeDetector.markForCheck();
            }
        });
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        // TODO: consider turning the setter into a function, it doesn't do anything as a class.
        // tslint:disable-next-line:no-unused-expression
        new MatLineSetter(this._lines, this._element);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        if (this.selected) {
            // We have to delay this until the next tick in order
            // to avoid changed after checked errors.
            Promise.resolve().then(() => this.selected = false);
        }
        this.selectionList._removeOptionFromList(this);
    }
    /**
     * Toggles the selection state of the option.
     * @return {?}
     */
    toggle() {
        this.selected = !this.selected;
    }
    /**
     * Allows for programmatic focusing of the option.
     * @return {?}
     */
    focus() {
        this._element.nativeElement.focus();
    }
    /**
     * Returns the list item's text label. Implemented as a part of the FocusKeyManager.
     * \@docs-private
     * @return {?}
     */
    getLabel() {
        return this._text ? (this._text.nativeElement.textContent || '') : '';
    }
    /**
     * Whether this list item should show a ripple effect when clicked.
     * @return {?}
     */
    _isRippleDisabled() {
        return this.disabled || this.disableRipple || this.selectionList.disableRipple;
    }
    /**
     * @return {?}
     */
    _handleClick() {
        if (!this.disabled) {
            this.toggle();
            // Emit a change event if the selected state of the option changed through user interaction.
            this.selectionList._emitChangeEvent(this);
        }
    }
    /**
     * @return {?}
     */
    _handleFocus() {
        this.selectionList._setFocusedOption(this);
    }
    /**
     * @return {?}
     */
    _handleBlur() {
        this.selectionList._onTouched();
    }
    /**
     * Retrieves the DOM element of the component host.
     * @return {?}
     */
    _getHostElement() {
        return this._element.nativeElement;
    }
    /**
     * Sets the selected state of the option. Returns whether the value has changed.
     * @param {?} selected
     * @return {?}
     */
    _setSelected(selected) {
        if (selected === this._selected) {
            return false;
        }
        this._selected = selected;
        if (selected) {
            this.selectionList.selectedOptions.select(this);
        }
        else {
            this.selectionList.selectedOptions.deselect(this);
        }
        this._changeDetector.markForCheck();
        return true;
    }
    /**
     * Notifies Angular that the option needs to be checked in the next change detection run. Mainly
     * used to trigger an update of the list option if the disabled state of the selection list
     * changed.
     * @return {?}
     */
    _markForCheck() {
        this._changeDetector.markForCheck();
    }
}
MatListOption.decorators = [
    { type: Component, args: [{selector: 'mat-list-option',
                exportAs: 'matListOption',
                inputs: ['disableRipple'],
                host: {
                    'role': 'option',
                    'class': 'mat-list-item mat-list-option',
                    '(focus)': '_handleFocus()',
                    '(blur)': '_handleBlur()',
                    '(click)': '_handleClick()',
                    'tabindex': '-1',
                    '[class.mat-list-item-disabled]': 'disabled',
                    '[class.mat-list-item-with-avatar]': '_avatar || _icon',
                    '[attr.aria-selected]': 'selected.toString()',
                    '[attr.aria-disabled]': 'disabled.toString()',
                },
                template: "<div class=\"mat-list-item-content\" [class.mat-list-item-content-reverse]=\"checkboxPosition == 'after'\"><div mat-ripple class=\"mat-list-item-ripple\" [matRippleTrigger]=\"_getHostElement()\" [matRippleDisabled]=\"_isRippleDisabled()\"></div><mat-pseudo-checkbox [state]=\"selected ? 'checked' : 'unchecked'\" [disabled]=\"disabled\"></mat-pseudo-checkbox><div class=\"mat-list-text\" #text><ng-content></ng-content></div><ng-content select=\"[mat-list-avatar], [mat-list-icon], [matListAvatar], [matListIcon]\"></ng-content></div>",
                encapsulation: ViewEncapsulation.None,
                changeDetection: ChangeDetectionStrategy.OnPush,
            },] },
];
/** @nocollapse */
MatListOption.ctorParameters = () => [
    { type: ElementRef },
    { type: ChangeDetectorRef },
    { type: MatSelectionList, decorators: [{ type: Inject, args: [forwardRef(() => MatSelectionList),] }] }
];
MatListOption.propDecorators = {
    _avatar: [{ type: ContentChild, args: [MatListAvatarCssMatStyler,] }],
    _icon: [{ type: ContentChild, args: [MatListIconCssMatStyler,] }],
    _lines: [{ type: ContentChildren, args: [MatLine,] }],
    _text: [{ type: ViewChild, args: ['text',] }],
    checkboxPosition: [{ type: Input }],
    value: [{ type: Input }],
    disabled: [{ type: Input }],
    selected: [{ type: Input }]
};
/**
 * Material Design list component where each item is a selectable option. Behaves as a listbox.
 */
class MatSelectionList extends _MatSelectionListMixinBase {
    /**
     * @param {?} _element
     * @param {?} tabIndex
     */
    constructor(_element, tabIndex) {
        super();
        this._element = _element;
        /**
         * Emits a change event whenever the selected state of an option changes.
         */
        this.selectionChange = new EventEmitter();
        /**
         * Tabindex of the selection list.
         */
        this.tabIndex = 0;
        this._disabled = false;
        /**
         * The currently selected options.
         */
        this.selectedOptions = new SelectionModel(true);
        /**
         * View to model callback that should be called whenever the selected options change.
         */
        this._onChange = (_) => { };
        /**
         * Subscription to sync value changes in the SelectionModel back to the SelectionList.
         */
        this._modelChanges = Subscription.EMPTY;
        /**
         * View to model callback that should be called if the list or its options lost focus.
         */
        this._onTouched = () => { };
        this.tabIndex = parseInt(tabIndex) || 0;
    }
    /**
     * Whether the selection list is disabled.
     * @return {?}
     */
    get disabled() { return this._disabled; }
    /**
     * @param {?} value
     * @return {?}
     */
    set disabled(value) {
        this._disabled = coerceBooleanProperty(value);
        // The `MatSelectionList` and `MatListOption` are using the `OnPush` change detection
        // strategy. Therefore the options will not check for any changes if the `MatSelectionList`
        // changed its state. Since we know that a change to `disabled` property of the list affects
        // the state of the options, we manually mark each option for check.
        if (this.options) {
            this.options.forEach(option => option._markForCheck());
        }
    }
    /**
     * @return {?}
     */
    ngAfterContentInit() {
        this._keyManager = new FocusKeyManager(this.options)
            .withWrap()
            .withTypeAhead()
            // Allow disabled items to be focusable. For accessibility reasons, there must be a way for
            // screenreader users, that allows reading the different options of the list.
            .skipPredicate(() => false);
        if (this._tempValues) {
            this._setOptionsFromValues(this._tempValues);
            this._tempValues = null;
        }
        // Sync external changes to the model back to the options.
        this._modelChanges = /** @type {?} */ ((this.selectedOptions.onChange)).subscribe(event => {
            if (event.added) {
                for (let item of event.added) {
                    item.selected = true;
                }
            }
            if (event.removed) {
                for (let item of event.removed) {
                    item.selected = false;
                }
            }
        });
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        this._modelChanges.unsubscribe();
    }
    /**
     * Focuses the last active list option.
     * @return {?}
     */
    focus() {
        this._element.nativeElement.focus();
    }
    /**
     * Selects all of the options.
     * @return {?}
     */
    selectAll() {
        this._setAllOptionsSelected(true);
    }
    /**
     * Deselects all of the options.
     * @return {?}
     */
    deselectAll() {
        this._setAllOptionsSelected(false);
    }
    /**
     * Sets the focused option of the selection-list.
     * @param {?} option
     * @return {?}
     */
    _setFocusedOption(option) {
        this._keyManager.updateActiveItemIndex(this._getOptionIndex(option));
    }
    /**
     * Removes an option from the selection list and updates the active item.
     * @param {?} option
     * @return {?}
     */
    _removeOptionFromList(option) {
        /** @type {?} */
        const optionIndex = this._getOptionIndex(option);
        if (optionIndex > -1 && this._keyManager.activeItemIndex === optionIndex) {
            // Check whether the option is the last item
            if (optionIndex > 0) {
                this._keyManager.setPreviousItemActive();
            }
            else if (optionIndex === 0 && this.options.length > 1) {
                this._keyManager.setNextItemActive();
            }
        }
    }
    /**
     * Passes relevant key presses to our key manager.
     * @param {?} event
     * @return {?}
     */
    _keydown(event) {
        /** @type {?} */
        const keyCode = event.keyCode;
        /** @type {?} */
        const manager = this._keyManager;
        /** @type {?} */
        const previousFocusIndex = manager.activeItemIndex;
        switch (keyCode) {
            case SPACE:
            case ENTER:
                this._toggleFocusedOption();
                // Always prevent space from scrolling the page since the list has focus
                event.preventDefault();
                break;
            case HOME:
            case END:
                keyCode === HOME ? manager.setFirstItemActive() : manager.setLastItemActive();
                event.preventDefault();
                break;
            case A:
                if (event.ctrlKey) {
                    this.options.find(option => !option.selected) ? this.selectAll() : this.deselectAll();
                    event.preventDefault();
                }
                break;
            default:
                manager.onKeydown(event);
        }
        if ((keyCode === UP_ARROW || keyCode === DOWN_ARROW) && event.shiftKey &&
            manager.activeItemIndex !== previousFocusIndex) {
            this._toggleFocusedOption();
        }
    }
    /**
     * Reports a value change to the ControlValueAccessor
     * @return {?}
     */
    _reportValueChange() {
        if (this.options) {
            this._onChange(this._getSelectedOptionValues());
        }
    }
    /**
     * Emits a change event if the selected state of an option changed.
     * @param {?} option
     * @return {?}
     */
    _emitChangeEvent(option) {
        this.selectionChange.emit(new MatSelectionListChange(this, option));
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} values
     * @return {?}
     */
    writeValue(values) {
        if (this.options) {
            this._setOptionsFromValues(values || []);
        }
        else {
            this._tempValues = values;
        }
    }
    /**
     * Implemented as a part of ControlValueAccessor.
     * @param {?} isDisabled
     * @return {?}
     */
    setDisabledState(isDisabled) {
        this.disabled = isDisabled;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnChange(fn) {
        this._onChange = fn;
    }
    /**
     * Implemented as part of ControlValueAccessor.
     * @param {?} fn
     * @return {?}
     */
    registerOnTouched(fn) {
        this._onTouched = fn;
    }
    /**
     * Sets the selected options based on the specified values.
     * @param {?} values
     * @return {?}
     */
    _setOptionsFromValues(values) {
        this.options.forEach(option => option._setSelected(false));
        values
            .map(value => {
            return this.options.find(option => this.compareWith ? this.compareWith(option.value, value) : option.value === value);
        })
            .filter(Boolean)
            .forEach(option => /** @type {?} */ ((option))._setSelected(true));
    }
    /**
     * Returns the values of the selected options.
     * @return {?}
     */
    _getSelectedOptionValues() {
        return this.options.filter(option => option.selected).map(option => option.value);
    }
    /**
     * Toggles the state of the currently focused option if enabled.
     * @return {?}
     */
    _toggleFocusedOption() {
        /** @type {?} */
        let focusedIndex = this._keyManager.activeItemIndex;
        if (focusedIndex != null && this._isValidIndex(focusedIndex)) {
            /** @type {?} */
            let focusedOption = this.options.toArray()[focusedIndex];
            if (focusedOption && !focusedOption.disabled) {
                focusedOption.toggle();
                // Emit a change event because the focused option changed its state through user
                // interaction.
                this._emitChangeEvent(focusedOption);
            }
        }
    }
    /**
     * Sets the selected state on all of the options
     * and emits an event if anything changed.
     * @param {?} isSelected
     * @return {?}
     */
    _setAllOptionsSelected(isSelected) {
        /** @type {?} */
        let hasChanged = false;
        this.options.forEach(option => {
            if (option._setSelected(isSelected)) {
                hasChanged = true;
            }
        });
        if (hasChanged) {
            this._reportValueChange();
        }
    }
    /**
     * Utility to ensure all indexes are valid.
     * @param {?} index The index to be checked.
     * @return {?} True if the index is valid for our list of options.
     */
    _isValidIndex(index) {
        return index >= 0 && index < this.options.length;
    }
    /**
     * Returns the index of the specified list option.
     * @param {?} option
     * @return {?}
     */
    _getOptionIndex(option) {
        return this.options.toArray().indexOf(option);
    }
}
MatSelectionList.decorators = [
    { type: Component, args: [{selector: 'mat-selection-list',
                exportAs: 'matSelectionList',
                inputs: ['disabled', 'disableRipple', 'tabIndex'],
                host: {
                    'role': 'listbox',
                    '[tabIndex]': 'tabIndex',
                    'class': 'mat-selection-list',
                    '(focus)': 'focus()',
                    '(blur)': '_onTouched()',
                    '(keydown)': '_keydown($event)',
                    '[attr.aria-disabled]': 'disabled.toString()',
                },
                template: '<ng-content></ng-content>',
                styles: [".mat-divider{display:block;margin:0;border-top-width:1px;border-top-style:solid}.mat-divider.mat-divider-vertical{border-top:0;border-right-width:1px;border-right-style:solid}.mat-divider.mat-divider-inset{margin-left:80px}[dir=rtl] .mat-divider.mat-divider-inset{margin-left:auto;margin-right:80px}.mat-subheader{display:flex;box-sizing:border-box;padding:16px;align-items:center}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{margin:0}.mat-list,.mat-nav-list,.mat-selection-list{padding-top:8px;display:block;-webkit-tap-highlight-color:transparent}.mat-list .mat-subheader,.mat-nav-list .mat-subheader,.mat-selection-list .mat-subheader{height:48px;line-height:16px}.mat-list .mat-subheader:first-child,.mat-nav-list .mat-subheader:first-child,.mat-selection-list .mat-subheader:first-child{margin-top:-8px}.mat-list .mat-list-item,.mat-list .mat-list-option,.mat-nav-list .mat-list-item,.mat-nav-list .mat-list-option,.mat-selection-list .mat-list-item,.mat-selection-list .mat-list-option{display:block;height:48px;-webkit-tap-highlight-color:transparent}.mat-list .mat-list-item .mat-list-item-content,.mat-list .mat-list-option .mat-list-item-content,.mat-nav-list .mat-list-item .mat-list-item-content,.mat-nav-list .mat-list-option .mat-list-item-content,.mat-selection-list .mat-list-item .mat-list-item-content,.mat-selection-list .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list .mat-list-item .mat-list-item-content-reverse,.mat-list .mat-list-option .mat-list-item-content-reverse,.mat-nav-list .mat-list-item .mat-list-item-content-reverse,.mat-nav-list .mat-list-option .mat-list-item-content-reverse,.mat-selection-list .mat-list-item .mat-list-item-content-reverse,.mat-selection-list .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list .mat-list-item .mat-list-item-ripple,.mat-list .mat-list-option .mat-list-item-ripple,.mat-nav-list .mat-list-item .mat-list-item-ripple,.mat-nav-list .mat-list-option .mat-list-item-ripple,.mat-selection-list .mat-list-item .mat-list-item-ripple,.mat-selection-list .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list .mat-list-item.mat-list-item-with-avatar,.mat-list .mat-list-option.mat-list-item-with-avatar,.mat-nav-list .mat-list-item.mat-list-item-with-avatar,.mat-nav-list .mat-list-option.mat-list-item-with-avatar,.mat-selection-list .mat-list-item.mat-list-item-with-avatar,.mat-selection-list .mat-list-option.mat-list-item-with-avatar{height:56px}.mat-list .mat-list-item.mat-2-line,.mat-list .mat-list-option.mat-2-line,.mat-nav-list .mat-list-item.mat-2-line,.mat-nav-list .mat-list-option.mat-2-line,.mat-selection-list .mat-list-item.mat-2-line,.mat-selection-list .mat-list-option.mat-2-line{height:72px}.mat-list .mat-list-item.mat-3-line,.mat-list .mat-list-option.mat-3-line,.mat-nav-list .mat-list-item.mat-3-line,.mat-nav-list .mat-list-option.mat-3-line,.mat-selection-list .mat-list-item.mat-3-line,.mat-selection-list .mat-list-option.mat-3-line{height:88px}.mat-list .mat-list-item.mat-multi-line,.mat-list .mat-list-option.mat-multi-line,.mat-nav-list .mat-list-item.mat-multi-line,.mat-nav-list .mat-list-option.mat-multi-line,.mat-selection-list .mat-list-item.mat-multi-line,.mat-selection-list .mat-list-option.mat-multi-line{height:auto}.mat-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list .mat-list-option.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list .mat-list-option.mat-multi-line .mat-list-item-content,.mat-selection-list .mat-list-item.mat-multi-line .mat-list-item-content,.mat-selection-list .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list .mat-list-item .mat-list-text,.mat-list .mat-list-option .mat-list-text,.mat-nav-list .mat-list-item .mat-list-text,.mat-nav-list .mat-list-option .mat-list-text,.mat-selection-list .mat-list-item .mat-list-text,.mat-selection-list .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list .mat-list-item .mat-list-text>*,.mat-list .mat-list-option .mat-list-text>*,.mat-nav-list .mat-list-item .mat-list-text>*,.mat-nav-list .mat-list-option .mat-list-text>*,.mat-selection-list .mat-list-item .mat-list-text>*,.mat-selection-list .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list .mat-list-item .mat-list-text:empty,.mat-list .mat-list-option .mat-list-text:empty,.mat-nav-list .mat-list-item .mat-list-text:empty,.mat-nav-list .mat-list-option .mat-list-text:empty,.mat-selection-list .mat-list-item .mat-list-text:empty,.mat-selection-list .mat-list-option .mat-list-text:empty{display:none}.mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list .mat-list-item .mat-list-avatar,.mat-list .mat-list-option .mat-list-avatar,.mat-nav-list .mat-list-item .mat-list-avatar,.mat-nav-list .mat-list-option .mat-list-avatar,.mat-selection-list .mat-list-item .mat-list-avatar,.mat-selection-list .mat-list-option .mat-list-avatar{flex-shrink:0;width:40px;height:40px;border-radius:50%;object-fit:cover}.mat-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-nav-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-nav-list .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-selection-list .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-selection-list .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:72px;width:calc(100% - 72px)}[dir=rtl] .mat-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:72px}.mat-list .mat-list-item .mat-list-icon,.mat-list .mat-list-option .mat-list-icon,.mat-nav-list .mat-list-item .mat-list-icon,.mat-nav-list .mat-list-option .mat-list-icon,.mat-selection-list .mat-list-item .mat-list-icon,.mat-selection-list .mat-list-option .mat-list-icon{flex-shrink:0;width:24px;height:24px;font-size:24px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-nav-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-nav-list .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-selection-list .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-selection-list .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:64px;width:calc(100% - 64px)}[dir=rtl] .mat-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:64px}.mat-list .mat-list-item .mat-divider,.mat-list .mat-list-option .mat-divider,.mat-nav-list .mat-list-item .mat-divider,.mat-nav-list .mat-list-option .mat-divider,.mat-selection-list .mat-list-item .mat-divider,.mat-selection-list .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list .mat-list-item .mat-divider,[dir=rtl] .mat-list .mat-list-option .mat-divider,[dir=rtl] .mat-nav-list .mat-list-item .mat-divider,[dir=rtl] .mat-nav-list .mat-list-option .mat-divider,[dir=rtl] .mat-selection-list .mat-list-item .mat-divider,[dir=rtl] .mat-selection-list .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list .mat-list-item .mat-divider.mat-divider-inset,.mat-list .mat-list-option .mat-divider.mat-divider-inset,.mat-nav-list .mat-list-item .mat-divider.mat-divider-inset,.mat-nav-list .mat-list-option .mat-divider.mat-divider-inset,.mat-selection-list .mat-list-item .mat-divider.mat-divider-inset,.mat-selection-list .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-list[dense],.mat-nav-list[dense],.mat-selection-list[dense]{padding-top:4px;display:block}.mat-list[dense] .mat-subheader,.mat-nav-list[dense] .mat-subheader,.mat-selection-list[dense] .mat-subheader{height:40px;line-height:8px}.mat-list[dense] .mat-subheader:first-child,.mat-nav-list[dense] .mat-subheader:first-child,.mat-selection-list[dense] .mat-subheader:first-child{margin-top:-4px}.mat-list[dense] .mat-list-item,.mat-list[dense] .mat-list-option,.mat-nav-list[dense] .mat-list-item,.mat-nav-list[dense] .mat-list-option,.mat-selection-list[dense] .mat-list-item,.mat-selection-list[dense] .mat-list-option{display:block;height:40px;-webkit-tap-highlight-color:transparent}.mat-list[dense] .mat-list-item .mat-list-item-content,.mat-list[dense] .mat-list-option .mat-list-item-content,.mat-nav-list[dense] .mat-list-item .mat-list-item-content,.mat-nav-list[dense] .mat-list-option .mat-list-item-content,.mat-selection-list[dense] .mat-list-item .mat-list-item-content,.mat-selection-list[dense] .mat-list-option .mat-list-item-content{display:flex;flex-direction:row;align-items:center;box-sizing:border-box;padding:0 16px;position:relative;height:inherit}.mat-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-list[dense] .mat-list-option .mat-list-item-content-reverse,.mat-nav-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-nav-list[dense] .mat-list-option .mat-list-item-content-reverse,.mat-selection-list[dense] .mat-list-item .mat-list-item-content-reverse,.mat-selection-list[dense] .mat-list-option .mat-list-item-content-reverse{display:flex;align-items:center;padding:0 16px;flex-direction:row-reverse;justify-content:space-around}.mat-list[dense] .mat-list-item .mat-list-item-ripple,.mat-list[dense] .mat-list-option .mat-list-item-ripple,.mat-nav-list[dense] .mat-list-item .mat-list-item-ripple,.mat-nav-list[dense] .mat-list-option .mat-list-item-ripple,.mat-selection-list[dense] .mat-list-item .mat-list-item-ripple,.mat-selection-list[dense] .mat-list-option .mat-list-item-ripple{top:0;left:0;right:0;bottom:0;position:absolute;pointer-events:none}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar{height:48px}.mat-list[dense] .mat-list-item.mat-2-line,.mat-list[dense] .mat-list-option.mat-2-line,.mat-nav-list[dense] .mat-list-item.mat-2-line,.mat-nav-list[dense] .mat-list-option.mat-2-line,.mat-selection-list[dense] .mat-list-item.mat-2-line,.mat-selection-list[dense] .mat-list-option.mat-2-line{height:60px}.mat-list[dense] .mat-list-item.mat-3-line,.mat-list[dense] .mat-list-option.mat-3-line,.mat-nav-list[dense] .mat-list-item.mat-3-line,.mat-nav-list[dense] .mat-list-option.mat-3-line,.mat-selection-list[dense] .mat-list-item.mat-3-line,.mat-selection-list[dense] .mat-list-option.mat-3-line{height:76px}.mat-list[dense] .mat-list-item.mat-multi-line,.mat-list[dense] .mat-list-option.mat-multi-line,.mat-nav-list[dense] .mat-list-item.mat-multi-line,.mat-nav-list[dense] .mat-list-option.mat-multi-line,.mat-selection-list[dense] .mat-list-item.mat-multi-line,.mat-selection-list[dense] .mat-list-option.mat-multi-line{height:auto}.mat-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-nav-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content,.mat-selection-list[dense] .mat-list-item.mat-multi-line .mat-list-item-content,.mat-selection-list[dense] .mat-list-option.mat-multi-line .mat-list-item-content{padding-top:16px;padding-bottom:16px}.mat-list[dense] .mat-list-item .mat-list-text,.mat-list[dense] .mat-list-option .mat-list-text,.mat-nav-list[dense] .mat-list-item .mat-list-text,.mat-nav-list[dense] .mat-list-option .mat-list-text,.mat-selection-list[dense] .mat-list-item .mat-list-text,.mat-selection-list[dense] .mat-list-option .mat-list-text{display:flex;flex-direction:column;width:100%;box-sizing:border-box;overflow:hidden;padding:0}.mat-list[dense] .mat-list-item .mat-list-text>*,.mat-list[dense] .mat-list-option .mat-list-text>*,.mat-nav-list[dense] .mat-list-item .mat-list-text>*,.mat-nav-list[dense] .mat-list-option .mat-list-text>*,.mat-selection-list[dense] .mat-list-item .mat-list-text>*,.mat-selection-list[dense] .mat-list-option .mat-list-text>*{margin:0;padding:0;font-weight:400;font-size:inherit}.mat-list[dense] .mat-list-item .mat-list-text:empty,.mat-list[dense] .mat-list-option .mat-list-text:empty,.mat-nav-list[dense] .mat-list-item .mat-list-text:empty,.mat-nav-list[dense] .mat-list-option .mat-list-text:empty,.mat-selection-list[dense] .mat-list-item .mat-list-text:empty,.mat-selection-list[dense] .mat-list-option .mat-list-text:empty{display:none}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:0;padding-left:16px}[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content .mat-list-text{padding-right:16px;padding-left:0}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-left:0;padding-right:16px}[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-nav-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-item.mat-list-option .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar .mat-list-item-content-reverse .mat-list-text,[dir=rtl] .mat-selection-list[dense] .mat-list-option.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:0;padding-left:16px}.mat-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-nav-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-item.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content .mat-list-text,.mat-selection-list[dense] .mat-list-option.mat-list-item-with-avatar.mat-list-option .mat-list-item-content-reverse .mat-list-text{padding-right:16px;padding-left:16px}.mat-list[dense] .mat-list-item .mat-list-avatar,.mat-list[dense] .mat-list-option .mat-list-avatar,.mat-nav-list[dense] .mat-list-item .mat-list-avatar,.mat-nav-list[dense] .mat-list-option .mat-list-avatar,.mat-selection-list[dense] .mat-list-item .mat-list-avatar,.mat-selection-list[dense] .mat-list-option .mat-list-avatar{flex-shrink:0;width:36px;height:36px;border-radius:50%;object-fit:cover}.mat-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:68px;width:calc(100% - 68px)}[dir=rtl] .mat-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-list-avatar~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-list-avatar~.mat-divider-inset{margin-left:auto;margin-right:68px}.mat-list[dense] .mat-list-item .mat-list-icon,.mat-list[dense] .mat-list-option .mat-list-icon,.mat-nav-list[dense] .mat-list-item .mat-list-icon,.mat-nav-list[dense] .mat-list-option .mat-list-icon,.mat-selection-list[dense] .mat-list-item .mat-list-icon,.mat-selection-list[dense] .mat-list-option .mat-list-icon{flex-shrink:0;width:20px;height:20px;font-size:20px;box-sizing:content-box;border-radius:50%;padding:4px}.mat-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:60px;width:calc(100% - 60px)}[dir=rtl] .mat-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-list-icon~.mat-divider-inset,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-list-icon~.mat-divider-inset{margin-left:auto;margin-right:60px}.mat-list[dense] .mat-list-item .mat-divider,.mat-list[dense] .mat-list-option .mat-divider,.mat-nav-list[dense] .mat-list-item .mat-divider,.mat-nav-list[dense] .mat-list-option .mat-divider,.mat-selection-list[dense] .mat-list-item .mat-divider,.mat-selection-list[dense] .mat-list-option .mat-divider{position:absolute;bottom:0;left:0;width:100%;margin:0}[dir=rtl] .mat-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-list[dense] .mat-list-option .mat-divider,[dir=rtl] .mat-nav-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-nav-list[dense] .mat-list-option .mat-divider,[dir=rtl] .mat-selection-list[dense] .mat-list-item .mat-divider,[dir=rtl] .mat-selection-list[dense] .mat-list-option .mat-divider{margin-left:auto;margin-right:0}.mat-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-list[dense] .mat-list-option .mat-divider.mat-divider-inset,.mat-nav-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-nav-list[dense] .mat-list-option .mat-divider.mat-divider-inset,.mat-selection-list[dense] .mat-list-item .mat-divider.mat-divider-inset,.mat-selection-list[dense] .mat-list-option .mat-divider.mat-divider-inset{position:absolute}.mat-nav-list a{text-decoration:none;color:inherit}.mat-nav-list .mat-list-item{cursor:pointer;outline:0}mat-action-list button{background:0 0;color:inherit;border:none;font:inherit;outline:inherit}mat-action-list .mat-list-item{cursor:pointer;outline:inherit}.mat-list-option:not(.mat-list-item-disabled){cursor:pointer;outline:0}@media (hover:none){.mat-list-option:hover,.mat-nav-list .mat-list-item:hover{background:0 0}}"],
                encapsulation: ViewEncapsulation.None,
                providers: [MAT_SELECTION_LIST_VALUE_ACCESSOR],
                changeDetection: ChangeDetectionStrategy.OnPush
            },] },
];
/** @nocollapse */
MatSelectionList.ctorParameters = () => [
    { type: ElementRef },
    { type: String, decorators: [{ type: Attribute, args: ['tabindex',] }] }
];
MatSelectionList.propDecorators = {
    options: [{ type: ContentChildren, args: [MatListOption,] }],
    selectionChange: [{ type: Output }],
    tabIndex: [{ type: Input }],
    compareWith: [{ type: Input }],
    disabled: [{ type: Input }]
};

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
class MatListModule {
}
MatListModule.decorators = [
    { type: NgModule, args: [{
                imports: [MatLineModule, MatRippleModule, MatCommonModule, MatPseudoCheckboxModule, CommonModule],
                exports: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    MatLineModule,
                    MatCommonModule,
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    MatPseudoCheckboxModule,
                    MatSelectionList,
                    MatListOption,
                    MatDividerModule
                ],
                declarations: [
                    MatList,
                    MatNavList,
                    MatListItem,
                    MatListAvatarCssMatStyler,
                    MatListIconCssMatStyler,
                    MatListSubheaderCssMatStyler,
                    MatSelectionList,
                    MatListOption
                ],
            },] },
];

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */

export { MatListModule, MatListBase, _MatListMixinBase, MatListItemBase, _MatListItemMixinBase, MatNavList, MatList, MatListAvatarCssMatStyler, MatListIconCssMatStyler, MatListSubheaderCssMatStyler, MatListItem, MatSelectionListBase, _MatSelectionListMixinBase, MatListOptionBase, _MatListOptionMixinBase, MAT_SELECTION_LIST_VALUE_ACCESSOR, MatSelectionListChange, MatListOption, MatSelectionList };
//# sourceMappingURL=list.js.map
