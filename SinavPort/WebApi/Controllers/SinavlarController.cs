using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using karciSinav_api;
using karciSinav_api.Models;

namespace karciSinav_api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SinavzesController : ControllerBase
    {
        private readonly SinavContext _context;

        public SinavzesController(SinavContext context)
        {
            _context = context;
        }

        [HttpGet]
        [Authorize]
        public IEnumerable<Sinav> GetSinav()
        {
            var userId = HttpContext.User.Claims.First().Value;
            return _context.Sinav.Where(q => q.OwnerId == userId);
        }

        [HttpGet("all")]
        public IEnumerable<Sinav> GetAllSinavzes()
        {
            return _context.Sinav;
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetSinav([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Sinav = await _context.Sinav.FindAsync(id);

            if (Sinav == null)
            {
                return NotFound();
            }

            return Ok(Sinav);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutSinav([FromRoute] int id, [FromBody] Sinav Sinav)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != Sinav.Id)
            {
                return BadRequest();
            }

            _context.Entry(Sinav).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!SinavExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        
        [HttpPost]
        [Authorize]
        public async Task<IActionResult> PostSinav([FromBody] Sinav Sinav)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var userId = HttpContext.User.Claims.First().Value;

            Sinav.OwnerId = userId;

            _context.Sinav.Add(Sinav);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetSinav", new { id = Sinav.Id }, Sinav);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteSinav([FromRoute] int id)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            var Sinav = await _context.Sinav.FindAsync(id);
            if (Sinav == null)
            {
                return NotFound();
            }

            _context.Sinav.Remove(Sinav);
            await _context.SaveChangesAsync();

            return Ok(Sinav);
        }

        private bool SinavExists(int id)
        {
            return _context.Sinav.Any(e => e.Id == id);
        }
    }
}