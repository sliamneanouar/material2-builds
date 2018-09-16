"use strict";
/**
 * @license
 * Copyright Google LLC All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = require("chalk");
const glob_1 = require("glob");
const tslint_1 = require("tslint");
const attribute_selectors_1 = require("../../material/data/attribute-selectors");
const transform_change_data_1 = require("../../material/transform-change-data");
const component_walker_1 = require("../../tslint/component-walker");
const rule_failures_1 = require("../../tslint/rule-failures");
const literal_1 = require("../../typescript/literal");
/**
 * Rule that walks through every stylesheet in the application and updates outdated
 * attribute selectors to the updated selector.
 */
class Rule extends tslint_1.Rules.AbstractRule {
    apply(sourceFile) {
        return this.applyWithWalker(new Walker(sourceFile, this.getOptions()));
    }
}
exports.Rule = Rule;
class Walker extends component_walker_1.ComponentWalker {
    constructor(sourceFile, options) {
        // In some applications, developers will have global stylesheets that are not specified in any
        // Angular component. Therefore we glob up all css and scss files outside of node_modules and
        // dist and check them as well.
        super(sourceFile, options, glob_1.sync('!(node_modules|dist)/**/*.+(css|scss)'));
        /** Change data that upgrades to the specified target version. */
        this.data = transform_change_data_1.getChangesForTarget(this.getOptions()[0], attribute_selectors_1.attributeSelectors);
        this._reportExtraStylesheetFiles();
    }
    visitInlineStylesheet(literal) {
        this._createReplacementsForContent(literal, literal.getText())
            .forEach(data => rule_failures_1.addFailureAtReplacement(this, data.failureMessage, data.replacement));
    }
    visitExternalStylesheet(node) {
        this._createReplacementsForContent(node, node.getFullText())
            .map(data => rule_failures_1.createExternalReplacementFailure(node, data.failureMessage, this.getRuleName(), data.replacement))
            .forEach(failure => this.addFailure(failure));
    }
    /**
     * Searches for outdated attribute selectors in the specified content and creates replacements
     * with the according messages that can be added to a rule failure.
     */
    _createReplacementsForContent(node, stylesheetContent) {
        const replacements = [];
        this.data.forEach(selector => {
            const currentSelector = `[${selector.replace}]`;
            const updatedSelector = `[${selector.replaceWith}]`;
            const failureMessage = `Found deprecated attribute selector "${chalk_1.red(currentSelector)}"` +
                ` which has been renamed to "${chalk_1.green(updatedSelector)}"`;
            literal_1.findAllSubstringIndices(stylesheetContent, currentSelector)
                .map(offset => node.getStart() + offset)
                .map(start => new tslint_1.Replacement(start, currentSelector.length, updatedSelector))
                .forEach(replacement => replacements.push({ replacement, failureMessage }));
        });
        return replacements;
    }
}
exports.Walker = Walker;
//# sourceMappingURL=attributeSelectorsStylesheetRule.js.map