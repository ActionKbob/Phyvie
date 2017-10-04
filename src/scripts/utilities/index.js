export function calculateModifier( _value )
{
	var mod = Math.floor( ( _value - 10 ) / 2 );
	var sym = '';

	if( mod > 0 ) sym = '+';
	else if( mod < 0 ) sym = '-';

	return sym + Math.abs( mod );
}
