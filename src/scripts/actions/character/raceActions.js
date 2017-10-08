export function setBaseRace( _val )
{
	return {
		type : 'CHARACTER_RACE_SET_BASE',
		payload : _val
	}
}

export function setSubrace( _val )
{
	return {
		type : 'CHARACTER_RACE_SET_SUBRACE',
		payload : _val
	}
}


export function setVariantRace( _val )
{
	return {
		type : 'CHARACTER_RACE_SET_VARIANT',
		payload : _val
	}
}