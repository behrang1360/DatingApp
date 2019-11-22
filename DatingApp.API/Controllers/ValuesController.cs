using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using DatingApp.API.Data;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace DatingApp.API.Controllers
{
    [Authorize]
    [Route("api/[controller]")]
    [ApiController]
    public class ValuesController : ControllerBase
    {
        public DatingAppDbContext _DbContext { get; }

        public ValuesController(DatingAppDbContext dbContext)
        {
            _DbContext = dbContext;
        }

        // GET api/values
        [HttpGet]
        [AllowAnonymous]
        public async Task<IActionResult> Get()
        {
            var values = await _DbContext.Values.ToListAsync();
            return Ok(values);
        }

        // GET api/values/5
        [HttpGet("{id:int}")]
        [AllowAnonymous]
        public async Task<IActionResult> Get(int id)
        {
            var value = await _DbContext.Values.FirstOrDefaultAsync(c => c.Id == id);
            return Ok(value);
        }

        // POST api/values
        [HttpPost]
        [AllowAnonymous]
        public void Post(string value)
        {
        }

        [HttpPost("test")]
        [AllowAnonymous]
        public IActionResult test([FromBody]string sss)
        {
            return Content(sss);
        }

        // PUT api/values/5
        [HttpPut("{id}")]
        public void Put(int id, [FromBody] string value)
        {
        }

        // DELETE api/values/5
        [HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
