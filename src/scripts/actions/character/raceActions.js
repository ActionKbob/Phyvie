import enums from 'data/enums';

export function addRace( _value )
{
	return {
		type : enums.ADD_RACE,
		payload : _value
	}
}

export function addSubrace( _value )
{
	return {
		type : enums.ADD_SUBRACE,
		payload : _value
	}
}

export function addVariant( _value )
{
	return {
		type : enums.ADD_VARIANT,
		payload : _value
	}
}
