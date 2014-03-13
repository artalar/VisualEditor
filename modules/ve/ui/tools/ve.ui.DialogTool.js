/*!
 * VisualEditor UserInterface DialogTool class.
 *
 * @copyright 2011-2014 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * UserInterface dialog tool.
 *
 * @abstract
 * @class
 * @extends OO.ui.Tool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.DialogTool = function VeUiDialogTool( toolGroup, config ) {
	// Parent constructor
	OO.ui.Tool.call( this, toolGroup, config );
};

/* Inheritance */

OO.inheritClass( ve.ui.DialogTool, OO.ui.Tool );

/* Static Properties */

/**
 * Symbolic name of dialog the tool opens.
 *
 * @abstract
 * @static
 * @property {string}
 * @inheritable
 */
ve.ui.DialogTool.static.dialog = '';

/**
 * Configuration options for setting up dialog.
 *
 * @abstract
 * @static
 * @property {Object}
 * @inheritable
 */
ve.ui.DialogTool.static.dialogData = {};

/**
 * Annotation or node models this tool is related to.
 *
 * Used by #isCompatibleWith.
 *
 * @static
 * @property {Function[]}
 * @inheritable
 */
ve.ui.DialogTool.static.modelClasses = [];

/**
 * @inheritdoc
 */
ve.ui.DialogTool.static.isCompatibleWith = function ( model ) {
	return ve.isInstanceOfAny( model, this.modelClasses );
};

/* Methods */

/**
 * @inheritdoc
 */
ve.ui.DialogTool.prototype.onSelect = function () {
	this.toolbar.getSurface().execute(
		'dialog',
		'open',
		this.constructor.static.dialog,
		this.constructor.static.dialogData
	);
	this.setActive( false );
};

/**
 * @inheritdoc
 */
ve.ui.DialogTool.prototype.onUpdateState = function () {
	// Never show the tool as active
	this.setActive( false );
};

/**
 * @class
 * @extends ve.ui.DialogTool
 * @constructor
 * @param {OO.ui.ToolGroup} toolGroup
 * @param {Object} [config] Configuration options
 */
ve.ui.CommandHelpDialogTool = function VeUiCommandHelpDialogTool( toolGroup, config ) {
	ve.ui.DialogTool.call( this, toolGroup, config );
};
OO.inheritClass( ve.ui.CommandHelpDialogTool, ve.ui.DialogTool );
ve.ui.CommandHelpDialogTool.static.name = 'commandHelp';
ve.ui.CommandHelpDialogTool.static.group = 'dialog';
ve.ui.CommandHelpDialogTool.static.icon = 'help';
ve.ui.CommandHelpDialogTool.static.title =
	OO.ui.deferMsg( 'visualeditor-dialogbutton-command-help-tooltip' );
ve.ui.CommandHelpDialogTool.static.dialog = 'commandHelp';
ve.ui.CommandHelpDialogTool.static.autoAdd = false;
ve.ui.toolFactory.register( ve.ui.CommandHelpDialogTool );
