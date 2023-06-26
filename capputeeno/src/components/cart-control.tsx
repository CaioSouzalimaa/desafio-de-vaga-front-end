import {CartIcon} from "@/components/icons/cart-icon";
import {useLocalStorage} from "@/hooks/useLocalStorage";
import styled from "styled-components";
import {useRouter} from "next/navigation";

const CartCount = styled.span`
  width: 17px;
  height: 17px;
  border-radius: 100%;
  padding: 1px 5px;
  font-size: 10px;


  background: var(--delete-color);
  color: white;

  margin-left: -10px;
`

const Container = styled.button`
  position: relative;
  cursor: pointer;
  border: none;
  background: transparent;
`

export function CartControl() {
  const router = useRouter();
  const {value} = useLocalStorage('cart-items', []);

  const handleNavigateToCart = () => {
    router.push('/cart');
  }
  return (
    <Container onClick={handleNavigateToCart}>
      <CartIcon/>
      {value.length > 0 && <CartCount>{value.length}</CartCount>}
    </Container>
  )
}
