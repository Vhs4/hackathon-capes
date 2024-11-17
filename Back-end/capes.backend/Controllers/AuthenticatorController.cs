using Capes.Api.ViewModels;
using Capes.Application.Interfaces.Repository;
using Capes.Application.Interfaces.Services;
using Capes.Domain.Exceptions;
using Capes.Domain.Models;
using Microsoft.AspNetCore.Mvc;
using System.ComponentModel.DataAnnotations;

namespace Capes.Api.Controllers
{
    [ApiController]
    [Route("authenticator")]
    public class AuthenticatorController(IUserRepository userRepository, ITokenService tokenService) : ControllerBase
    {
        private readonly IUserRepository userRepository = userRepository;
        private readonly ITokenService tokenService = tokenService;

        [HttpPost]
        [Route("signin")]
        public async Task<IActionResult> SignIn([FromBody][Required(ErrorMessage ="Credenciais de acesso obrigatório")] AuthVm vm)
        {
            try
            {
                User user = await userRepository.GetUserByEmailAndPassword(vm.Email, vm.Password);

                if (user is null)
                    return BadRequest(new { message = "Email ou senha inválidos" });

                var token = tokenService.GenerateToken(user);

                return Ok(new
                {
                    data = user,
                    token
                });
            }
            catch (BusinessException ex)
            {
                return BadRequest(new { message = ex.Message });
            }
            catch (Exception ex)
            {
                Console.Error.WriteLine($"Erro ao autenticar o usuário: {ex.Message} | StackTrace: {ex.StackTrace}");

                return StatusCode(500, new
                {
                    message = "Ocorreu um erro inesperado. Tente novamente mais tarde.",
                    error = ex.Message // Opcional: Remover para evitar vazamento de informações
                });
            }
        }
    }
}
