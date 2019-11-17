using System;
using System.Threading.Tasks;
using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{

    public class AuthRepository : IAuthRepository
    {
        private readonly DatingAppDbContext _dataContext;

        public AuthRepository(DatingAppDbContext dataContext)
        {
            _dataContext = dataContext;
        }

        public DatingAppDbContext DataContext => _dataContext;

        public async Task<bool> IsUserExist(string username)
        {
            return await _dataContext.Users.AnyAsync(u => u.Username == username) == true;
        }

        public async Task<User> Login(string username, string password)
        {
            var user = await _dataContext.Users.FirstOrDefaultAsync(c => c.Username == username);
            if (user == null)
                return null;
           if (!VerifyPasswordHash(password, user.Password, user.PasswordSalt))
                return null;

            return user;

        }

        private bool VerifyPasswordHash(string password, byte[] passwordHash, byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512(passwordSalt))
            {
                var computedHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
                for (int i = 0; i < computedHash.Length; i++)
                {
                    if (computedHash[i] != passwordHash[i]) return false;
                }
                return true;
            }
        }

        public async Task<User> Register(User user, string username, string password)
        {
            byte[] passwordHash, passwordSaltHash;
            CreatePasswordHash(password, out passwordHash, out passwordSaltHash);
            user.Username = username;
            user.Password = passwordHash;
            user.PasswordSalt = passwordSaltHash;

            await _dataContext.Users.AddAsync(user);
            await _dataContext.SaveChangesAsync();
            return user;
        }

 private void CreatePasswordHash(string password, out byte[] passwordHash, out byte[] passwordSalt)
        {
            using (var hmac = new System.Security.Cryptography.HMACSHA512())
            {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash(System.Text.Encoding.UTF8.GetBytes(password));
            }
            
        }
    }

}