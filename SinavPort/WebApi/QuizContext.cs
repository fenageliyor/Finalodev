using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using karciSinav_api.Models;

namespace karciSinav_api
{
    public class SinavContext : DbContext
    {
        public SinavContext(DbContextOptions<SinavContext> options) : base(options) 
        {

        }

        public DbSet<Models.Soru> Sorus { get; set; }

        public DbSet<karciSinav_api.Models.Sinav> Sinav { get; set; }
    }
}
