export function changeApplicationView( _viewID )
{
	return {
		type : "APPLICATION_CHANGE_VIEW",
		payload : _viewID
	}
}
