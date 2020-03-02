using System.Threading.Tasks;
using DatingAppV2.API.Models;

namespace DatingAppV2.API.Data
{
    public interface IAuthRepository
    {
         Task<User> Register(User user, string password);

         Task<User> Login (string username, string password);

         Task<bool> UserExist(string username);
    }
}