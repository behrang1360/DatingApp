using DatingApp.API.Models;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Data
{
    public class DatingAppDbContext : DbContext
    {
        public DatingAppDbContext(DbContextOptions<DatingAppDbContext> options) : base(options)
        {

        }
        public DbSet<value> Values { get; set; }

        public DbSet<User> Users { get; set; }
    }
}