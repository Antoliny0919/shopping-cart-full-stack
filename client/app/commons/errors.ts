export class NetworkError extends Error {
  status: number;
  constructor(
    message: string = "네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.",
    status: number = 500,
  ) {
    super(message);
    this.status = status;
  }
}
