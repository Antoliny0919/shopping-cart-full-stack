export function formatToKoreanPrice(price: number) {
  return `${price.toLocaleString("ko-KR")}원`;
}
