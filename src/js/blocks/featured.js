( function( blocks, blockEditor, components, element, i18n ) {
	const el = element.createElement;
	const Fragment = element.Fragment;
	const __ = i18n.__;
	const registerBlockType = blocks.registerBlockType;
	const useBlockProps = blockEditor.useBlockProps;
	const InspectorControls = blockEditor.InspectorControls;
	const RichText = blockEditor.RichText;
	const MediaUpload = blockEditor.MediaUpload;
	const MediaUploadCheck = blockEditor.MediaUploadCheck;
	const Button = components.Button;
	const Placeholder = components.Placeholder;
	const PanelBody = components.PanelBody;
	const RangeControl = components.RangeControl;

	registerBlockType( 'cu/featured', {
		apiVersion: 2,
		title: __( 'Featured Cards', 'cu-block-theme' ),
		description: __( 'A responsive grid of featured cards with image and text.', 'cu-block-theme' ),
		icon: 'format-image',
		category: 'design',
		attributes: {
			columns: {
				type: 'number',
				default: 3,
			},
			cards: {
				type: 'array',
				default: [
					{ imageUrl: '', imageAlt: '', text: '' },
					{ imageUrl: '', imageAlt: '', text: '' },
					{ imageUrl: '', imageAlt: '', text: '' },
				],
			},
		},

		edit: function( props ) {
			const attributes = props.attributes;
			const setAttributes = props.setAttributes;
			const columns = Math.min( 4, Math.max( 1, attributes.columns || 3 ) );
			const cards = Array.isArray( attributes.cards ) ? attributes.cards : [];
			const blockProps = useBlockProps( {
				className: 'cu-featured-card-grid has-columns-' + columns,
			} );

			function updateCard( index, updates ) {
				const nextCards = cards.slice();
				nextCards[ index ] = Object.assign( {}, nextCards[ index ], updates );
				setAttributes( { cards: nextCards } );
			}

			function addCard() {
				setAttributes( {
					cards: cards.concat( [ { imageUrl: '', imageAlt: '', text: '' } ] ),
				} );
			}

			function removeCard( index ) {
				if ( cards.length <= 1 ) {
					return;
				}

				setAttributes( {
					cards: cards.filter( function( card, cardIndex ) {
						return cardIndex !== index;
					} ),
				} );
			}

			return el(
				Fragment,
				null,
				el(
					InspectorControls,
					null,
					el(
						PanelBody,
						{ title: __( 'Layout', 'cu-block-theme' ), initialOpen: true },
						el( RangeControl, {
							label: __( 'Cards per row', 'cu-block-theme' ),
							value: columns,
							onChange: function( newColumns ) {
								setAttributes( { columns: newColumns } );
							},
							min: 1,
							max: 4,
						} )
					)
				),
				el(
					'div',
					blockProps,
					cards.map( function( card, index ) {
						return el(
							'div',
							{ className: 'cu-featured-card', key: 'card-' + index },
							el(
								'div',
								{ className: 'cu-featured-card__media' },
								el( MediaUploadCheck, {},
									el( MediaUpload, {
										onSelect: function( media ) {
											updateCard( index, {
												imageUrl: media && media.url ? media.url : '',
												imageAlt: media && media.alt ? media.alt : '',
											} );
										},
										allowedTypes: [ 'image' ],
										value: card.imageUrl,
										render: function( mediaProps ) {
											if ( card.imageUrl ) {
												return el(
													Button,
													{
														onClick: mediaProps.open,
														className: 'cu-featured-card__image-button',
													},
													el( 'img', {
														src: card.imageUrl,
														alt: card.imageAlt,
														className: 'cu-featured-card__image',
													} )
												);
											}

											return el(
												Placeholder,
												{ label: __( 'Featured image', 'cu-block-theme' ) },
												el(
													Button,
													{ variant: 'secondary', onClick: mediaProps.open },
													__( 'Choose image', 'cu-block-theme' )
												)
											);
										},
									} )
								)
							),
							el( RichText, {
								tagName: 'p',
								className: 'cu-featured-card__text',
								value: card.text,
								onChange: function( newText ) {
									updateCard( index, { text: newText } );
								},
								placeholder: __( 'Add featured card text...', 'cu-block-theme' ),
							} ),
							el(
								Button,
								{
									variant: 'link',
									className: 'cu-featured-card__remove',
									onClick: function() {
										removeCard( index );
									},
									disabled: cards.length <= 1,
								},
								__( 'Remove card', 'cu-block-theme' )
							)
						);
					} ),
					el(
						'div',
						{ className: 'cu-featured-card-grid__controls' },
						el(
							Button,
							{ variant: 'primary', onClick: addCard },
							__( 'Add card', 'cu-block-theme' )
						)
					)
				)
			);
		},

		save: function( props ) {
			const attributes = props.attributes;
			const columns = Math.min( 4, Math.max( 1, attributes.columns || 3 ) );
			const cards = Array.isArray( attributes.cards ) ? attributes.cards : [];
			const blockProps = blockEditor.useBlockProps.save( {
				className: 'cu-featured-card-grid has-columns-' + columns,
			} );

			return el(
				'div',
				blockProps,
				cards.map( function( card, index ) {
					return el(
						'div',
						{ className: 'cu-featured-card', key: 'card-' + index },
						card.imageUrl &&
							el(
								'div',
								{ className: 'cu-featured-card__media' },
								el( 'img', {
									src: card.imageUrl,
									alt: card.imageAlt,
									className: 'cu-featured-card__image',
								} )
							),
						el( RichText.Content, {
							tagName: 'p',
							className: 'cu-featured-card__text',
							value: card.text,
						} )
					);
				} )
			);
		},
	} );
} )(
	window.wp.blocks,
	window.wp.blockEditor,
	window.wp.components,
	window.wp.element,
	window.wp.i18n
);
