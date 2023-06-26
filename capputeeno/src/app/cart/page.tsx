"use client"

import {DefaultPageLayout} from "@/components/default-page-layout";
import styled from "styled-components";
import {BackBtn} from "@/components/back-button";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import {ProductInCart} from "@/types/product";
import {formatPriceInReais} from "@/utils/format-price";
import {CardItem} from "@/components/cart/cart-item";
import {Divider} from "@/components/divider";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 32px;

  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    flex-direction: row;
  }
`

const CartListContainer = styled.div`
  h3 {
    line-height: 150%;
    font-weight: 500;
    font-size: 24px;
    text-transform: uppercase;
    color: var(--text-dark-2);
  }

  p {
    font-weight: 300;
    font-size: 16px;
    line-height: 150%;
    color: var(--text-dark-2);

    span {
      font-weight: 600;
    }
  }
`

const CartList = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
  margin-top: 24px;

`

const CartResultContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  min-width: 352px;
  padding: 16px 24px;

  background: white;

  h3 {
    font-weight: 600;
    font-size: 20px;
    color: var(--text-dark-2);
    text-transform: uppercase;
    margin-bottom: 30px;
  }
`

const TotalItem = styled.div<{isBold?: boolean}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  
  font-size: 16px;
  line-height: 150%;
  font-weight: ${props => props.isBold ? 600 : 400};
  
  margin-bottom: 18px;
`

const ShopBtn = styled.button`
  color: #FFFFFF;
  border-radius: 4px;
  background: var(--success-color);  
  padding: 12px;
  width: 100%;
  border: none;
  margin-top: 40px;
  cursor: pointer;
`

export default function CartPage() {
  const {value, updateLocalStorage} = useLocalStorage<ProductInCart[]>("cart-items", [])

  const calculateTotal = (value: ProductInCart[]) => {
    return value.reduce((sum, item) => sum += (item.price_in_cents * item.quantity), 0)
  }

  const cartTotal = formatPriceInReais(calculateTotal(value))
  const deliveryFee = 4000;
  const cartTotalWithDelivery = formatPriceInReais(calculateTotal(value) + deliveryFee)

  const handleUpdateQuantity = (id: string, quantity: number) => {
    const newValue = value.map(item => {
      if (item.id !== id) return item
      return {...item, quantity: quantity}
    })
    updateLocalStorage(newValue)
  }

  const handleDeleteItem = (id: string) => {
    const newValue = value.filter(item => {
      if (item.id !== id) return item
    })
    updateLocalStorage(newValue)
  }
  return (
    <DefaultPageLayout>
      <Container>
        <CartListContainer>
        <BackBtn navigate={"/"}/>
          <h3>Seu carrinho</h3>
          <p>
            Total {value.length} produtos
            <span>{cartTotal}</span>
          </p>
          <CartList>
            {value.map(item =>
              <CardItem
                handleDeleteItem={handleDeleteItem}
                product={item}
                key={item.id}
                handleUpdateQuantity={handleUpdateQuantity}
              />
            )}
          </CartList>
        </CartListContainer>
        <CartResultContainer>
          <h3>Resumo do Pedido</h3>
          <TotalItem>
            <p>Subtotal de Produtos</p>
            <p>{cartTotal}</p>
          </TotalItem>
          <TotalItem>
            <p>Entrega</p>
            <p>{formatPriceInReais(deliveryFee)}</p>
          </TotalItem>

          <Divider/>

          <TotalItem isBold>
            <p>Total</p>
            <p>{cartTotalWithDelivery}</p>
          </TotalItem>
          <ShopBtn>
            Finalizar Compra
          </ShopBtn>
        </CartResultContainer>
      </Container>
    </DefaultPageLayout>
  )
}
