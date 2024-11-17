namespace Capes.Domain.Exceptions
{
    [Serializable]
    public class BusinessException : BaseException
    {
        public BusinessException(string? message)
          : base(400, message)
        {
        }

        public BusinessException(string? message, Exception? innerException)
            : base(400, message, innerException)
        {
        }

        public BusinessException(int code, string? message)
            : base(code, message)
        {}

        public BusinessException(int code, string? message, Exception? innerException)
            : base(code, message, innerException)
        {
        }
    }
}
