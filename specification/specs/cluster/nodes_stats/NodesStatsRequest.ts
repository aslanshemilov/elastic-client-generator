@rest_spec_name("nodes.stats")
class NodesStatsRequest extends RequestBase {
	@request_parameter()
	completion_fields: Field[];
	@request_parameter()
	fielddata_fields: Field[];
	@request_parameter()
	fields: Field[];
	@request_parameter()
	groups: boolean;
	@request_parameter()
	include_segment_file_sizes: boolean;
	@request_parameter()
	level: Level;
	@request_parameter()
	timeout: Time;
	@request_parameter()
	types: string[];
}
