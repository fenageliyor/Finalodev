using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using karciSinav_api.Models;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace karciSinav_api.Controllers
{
    [Route("api/[controller]")]
    public class SorusController : Controller
    {

        readonly SinavContext context;

        public SorusController(SinavContext context)
        {
            this.context = context;
        }

        [HttpGet]
        public IEnumerable<Models.Soru> Get()
        {
            return context.Sorus;
        }

        [HttpGet("{SinavId}")]
        public IEnumerable<Models.Soru> Get([FromRoute] int SinavId)
        
        {
            return context.Sorus.Where(q => q.SinavId == SinavId);
        }

        // POST api/<controller>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Models.Soru Soru)
        {
            var Sinav = context.Sinav.SingleOrDefault(q => q.Id == Soru.SinavId);

            if (Sinav == null)
                return NotFound();

            context.Sorus.Add(Soru);
            await context.SaveChangesAsync();
            return Ok(Soru);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, [FromBody]Models.Soru Soru)
        {
            if (id != Soru.Id)
                return BadRequest();
            context.Entry(Soru).State = EntityState.Modified;
            await context.SaveChangesAsync();
            return Ok(Soru);
        }

    }
}
