using BugVue.Models;
using Microsoft.EntityFrameworkCore;

namespace BugVue.Data
{
    public class BugDb:DbContext
    {
        public BugDb(DbContextOptions options):base(options)
        {

        }
        public DbSet<Bug> Bugs { get; set; }
    }
}
