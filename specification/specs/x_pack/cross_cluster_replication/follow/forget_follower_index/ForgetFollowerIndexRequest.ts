@rest_spec_name("ccr.forget_follower")
class ForgetFollowerIndexRequest extends RequestBase {
	follower_cluster: string;
	follower_index: IndexName;
	follower_index_uuid: string;
	leader_remote_cluster: string;
}
