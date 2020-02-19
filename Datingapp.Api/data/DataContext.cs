using Datingapp.Api.models;
using Microsoft.EntityFrameworkCore;

namespace Datingapp.Api.data
{
    public class DataContext: DbContext
    {
        public DataContext(DbContextOptions<DataContext> options): base(options)
        {}

        public DbSet<value> values { get; set; }
    }
}