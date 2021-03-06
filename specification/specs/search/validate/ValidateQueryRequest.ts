@rest_spec_name("indices.validate_query")
class ValidateQueryRequest extends RequestBase {
	@request_parameter()
	all_shards: boolean;
	@request_parameter()
	allow_no_indices: boolean;
	@request_parameter()
	analyze_wildcard: boolean;
	@request_parameter()
	analyzer: string;
	@request_parameter()
	default_operator: DefaultOperator;
	@request_parameter()
	df: string;
	@request_parameter()
	expand_wildcards: ExpandWildcards;
	@request_parameter()
	explain: boolean;
	@request_parameter()
	ignore_unavailable: boolean;
	@request_parameter()
	lenient: boolean;
	@request_parameter()
	query_on_query_string: string;
	@request_parameter()
	rewrite: boolean;
	query: QueryContainer;
}
