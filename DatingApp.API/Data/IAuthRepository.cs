using System.Threading.Tasks;
using DatingApp.API.Models;

namespace DatingApp.API.Data
{

    public interface IAuthRepository
    {
        Task<User> Login(string username, string password);
        Task<User> Register(User user, string username, string password);
        Task<bool> IsUserExist(string username);
    }

}