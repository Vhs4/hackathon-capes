using AutoMapper;
using Capes.Application.Interfaces.Repository;
using Capes.Application.Interfaces.Services;
using Capes.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Sam.Api.ViewModels;
using System.ComponentModel.DataAnnotations;

namespace Capes.Api.Controllers
{
    public class UserController(IMapper mapper, IBaseService<User> baseService, IUserRepository userRepository, ITokenService tokenService) : BaseCrudController<User, UserVm, UserNewVm, UserUpdateVm>(mapper, baseService)
    {
        private readonly ITokenService tokenService = tokenService;
        private readonly IUserRepository userRepository = userRepository;
        public override async Task<IActionResult> Create([FromBody][Required(ErrorMessage = "Objeto de usuário obrigatório")] UserNewVm vm)
        {
            try
            {
                await baseService.Create(mapper.Map<User>(vm));
                User userValue = await userRepository.GetUserByEmailAndPassword(vm.Email, vm.Password);
                var token = tokenService.GenerateToken(userValue);
                return RespondOk(new { userValue.Username, userValue.Email, token});
            }
            catch (DbUpdateException ex) when (ex.InnerException?.Message.Contains("unique") == true)
            {
                return BadRequest("O email já está em uso.");
            }
            catch (Exception ex)
            {
                return StatusCode(500, new
                {
                    message = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
                    error = ex.Message // Opcional: Remover para evitar vazamento de informações
                });
            }

        }
    }
}
