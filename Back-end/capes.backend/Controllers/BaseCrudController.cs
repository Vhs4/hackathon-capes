using AutoMapper;
using Capes.Api.ViewModels;
using Capes.Application.Interfaces.Services;
using Capes.Domain.Models;
using Microsoft.AspNetCore.Mvc;

namespace Capes.Api.Controllers
{
    public abstract class BaseCrudController<T, TVm, TNew, TUpdate> : ApiController where T : Entity, new()
    {
        // O init significa que o servico só pode ser setado durante a inicialização do objeto, ou seja, no contrustor
        protected IBaseService<T> baseService { get; init; }
        public BaseCrudController(IMapper mapper, IBaseService<T> baseService) : base(mapper)
        {
            this.baseService = baseService;
        }

        [HttpGet("list")]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status500InternalServerError)]
        public virtual async Task<IActionResult> List()
        {
            if (!ModelState.IsValid)
            {
                return RespondModelStateInvalid();
            }

            var result = await baseService.List();
            // Realizer o mapeamento para retorna a VM
            return RespondOk(mapper.Map<List<TVm>>(result));
        }

        [HttpGet("get")]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status500InternalServerError)]
        public virtual async Task<IActionResult> Get(int id)
        {
            if (!ModelState.IsValid)
            {
                return RespondModelStateInvalid();
            }

            var result = await baseService.Get(id);
            return RespondOk(mapper.Map<TVm>(result));
        }

        [HttpPost("create")]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status500InternalServerError)]
        public virtual async Task<IActionResult> Create(TNew vm)
        {
            if (!ModelState.IsValid)
            {
                return RespondModelStateInvalid();
            }

            await baseService.Create(mapper.Map<T>(vm));
            return RespondOk(true);
        }

        [HttpPut("update")]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status500InternalServerError)]
        public virtual async Task<IActionResult> Update(TUpdate vm)
        {
            if (!ModelState.IsValid)
            {
                return RespondModelStateInvalid();
            }

            await baseService.Update(mapper.Map<T>(vm));

            return RespondOk(true);
        }

        [HttpDelete("delete")]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status400BadRequest)]
        [ProducesResponseType(typeof(RetornoPadrao<string>), StatusCodes.Status500InternalServerError)]
        public virtual async Task<IActionResult> Delete(int id)
        {
            if (!ModelState.IsValid)
            {
                return RespondModelStateInvalid();
            }

            await baseService.Delete(id);

            return RespondOk(true);
        }
    }
}
