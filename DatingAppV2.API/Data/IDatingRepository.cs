using System.Collections.Generic;
using System.Threading.Tasks;
using DatingAppV2.API.Helpers;
using DatingAppV2.API.Models;

namespace DatingAppV2.API.Data
{
    public interface IDatingRepository
    {
         void Add<T>(T entity) where T: class;

         void Delete<T>(T entity) where T: class;

         Task<bool> SaveAll();

         Task<PagedList<User>> GetUsers(UserParams userParams);

         Task<User> GetUser(int id);

         Task<Photo> GetPhoto(int id);

         Task<Photo> GetMainPhotoForUser(int userId);
    }
}