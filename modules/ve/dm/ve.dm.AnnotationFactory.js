/**
 * VisualEditor data model AnnotationFactory class.
 * 
 * @copyright 2011-2012 VisualEditor Team and others; see AUTHORS.txt
 * @license The MIT License (MIT); see LICENSE.txt
 */

/**
 * DataModel annotation factory.
 *
 * @class
 * @extends {ve.Factory}
 * @constructor
 */
ve.dm.AnnotationFactory = function() {
	// Inheritance
	ve.Factory.call( this );
};

/* Inheritance */

ve.extendClass( ve.dm.AnnotationFactory, ve.Factory );

/* Initialization */

ve.dm.annotationFactory = new ve.dm.AnnotationFactory();
