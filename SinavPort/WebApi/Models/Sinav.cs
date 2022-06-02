using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace karciSinav_api.Models
{
    public class Sinav
    {
        public int Id { get; set; }
        public string Baslik { get; set; }

        public string SahipId { get; set; }
    }
}
