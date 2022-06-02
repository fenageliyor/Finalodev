using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace karciSinav_api.Models
{
    public class Soru
    {
        public int Id { get; set; }
        public string Soru { get; set; }

        public string DogruCevap { get; set; }
        public string Cevap1 { get; set; }
        public string Cevap2 { get; set; }
        public string Cevap3 { get; set; }

        public int SinavId { get; set; }

    }
}
