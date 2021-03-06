class RolloverIndexResponse extends AcknowledgedResponseBase implements IResponse {
	conditions: Dictionary<string, boolean>;
	dry_run: boolean;
	new_index: string;
	old_index: string;
	rolled_over: boolean;
	shards_acknowledged: boolean;
}
