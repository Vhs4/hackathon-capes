using AutoMapper;
using Capes.Domain.Models;
using Sam.Api.ViewModels;

namespace Capes.Api.Profiles
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserNewVm, User>();
            CreateMap<User, UserVm>();
        }
    }
}
