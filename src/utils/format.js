export const price =(value, symbol='USD', decimals=2)=>`${symbol} ${parseFloat(value).toFixed(decimals)}`
