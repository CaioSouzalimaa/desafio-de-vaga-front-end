export function formatPriceInReais(priceInCents: number) {
    const priceInReais = priceInCents / 100
    return priceInReais.toLocaleString('pt-br', {style: 'currency', currency: 'BRL'})
}
