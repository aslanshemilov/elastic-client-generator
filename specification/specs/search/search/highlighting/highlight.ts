
/**namespace:Search.Search.Highlighting */
/**custom_serialization*/
interface highlight {
	pre_tags: string[];
	post_tags: string[];
	fragment_size: integer;
	tags_schema: string;
	number_of_fragments: integer;
	fragment_offset: integer;
	boundary_max_size: integer;
	encoder: string;
	order: string;
	/**custom_serialization */
	fields: map<field, highlight_field>[];
	require_field_match: boolean;
	boundary_chars: string;
}