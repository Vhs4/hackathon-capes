using AutoMapper;
using Capes.Api.ViewModels;
using Microsoft.AspNetCore.Mvc;

namespace Capes.Api.Controllers
{
    [ApiController]
    public abstract class ApiController : ControllerBase
    {
        protected IMapper mapper { get; set; }

        protected ApiController(IMapper mapper)
        {
            this.mapper = mapper;
        }

        protected IActionResult RespondOk<T>(T result)
        {
            return Ok(new RetornoPadrao<T>(true, result));
        }

        protected IActionResult RespondModelStateInvalid()
        {
            var error = ModelState.Values.SelectMany(e => e.Errors).LastOrDefault();

            // Verificar se existi um erro e retorna a mensagem de erro adequada    
            return BadRequest(new RetornoPadrao<string>(false, !string.IsNullOrEmpty(error?.ErrorMessage) ? error.ErrorMessage : (error?.Exception?.Message ?? string.Empty)));
        }
    }
}
